import { Box, Container, Divider, Typography } from "@mui/material";
import { MarqueeAnimation } from "mui-extended";
import Image from "next/image";

const clients = [
  {
    title: "SS",
    image: "c_ss.webp",
    experience: "2"
  },
  {
    title: "Manipal Hospital",
    image: "c_mh.webp",
    experience: "3"
  },
  {
    title: "Adarsh Group",
    image: "c_ag.webp",
    experience: "5"
  },
  {
    title: "Prestige Group",
    image: "c_pg.webp",
    experience: "6"
  },
  {
    title: "Godreg Properties",
    image: "c_gp.webp",
    experience: "7"
  },
  {
    title: "Jain Constructions",
    image: "c_jc.webp",
    experience: "7"
  },
  {
    title: "Bharat Group",
    image: "c_bg.webp",
    experience: "7"
  },
  {
    title: "Puravankara",
    image: "c_pk.webp",
    experience: "7"
  },
  {
    title: "VSH",
    image: "c_vsh.webp",
    experience: "7"
  },
  {
    title: "Busines Hut",
    image: "c_bh.webp",
    experience: "7"
  },
  {
    title: "The Ritz Carlton",
    image: "c_rc.webp",
    experience: "7"
  },
  {
    title: "GS",
    image: "c_gs.webp",
    experience: "7"
  },
  {
    title: "Dell",
    image: "c_dell.webp",
    experience: "7"
  },
  {
    title: "Samsumg",
    image: "c_samsung.webp",
    experience: "7"
  },
  {
    title: "Wipro",
    image: "c_wipro.webp",
    experience: "7"
  },
  {
    title: "D&A",
    image: "c_da.webp",
    experience: "7"
  },
  {
    title: "RCB Associates",
    image: "c_rcba.webp",
    experience: "7"
  }
];

export const ClientSlider = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 7 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Clients
      </Typography>
      <Box>
        <MarqueeAnimation repeat speed={40000}>
          <Box>
            {clients.map(client => (
              <Box
                key={client.title}
                width={222}
                height={153}
                m={1}
                position="relative"
                display="inline-block"
                p={2}
              >
                <Image
                  src={"/clients/" + client.image}
                  alt={client.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </MarqueeAnimation>
      </Box>
      <Divider variant="middle" />
    </Container>
  );
};
