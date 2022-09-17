import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Typography } from "@mui/material";
import SecondaryTypography from "../components/secondaryTypography";
import Image from "next/image";
import { importAll } from "../utils/importUtils";

const images = importAll(
  require.context("../public/resources/about", false, /\.(png|jpe?g|svg)$/)
);

export default function About() {
  return (
    <div className="root">
      <NavBar />
      <div className="about-container">
        <br />
        <SecondaryTypography variant="h2" className="about-title">
          <b> About Us</b>
        </SecondaryTypography>
        <br />
        <div className="about-marina-container">
          <div className="about-marina-description about-marina-img-container">
            {images.map((e, i) => (
              <Image
                key={i}
                priority
                alt=""
                layout="fill"
                objectFit="contain"
                src={e}
                className="about-marina-img"
              />
            ))}
          </div>
          <div
            className="about-marina-description"
            // style={{ marginLeft: "-60px" }}
          >
            <Typography variant="h4">
              <b>Hi there!</b> We{`'`}re Chris and Marina Petersen located in
              Central New Jersey! We are high school sweethearts who originally
              bonded over our love for cameras and photography when we were
              teenagers. Now in addition to our full-time jobs we get to capture
              your memories. We
              {`'`}ve traveled the Tri-state area and beyond for weddings,
              proposals, showers, family photoshoots, engagements and more! When
              working with us, you get two perspectives of the same moment for
              the price of one. So reach out today to start planning your dream
              photoshoot!
            </Typography>
            <br />
            <SecondaryTypography variant="h3" className="about-title">
              <b>We can help make your dream a reality!</b>
            </SecondaryTypography>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
