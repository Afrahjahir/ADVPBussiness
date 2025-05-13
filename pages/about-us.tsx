import { Box, Container, Typography } from "@mui/material";
import { TitleGraphic } from "../components/TitleGraphic";
import { VisionMission } from "../components/VisionMission";
import { WhyChooseUs } from "../components/WhyChooseUs";

const AboutUs = () => {
  return (
    <>
      <TitleGraphic title="About Us" image="/bg2.jpg" />
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ my: 5 }} textAlign="justify">
          ADVP Business Ventures Private Limited is a leading Property
          Management & Real Estate Company involved in multiple Real Estate
          activities like Construction, Buying of Properties, Selling of
          Properties, Property Management into Rental & Lease Services. We have
          10 years of experience in Various Real Estate activities.
        </Typography>
        <Box my={3}>
          <VisionMission />
        </Box>
      </Container>
      <WhyChooseUs />
    </>
  );
};

export default AboutUs;
