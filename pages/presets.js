import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useState } from "react";
import { Slider, Switch, Typography } from "@mui/material";

import { importAll } from "../utils/importUtils";
import ImageViewer from "../components/imageViewer";

const images = importAll(
  require.context("../public/resources/_presets", false, /\.(png|jpe?g|svg)$/)
);

export default function Presets() {
  const [value, setValue] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSwitchChange = (event) => {
    setIsFiltered(event.target.checked);
  };

  return (
    <div className="root">
      <NavBar />
      <div className="container">
        <Typography variant="h4" component="h2">
          Adobe Lightroom Filter Presets
        </Typography>
        {/* <Image src={isFiltered ? images[0] : images[1]} alt="Demo" /> */}
        <ImageViewer images={images} initIndex={0} />

        {/* <Switch
          checked={isFiltered}
          onChange={handleSwitchChange}
          name="checked"
          inputProps={{ "aria-label": "secondary checkbox" }}
        /> */}
      </div>
      <Footer />
    </div>
  );
}
