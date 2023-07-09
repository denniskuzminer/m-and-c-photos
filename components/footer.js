import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { importAll } from "../utils/importUtils";
import InstagramIcon from "@mui/icons-material/Instagram";
import Socials from "../components/socials";
import Image from "next/image";
import { Breakpoint, useCurrentBreakpointName } from "react-socks";
import { setDefaultWidth } from "react-socks";
import ImageViewer from "./imageViewer";

const responsiveSettings = {
  masonryColumns: {
    xsmall: 2,
    small: 2,
    medium: 3,
    large: 4,
    default: 4,
  },
  masonrySpacing: {
    xsmall: 1.3,
    small: 1.3,
    medium: 1.6,
    large: 2,
    default: 2,
  },
};

const images = importAll(
  require.context("../public/resources/footer", false, /\.(png|jpe?g|svg)$/)
);

function FooterImage({ index, styles }) {
  return (
    <Box className="footer-image portfolio-image-container" style={styles}>
      <ImageViewer
        images={images}
        initIndex={index}
        alt=""
        src={images[index]}
      />
    </Box>
  );
}

export default function Footer() {
  const breakpoint = useCurrentBreakpointName();
  setDefaultWidth(
    {
      xsmall: 0,
      small: 376,
      medium: 426,
      large: 769,
      xlarge: 1025,
    }[breakpoint]
  );

  const bottomFooter = (
    <>
      <Typography className="footer-link">
        <a
          href="privacy-policy-terms-conditions"
          className="privacy-policy-terms-conditions-link"
        >
          {/* Privacy Policy and Terms & Conditions */}
        </a>
      </Typography>
      <Typography className="footer-link footer-center">
        Husband and wife photographers located in the NYC/NJ area and traveling
        to wherever your story is!
      </Typography>
      <Socials />
    </>
  );

  return (
    <footer>
      <div className="footer">
        <div className="footer-title">
          <Typography>Check us out on Instagram</Typography>
        </div>
        <center
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#8b9da3",
              borderRadius: "0px !important",
            }}
            size="large"
            className="footer-instagram-link"
          >
            <Typography>
              <a
                href="https://www.instagram.com/mandc_photography/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mandc_photography
              </a>
            </Typography>
          </Button>
        </center>
        {["medium", "large", "xlarge"].includes(breakpoint) && (
          <div className="footer-images-container">
            {images.map((e, i) => (
              <Box key={i} className="footer-image portfolio-image-container">
                <ImageViewer images={images} initIndex={i} alt="" src={e} />
              </Box>
            ))}
          </div>
        )}
        {["small", "xsmall"].includes(breakpoint) && (
          <div style={{ marginTop: "10px" }}>
            <div className="footer-images-container">
              <FooterImage index={0} />
              <FooterImage index={1} />
            </div>
            <div className="footer-images-container">
              <FooterImage index={2} />
              <FooterImage index={3} />
            </div>
            <center style={{ width: "100%" }}>
              <FooterImage style={{ width: "46%" }} index={4} />
            </center>
          </div>
        )}
        {["large", "xlarge"].includes(breakpoint) && (
          <div
            className={"footer-links-container footer-links-container-desktop"}
          >
            {bottomFooter}
          </div>
        )}
        {["medium", "small", "xsmall"].includes(breakpoint) && (
          <div
            className={"footer-links-container footer-links-container-mobile"}
          >
            {bottomFooter}
          </div>
        )}
      </div>
    </footer>
  );
}
