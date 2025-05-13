import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";
import { services } from "./services";

export const ServiceCards: FunctionComponent<{ hideLink?: boolean }> = ({
  hideLink
}) => (
  <Container maxWidth="lg" sx={{ my: 4 }}>
    <Typography variant="h3" gutterBottom textAlign="center">
      Our Best Services
    </Typography>
    <Grid container spacing={2} sx={{ my: 4 }}>
      {services.map(service => (
        <Grid item xs={12} sm={6} md={4} key={service.title}>
          <Card>
            <CardMedia
              component="img"
              alt={service.title}
              height={140}
              image={"/services/small/" + service.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                height={210}
                fontWeight={390}
                textAlign="justify"
              >
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              {!hideLink ? (
                <Link href={service.url}>
                  <Button>Learn More</Button>
                </Link>
              ) : null}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Divider variant="middle" />
  </Container>
);
