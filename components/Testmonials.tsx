import { Box, Container, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

const testimonials = [
  {
    message:
      "Working with ADVP Business Ventures was an absolute pleasure. Their team of dedicated professionals guided me through the entire home buying process with expertise and patience. They listened to my requirements and found me the perfect property that exceeded my expectations. I highly recommend ADVP for their exceptional service and commitment to client satisfaction.",
    user: "Ramachandra D"
  },
  {
    message:
      "I had a fantastic experience selling my property through ADVP Business Ventures. Their knowledge of the market and effective marketing strategies helped attract multiple potential buyers. They negotiated skillfully on my behalf and secured a great deal. The entire process was smooth, and their communication was outstanding. I am grateful to ADVP for their professionalism and would gladly work with them again.",
    user: "Sachin M"
  },
  {
    message:
      "I cannot thank ADVP Business Ventures enough for their outstanding property management services. As an out-of-state investor, I needed a reliable partner to oversee my properties in Bangalore. ADVP Business Ventures exceeded my expectations in every aspect. They found quality tenants, handled maintenance promptly, and provided detailed financial reports. Their expertise and professionalism have made property ownership hassle-free for me. I highly recommend ADVP for property management.",
    user: "Hemanth K S"
  },
  {
    message:
      "I was looking for a commercial space for my startup, and ADVP Business Ventures made the process seamless. They understood my business needs and diligently searched for suitable options. Their attention to detail and market knowledge were impressive. They negotiated favorable lease terms on my behalf, and I am now operating in the perfect location. ADVP Business Ventures truly goes above and beyond for their clients, and I highly recommend their services.",
    user: "Keerthi M"
  },
  {
    message:
      "I recently purchased my first home with the help of ADVP Business Ventures, and I couldn't be happier. Their team guided me through every step, patiently explaining the process and answering all my questions. They showed me a range of properties that matched my criteria and helped me make an informed decision. I felt supported and well taken care of throughout the entire journey. I highly recommend ADVP Business Ventures for their professionalism and expertise in real estate.",
    user: "Shalini S"
  }
];

const TextRoler = () => {
  const [items, setItems] = useState([0]);

  useEffect(() => {
    const noOfItems = 5;
    let currentItem = 0;
    const intervalId = setInterval(() => {
      currentItem++;
      if (currentItem == noOfItems) {
        currentItem = 0;
      }
      setItems([currentItem]);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box position="relative" height="400px">
      <TransitionGroup>
        {items.map(i => (
          <Fade key={i} timeout={1000}>
            <Box position="absolute">
              <Typography variant="h6" textAlign="justify" fontWeight={350}>
                {testimonials[i].message}
              </Typography>
              <Typography textAlign="right" variant="h5" color="primary">
                {testimonials[i].user}
              </Typography>
            </Box>
          </Fade>
        ))}
      </TransitionGroup>
    </Box>
  );
};

export const Testmonials = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Testimonials
      </Typography>
      <TextRoler />
    </Container>
  );
};
