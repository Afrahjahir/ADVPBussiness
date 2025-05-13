import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const NotFound = () => (
  <Container maxWidth="lg">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Image src="/logo.png" alt="ADVP Logo" width="250" height="100" />
      <Typography variant="h1">Coming Soon</Typography>
      <Typography variant="h4" color="secondary">
        For more information contact
      </Typography>
      <Typography variant="h5">Mr. Praveen Kumar KM</Typography>
      <Typography variant="h5">+91 6361130161</Typography>
    </Box>
  </Container>
);

export default NotFound;
