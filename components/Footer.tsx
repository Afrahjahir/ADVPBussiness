import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box my={4}>
      <Divider />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6} p={6}>
            <Image src="/logo.png" alt="ADVP Logo" width="250" height="100" />
            <Typography variant="subtitle2" sx={{ my: 2 }}>
              ADVP Business Ventures Private Limited, No 72-73, 1st Floor, Gold
              Tower, Residency Road, Bangalore - 560025
            </Typography>
            <Typography variant="subtitle2" sx={{ my: 2 }}>
              +91 6361130161
            </Typography>
            <Typography variant="subtitle2">
              CIN : U43299KA2023PTC172498
            </Typography>
            <Typography variant="subtitle2">GST : 29AAYCA5471A1ZD</Typography>
            <Typography variant="caption" sx={{ my: 2 }}>
              &copy;{new Date().getFullYear()} CopyRight. ADVP Business Ventures
              Private Limited.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
