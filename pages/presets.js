import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useState } from "react";
import { Box, Grid, Link, Slider, Switch, Typography } from "@mui/material";

import { importAll } from "../utils/importUtils";
import SecondaryTypography from "../components/secondaryTypography";
import { useCurrentBreakpointName } from "react-socks";

const presets = [
  {
    name: "Soft & Bright",
    imageSrc:
      "/resources/presets/Before _ After Backup/Bright _ Soft/Soft _ Bright B_A-2.png",
    etsyUrl:
      "https://www.etsy.com/listing/1401858802/15-essential-bright-soft-lightroom?click_key=bed68ffe2c0b369d843fe5be9aeaf5b2c06680df%3A1401858802&click_sum=34583ada&ref=shop_home_active_6&pro=1",
  },
  {
    name: "Clean Aesthetic",
    imageSrc:
      "/resources/presets/Before _ After Backup/Clean Aesthetic/Clean A (4).jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1443655396/10-clean-aesthetic-lightroom-presets?click_key=74404d5e1694a03fbd56abef1e26632ac0574164%3A1443655396&click_sum=0051b932&ref=shop_home_active_3&pro=1",
  },
  {
    name: "Deep & Moody",
    imageSrc:
      "/resources/presets/Before _ After Backup/Deep _ Moody/Before _ After 1.png",
    etsyUrl:
      "https://www.etsy.com/listing/1457863751/15-deep-moody-lightroom-presets-mobile?click_key=d74c61b85f1438a3eaa53b44dd5a904798c52f89%3A1457863751&click_sum=4ceb764a&ref=shop_home_active_2&pro=1",
  },
  {
    name: "Family Blogger",
    imageSrc:
      "/resources/presets/Before _ After Backup/Family Blogger/Family B.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1443664596/15-family-blogger-lightroom-presets?click_key=5eb16f58ea8c3639bb650986506445efc77c9c8b%3A1443664596&click_sum=d34dde07&ref=shop_home_active_9&pro=1",
  },
  {
    name: "Floral & Fun",
    imageSrc:
      "/resources/presets/Before _ After Backup/Floral _ Fun/Floral _ Fun.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1457872235/10-floral-and-fun-lightroom-presets?click_key=fdc1db04aa9ba8a56ac4f275fbb2ff08c9c70e2c%3A1457872235&click_sum=78b488d6&ref=shop_home_active_7&pro=1",
  },
  {
    name: "Golden Hour Glow",
    imageSrc:
      "/resources/presets/Before _ After Backup/Golden Hour Glow/Golden (4).jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1457876719/10-golden-hour-glow-lightroom-presets?click_key=90515c97e1f0d90d31669039953a9da9913efd13%3A1457876719&click_sum=4345c279&ref=shop_home_active_8&pro=1",
  },
  {
    name: "Natural Influencer",
    imageSrc:
      "/resources/presets/Before _ After Backup/Natural Influencer/Natural Influencer 1.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1443676558/10-natural-influencer-lightroom-presets?click_key=b7dcc5f6cdae6fcd21bda5fc3ff981876aa23bb7%3A1443676558&click_sum=4dbfcfdb&ref=shop_home_active_5&pro=1",
  },
  {
    name: "Nature",
    imageSrc:
      "/resources/presets/Before _ After Backup/Nature/Nature Before _ After.jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1443679876/10-nature-lightroom-presets-mobile-and?click_key=f5c213bb6917a9a022899bb894579e6d4510a30e%3A1443679876&click_sum=38307033&ref=shop_home_active_4&pro=1",
  },
  {
    name: "Vibrant & Colorful",
    imageSrc:
      "/resources/presets/Before _ After Backup/Vibrant _ Colorful/Vibrant _ Colorful Before _ After 1.png",
    etsyUrl:
      "https://www.etsy.com/listing/1457885961/15-vibrant-and-colorful-lightroom?click_key=3f82f9daf660e202a1e98ac9605f4f49354168a8%3A1457885961&click_sum=740a1f71&ref=shop_home_active_1&pro=1",
  },
  {
    name: "Black & White Essentials",
    imageSrc:
      "/resources/presets/Before _ After Backup/Black _ White Essentials/B_W (2).jpg",
    etsyUrl:
      "https://www.etsy.com/listing/1457853305/10-black-white-lightroom-presets-mobile?click_key=f9b8d4e64fe8f2a123ef5b69db172850ec39f0b5%3A1457853305&click_sum=18bde29c&ref=shop_home_active_10&pro=1",
  },
];

const responsiveSettings = {
  banner: {
    xsmall: "h3",
    small: "h3",
    medium: "h3",
    large: "h2",
    default: "h2",
  },
};

export default function Presets() {
  const breakpoint = useCurrentBreakpointName();
  const { banner } = responsiveSettings;

  return (
    <div className="root">
      <NavBar />
      <Box className="portfolio-heading">
        <SecondaryTypography variant={banner[breakpoint] || banner.default}>
          <b>Adobe Lightroom Presets</b>
        </SecondaryTypography>
        <Box
          display="flex"
          alignItems="center"
          margin={
            ["large", "xlarge"].includes(breakpoint) ? "0 10% 0 10%" : null
          }
        >
          <Typography align="center" variant="h6" fontWeight={600}>
            M&C Photography presets are digital filters that can be applied to
            photographs through Adobe Lightroom on desktop or mobile to enhance
            the appearance of any photo. These presets are designed to save you
            time editing while creating cohesive, beautiful, and unique looks
            for your images.{" "}
            <Link
              href="https://www.etsy.com/shop/MandCPhotoPresets?load_webview=1&bid=yyK7YyM2BYoT18IpW6YO5NjK7YUB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out our Etsy store!
            </Link>
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {presets.map((preset, index) => (
          <Grid
            className="portfolio-image-container"
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <SecondaryTypography variant="h4" align="center" gutterBottom>
                <b>{preset.name}</b>
              </SecondaryTypography>
              <Link
                href={preset.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={preset.imageSrc}
                  width={500}
                  height={500}
                  alt={preset.name}
                  unoptimized
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
}
