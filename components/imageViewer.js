import React, { useEffect, useState } from "react";
import { IconButton, Dialog, DialogContent, Fade } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

function ImageViewer({ images, initIndex, ...imageProps }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initIndex);

  const handleClickOpen = () => {
    setIndex(initIndex)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setIndex(initIndex);
  }, [initIndex]);

  return (
    <>
      <Image {...imageProps} onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="image-viewer"
        fullScreen
        PaperProps={{
          style: {
            position: "relative",
          },
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "right",
            display: "flex",
          }}
        >
          <IconButton color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
        </div>
        <DialogContent>
          <div
            style={{
              display: "flex",
              alignItems: "space-between",
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={handlePrev} disabled={!open}>
              <ArrowBackIos />
            </IconButton>
            <div
              style={{
                height: "88vh",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                {...imageProps}
                src={images[index]}
                objectFit="contain"
                style={{
                  height: "88vh",
                  objectFit: "contain",
                }}
              />
            </div>
            <IconButton onClick={handleNext} disabled={!open}>
              <ArrowForwardIos />
            </IconButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageViewer;
