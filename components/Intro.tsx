import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { ThemeOptionsProvider } from "mui-extended";
import { VisionMission } from "./VisionMission";

export const Intro = () => (
  <Container maxWidth="lg">
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeOptionsProvider themeOptions={{ palette: { mode: "dark" } }}>
          <Paper sx={{ p: 2, m: 2 }}>
            <Typography variant="h4">
              Welcome to ADVP Business Ventures
            </Typography>
            <Divider sx={{ my: 5 }} />
            <Typography variant="subtitle1" textAlign="justify" padding={1}>
              ADVP Business Ventures Private Limited is a leading Property
              Management & Real Estate Company involved in multiple Real Estate
              activities like Construction, Buying of Properties, Selling of
              Properties, Property Management into Rental & Lease Services. We
              have 10 years of experience in Various Real Estate activities.
            </Typography>

            <Divider sx={{ my: 5 }} />
            <Typography>
              <i>Founder</i>
            </Typography>
            <Typography color="primary">Praveen</Typography>
          </Paper>
        </ThemeOptionsProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <VisionMission />
      </Grid>
    </Grid>
    <Divider variant="middle" />
  </Container>
);
