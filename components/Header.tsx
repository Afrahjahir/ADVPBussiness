import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@mui/material";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRouter } from "next/router";
import {
  FunctionComponent,
  useState,
  useCallback,
  MouseEvent,
  Fragment
} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMobile, withResponsiveDialog } from "mui-extended";
import Link from "next/link";
import { services } from "./services";

const DesktopServicesMenu: FunctionComponent<ButtonProps> = btnProps => {
  const [btnRef, setBtnRef] = useState<null | HTMLButtonElement>(null);

  const handleOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setBtnRef(e.currentTarget);
  }, []);

  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement | HTMLElement>) => {
      let didMouseLeave = true;
      if (e.type == "mouseleave") {
        const btnPos = e.currentTarget.getBoundingClientRect();
        if (
          btnPos.left < e.clientX &&
          e.clientX < btnPos.right &&
          btnPos.top < e.clientY &&
          e.clientY < btnPos.right
        ) {
          didMouseLeave = false;
        }
      }
      if (didMouseLeave) {
        setBtnRef(null);
      }
    },
    []
  );

  return (
    <>
      <Button
        {...btnProps}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={handleOpen}
        sx={{ zIndex: 200000 }}
      >
        Our Services
      </Button>
      <Menu
        sx={{ mt: "50px", maxWidth: 300 }}
        id="menu-appbar"
        anchorEl={btnRef}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={!!btnRef}
        onClose={handleClose}
        onClick={handleClose}
      >
        {services.map(service => (
          <Fragment key={service.title}>
            <MenuItem>
              <Link
                href={service.url}
                style={{
                  color: "inherit",
                  textDecoration: "inherit"
                }}
              >
                {service.title}
              </Link>
            </MenuItem>
            <Divider />
          </Fragment>
        ))}
      </Menu>
    </>
  );
};

const DesktopMenu: FunctionComponent = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center">
        <Box
          flexGrow={1}
          py={1}
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Image src="/logo.png" alt="ADVP Logo" width="200" height="80" />
          <Box marginTop={3} width="100%">
            <Typography variant="subtitle1" fontWeight={500}>
              CIN : U43299KA2023PTC172498
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              GST : 29AAYCA5471A1ZD
            </Typography>
          </Box>
        </Box>
        <Link href="/">
          <Button
            size="large"
            variant={currentPath == "/" ? "contained" : "text"}
            sx={{ mx: 1 }}
          >
            Home
          </Button>
        </Link>
        <Link href="/about-us">
          <Button
            size="large"
            variant={currentPath.startsWith("/about-us") ? "contained" : "text"}
            sx={{ mx: 1 }}
          >
            About Us
          </Button>
        </Link>
        <Link href="/services">
          <DesktopServicesMenu
            size="large"
            variant={currentPath.startsWith("/services") ? "contained" : "text"}
            sx={{ mx: 1 }}
          >
            Our Services
          </DesktopServicesMenu>
        </Link>
        <Link href="/contact">
          <Button
            size="large"
            variant={currentPath.startsWith("/contact") ? "contained" : "text"}
            sx={{ mx: 1 }}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

const CustomDialog = withResponsiveDialog(Dialog);

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flexGrow={1}>
            <Box>
              <Image src="/logo.png" alt="ADVP Logo" width="150" height="60" />
              <Typography variant="body2">
                CIN : U43299KA2023PTC172498
              </Typography>
              <Typography variant="body2">GST : 29AAYCA5471A1ZD</Typography>
            </Box>
          </Box>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <CustomDialog open={open} onClose={handleClose}>
          <DialogTitle display="flex">
            <Box flexGrow={1} p={1}>
              <Image src="/logo.png" alt="ADVP Logo" width="150" height="60" />
            </Box>
            <IconButton aria-label="delete" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent onClick={handleClose}>
            <List>
              <Link
                href="/"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItem>Home</ListItem>
              </Link>
              <Divider />
              <Link
                href="/about-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItem>About Us</ListItem>
              </Link>
              <Divider />
              <Link
                href="/services"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItem>Our Services</ListItem>
              </Link>
              <Divider />
              <Link
                href="/contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItem>Contact</ListItem>
              </Link>
              <Divider />
            </List>
          </DialogContent>
        </CustomDialog>
      </Container>
    </>
  );
};

export const Header = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  const router = useRouter();
  const currentPath = router.asPath;
  const isMobile = useMobile();
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          color: "black"
        }}
        position={currentPath == "/" ? "fixed" : "relative"}
        elevation={scrolled ? 4 : 0}
      >
        <Toolbar>{isMobile ? <MobileMenu /> : <DesktopMenu />}</Toolbar>
      </AppBar>
      <Box position="fixed" bottom="15px" right="10px" zIndex={1}>
        <a
          data-action="open"
          data-phone="6361130161"
          data-message="Hello team! I would like to know more details on this."
          role="button"
          target="_blank"
          href={
            isMobile
              ? "http://api.whatsapp.com/send?phone=6361130161&text=Hello%20team!%20I%20would%20like%20to%20know%20more%20details%20on%20this."
              : "https://web.whatsapp.com/send?phone=6361130161&amp;text=Hello%20team!%20I%20would%20like%20to%20know%20more%20details%20on%20this."
          }
          style={{
            textDecoration: "none",
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#25D366",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <WhatsAppIcon sx={{ marginRight: "5px" }} />
          How can I help you?
        </a>
      </Box>
    </>
  );
};
