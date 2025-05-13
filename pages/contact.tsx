import { Box } from "@mui/material";
import Image from "next/image";

const Contact = () => (
  <Box display="flex" position="relative">
    <Image src="/bg5.jpg" alt="" fill style={{ objectFit: "fill" }} />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScPYSpp9PIe8yW6NvPgSzWwUELIKnki70_wpLL3AWHWTOralg/viewform?embedded=true"
      width="640"
      height="968"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      style={{ margin: "auto", zIndex: 1000 }}
    >
      Loading…
    </iframe>
  </Box>
);

export default Contact;
