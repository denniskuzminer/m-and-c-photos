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

export default function Home() {
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

  return (
    <div className="root">
      <Head>
        <title>M&C Photography</title>
        <meta
          name="description"
          content="We are Marina + Christopher, New York/New Jersey-based husband + wife photographers capturing engagements, showers, weddings, maternity, family, graduations + more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
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
            <Image priority alt="" src={e} key={i} layout="intrinsic" />
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
        {pageImages.map((e, i) => (
          <Image priority alt="" src={e} key={i} layout="intrinsic" />
        ))}
      </div>
      <Footer />
      <footer></footer>
    </div>
  );
}
