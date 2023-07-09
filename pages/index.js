import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
// import Carousel from "../components/carousel";
import { importAll } from "../utils/importUtils";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Fragment, useEffect, useState } from "react";
import { LayeredImage } from "react-layered-image";

const carouselImages = importAll(
  require.context(
    "../public/resources/landing/carousel",
    false,
    /\.(png|jpe?g|svg)$/
  )
).reverse();

const logoImages = importAll(
  require.context("../public/resources/logo", false, /\.(png|jpe?g|svg)$/)
);

export default function Home() {
  const [pageImages, setPageImages] = useState([]);

  useEffect(() => {
    setPageImages(
      importAll(
        require.context(
          "../public/resources/landing/page",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    );
  }, []);

  return (
    <div className="root landing-root">
      <NavBar />
      <div>
        <Carousel
          navButtonsAlwaysVisible
          swipe
          sx={{
            borderRadius: "10px",
            marginTop: "10px",
          }}
          navButtonsProps={{
            sx: {
              background: "transparent !important",
            },
          }}
          NextIcon={<EastIcon />}
          PrevIcon={<WestIcon />}
          animation="fade"
          indicatorContainerProps={{
            sx: {
              marginTop: "-80px",
              marginBottom: "10px",
              zIndex: "99",
              position: "relative",
            },
          }}
          indicatorIconButtonProps={{
            sx: {
              padding: "5px",
            },
          }}
          IndicatorIcon={<CameraAltIcon />}
          className="carousel"
        >
          {carouselImages.map((e, i) => (
            <div key={i} className="carousel-image-container">
              <div className="overlap-images">
                <Image priority src={e} alt="" />
              </div>
            </div>
          ))}
        </Carousel>
        <div className="landing-description">
          <Typography variant="h5">
            Hi! We are Marina & Christopher,
            <br />
            New York/New Jersey-based husband & wife
            <br />
            photographers capturing engagements,
            <br />
            showers, weddings, maternity, family,
            <br />
            graduations & more!
          </Typography>
        </div>
      </div>
      <div>
        {pageImages.map((e, i) => (
          <Image
            priority
            alt=""
            src={e}
            style={{
              borderRadius: "10px",
            }}
            key={i}
            // height={"500px"}
            // width={"500px"}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
