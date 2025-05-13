import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import AdsClickIcon from "@mui/icons-material/AdsClick";

export const VisionMission = () => (
  <List>
    <ListItem alignItems="flex-start" sx={{ my: 3 }}>
      <ListItemAvatar>
        <SettingsAccessibilityIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h4">Our Vision</Typography>}
        secondary={
          <Typography variant="subtitle1" textAlign="justify">
            To continue our growth by providing our clients a quality and unique
            service that protects and add values to our ventures.We believe that
            working hard at something you love to do, with people you trust, is
            one of the greatest experiences in life. For every single customer,
            we will work hard and smart as we can to help them achieve their
            dreams. Finally, we believe that our business can be successful for
            generations only if you continue the tradition of trust.
          </Typography>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start" sx={{ my: 3 }}>
      <ListItemAvatar>
        <AdsClickIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h4">Our Mission</Typography>}
        secondary={
          <Typography variant="subtitle1" textAlign="justify">
            We are dedicated to achieving our vision by setting up a
            results-driven, positive, energetic work environment determined by
            the development, progression, and investment of long-term
            relationships. We appraise our success meter by the results that are
            delivered to our clients. The ideals of our group are built on its
            commitment to proffer par excellence customer service, combining an
            evinced service and gumptious flair of a rapidly-growing
            institution.
          </Typography>
        }
      />
    </ListItem>
  </List>
);
