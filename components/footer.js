import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { importAll } from "../utils/importUtils";
import InstagramIcon from "@mui/icons-material/Instagram";
import Socials from "../components/socials";
import Image from "next/image";

const images = importAll(
  require.context("../public/resources/footer", false, /\.(png|jpe?g|svg)$/)
);

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-title">
          <Typography>Check us out on Instagram</Typography>
        </div>
        <center>
          <Button
            variant="contained"
            sx={{ background: "#8b9da3", borderRadius: "0px !important" }}
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
        <div className="footer-images-container">
          {images.map((e, i) => (
            <Box key={i} className="footer-image">
              <Image priority alt="" src={e} />
            </Box>
          ))}
        </div>
        <div className="footer-info-container">
          <div className="footer-instagram-link-container"></div>
          <div className="footer-links-container">
            <Typography className="footer-link">
              <a
                href="privacy-policy-terms-conditions"
                className="privacy-policy-terms-conditions-link"
              >
                Privacy Policy and Terms & Conditions
              </a>
            </Typography>
            <Typography className="footer-link footer-center">
              Husband and wife photographers located in the NYC/NJ area and
              traveling to wherever your story is!
            </Typography>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
