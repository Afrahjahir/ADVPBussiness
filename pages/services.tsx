import { Container, Typography } from "@mui/material";
import { ServiceCards } from "../components/ServiceCards";
import { TitleGraphic } from "../components/TitleGraphic";
import { WhyChooseUs } from "../components/WhyChooseUs";

const Services = () => {
  return (
    <>
      <TitleGraphic title="Our Services" image="/bg1.jpg" />
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ my: 5 }} textAlign="justify">
          ADVP Business Ventures is a leading real estate company based in
          Bangalore, specializing in providing comprehensive property solutions
          to clients across the city. With years of experience and a team of
          dedicated professionals, we strive to deliver exceptional services and
          cater to the diverse needs of our clients.
        </Typography>
      </Container>
      <ServiceCards hideLink />
      <WhyChooseUs />
    </>
  );
};

export default Services;
