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
import { Fragment } from "react";
import { LayeredImage } from "react-layered-image";

const carouselImages = importAll(
  require.context(
    "../public/resources/landing/carousel",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const pageImages = importAll(
  require.context(
    "../public/resources/landing/page",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const logoImages = importAll(
  require.context("../public/resources/logo", false, /\.(png|jpe?g|svg)$/)
);

export default function Home() {
  return (
    <div
    // className="root"
    >
      <Head>
        <title>M&C Photography</title>
        <meta
          name="description"
          content="We are Marina + Christopher, New York/New Jersey-based husband + wife photographers capturing engagements, showers, weddings, maternity, family, graduations + more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar home />
        <Carousel
          navButtonsAlwaysVisible
          swipe
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
              zIndex: "2147483647",
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
                <Image priority src={e} layout="responsive" />
                {logoImages && (
                  <Image
                    priority
                    src={logoImages[0]}
                    layout="responsive"
                    // layout="fixed"
                    className="carousel-logo"
                  />
                )}
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
        {/* <div>
          {pageImages.map((e, i) => (
            <>
              <Image priority alt="" src={e} key={i} layout="intrinsic" />
            </>
          ))}
        </div> */}
      </div>
      <Footer />
      <footer></footer>
    </div>
  );
}
