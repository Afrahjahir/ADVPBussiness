import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

export const TitleGraphic: FunctionComponent<{
  title: string;
  image: string;
}> = ({ title, image }) => (
  <Box
    position="relative"
    height="200px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
    <Box position="absolute">
      <Typography
        variant="h1"
        sx={{ textShadow: "5px 5px 3px #000" }}
        color="white"
      >
        {title}
      </Typography>
    </Box>
  </Box>
);
