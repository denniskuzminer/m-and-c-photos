import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Typography } from "@mui/material";
import SecondaryTypography from "../components/secondaryTypography";
import Image from "next/image";
import { importAll } from "../utils/importUtils";
import { useCurrentBreakpointName } from "react-socks";

const images = importAll(
  require.context("../public/resources/about", false, /\.(png|jpe?g|svg)$/)
);

const responsiveSettings = {
  aboutTitle: {
    xsmall: "h4",
    small: "h3",
    medium: "h2",
    large: "h2",
    default: "h2",
  },
  aboutDescription: {
    xsmall: "h6",
    small: "h6",
    medium: "h5",
    large: "h4",
    default: "h4",
  },
  aboutEnding: {
    xsmall: "h4",
    small: "h4",
    medium: "h3",
    large: "h3",
    default: "h3",
  },
};

export default function About() {
  const { aboutTitle, aboutDescription, aboutEnding } = responsiveSettings;
  const breakpoint = useCurrentBreakpointName();

  const imageComponent = (
    <div
      className={
        "about-marina-description about-marina-img-container" +
        (["medium", "large", "xlarge"].includes(breakpoint)
          ? " about-add-spacing"
          : "")
      }
    >
      {images.map((e, i) => (
        <Image
          priority
          key={i}
          alt=""
          objectFit="contain"
          src={e}
          className="about-marina-img"
        />
      ))}
    </div>
  );

  const descriptionComponent = (
    <div className="about-marina-description">
      <Typography
        variant={aboutDescription[breakpoint] || aboutDescription.default}
      >
        <b>Hi there!</b> We{`'`}re Chris and Marina Petersen located in Central
        New Jersey! We are high school sweethearts who originally bonded over
        our love for cameras and photography when we were teenagers. Now in
        addition to our full-time jobs we get to capture your memories. We
        {`'`}ve traveled the Tri-state area and beyond for weddings, proposals,
        showers, family photoshoots, engagements and more! When working with us,
        you get two perspectives of the same moment for the price of one. So
        reach out today to start planning your dream photoshoot!
      </Typography>
      <br />
      <SecondaryTypography
        variant={aboutEnding[breakpoint] || aboutEnding.default}
        className="about-title"
      >
        <b>We can help make your dream a reality!</b>
      </SecondaryTypography>
    </div>
  );

  return (
    <div className="root">
      <NavBar />
      <div className="about-container">
        <br />
        <SecondaryTypography
          variant={aboutTitle[breakpoint] || aboutTitle.default}
          className="about-title"
        >
          <b>About Us</b>
        </SecondaryTypography>
        <br />
        {["xsmall", "small"].includes(breakpoint) ? (
          <center className="about-marina-container-mobile">
            {descriptionComponent}
            {imageComponent}
          </center>
        ) : (
          <div className="about-marina-container">
            {imageComponent}
            {descriptionComponent}
          </div>
        )}
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
