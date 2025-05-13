import { Box, Fade, Slide, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

const ImageRoler = () => {
  const [images, setImages] = useState([1]);

  useEffect(() => {
    const noOfImages = 5;
    let currentImage = 1;
    const intervalId = setInterval(() => {
      currentImage++;
      if (currentImage > noOfImages) {
        currentImage = 1;
      }
      setImages([currentImage]);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TransitionGroup>
      {images.map(i => (
        <Fade key={i} timeout={1000}>
          <Image
            src={"/bg" + i + ".jpg"}
            alt="ADVP Business Ventures"
            fill
            style={{ objectFit: "cover" }}
          />
        </Fade>
      ))}
    </TransitionGroup>
  );
};

export const ImageSlider = () => {
  return (
    <Box position="relative" height="100vh">
      <ImageRoler />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Slide direction="right" in={true} timeout={2000}>
          <Typography
            variant="h1"
            color="white"
            sx={{ textShadow: "4px 4px 2px #000" }}
          >
            ADVP
          </Typography>
        </Slide>
        <Slide direction="left" in={true} timeout={2000}>
          <Typography
            variant="h2"
            color="white"
            sx={{ textShadow: "3px 3px 2px #000" }}
          >
            Business Ventures
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};
