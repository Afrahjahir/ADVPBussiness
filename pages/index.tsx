import { ClientSlider } from "../components/ClientsSlider";
import { ImageSlider } from "../components/ImageSlider";
import { Intro } from "../components/Intro";
import { ServiceCards } from "../components/ServiceCards";
import { Testmonials } from "../components/Testmonials";

const Index = () => {
  return (
    <>
      <ImageSlider />
      <Intro />
      <ServiceCards />
      <ClientSlider />
      <Testmonials />
    </>
  );
};

export default Index;
