import React from "react";
import { NavDiv } from "./Home";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Tab,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../components/Page";
import {
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
  FaHandPointUp,
  FaThumbsUp,
  FaShare,
  FaShareNodes,
} from "react-icons/fa6";
import { FiArrowRight, FiMoreVertical, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactBanner from "../assets/Banners/contact.png";
import { SMedia } from "../mock/FooterData";
import { BannerImage } from "./ERP/Erp";
import FormBanner from "../assets/Banners/Form.jpeg";
import GlobalBanner from "../assets/Banners/Global.jpeg";

// --------------------------------------------------------------------
export const BackContainer = styled("div")(({ theme, image }) => ({
  backgroundColor: "#012C54",
  color: "white",
  width: "100%",
  height: 370,
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const MainDetails = styled("div")(({ theme, image }) => ({
  backgroundColor: "#012C54",
  color: "white",
  width: "100%",
}));

// Icons

export const MailIcon = styled(FaEnvelope)(({ theme, image }) => ({
  fontSize: "20px",
  color: "orange",
  marginBottom: "10px",
}));

export const PhoneIcon = styled(FaPhone)(({ theme, image }) => ({
  fontSize: "20px",
  color: "orange",
  marginBottom: "10px",
}));

export const MapIcon = styled(FaMapLocationDot)(({ theme, image }) => ({
  fontSize: "22px",
  color: "orange",
  marginBottom: "10px",
}));

export const FollowIcon = styled(FaThumbsUp)(({ theme, image }) => ({
  fontSize: "23px",
  color: "orange",
  marginBottom: "15px",
}));

// Link FaMapMarkerAlt FaHandPointUp

export const Navigation = styled(Link)(({ theme, image }) => ({
  textDecoration: "none",
  color: "white",
  marginTop: "10px",
  fontSize: 22,
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const Navigation2 = styled(Link)(({ theme, image }) => ({
  textDecoration: "none",
  color: "black",
  marginTop: "10px",
  fontSize: "16px",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const Social = styled(Link)(({ theme, image }) => ({
  textDecoration: "none",
  color: "white",
  marginTop: "10px",
  fontSize: 22,
  // border: '1px solid green',
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "white",
    color: "#012c54",
  },
}));

export const Share = styled(Box)(({ theme, image }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "50%",
  color: "#162438",
  marginRight: "10px",

  "&:hover": {
    background: "#162438",
    color: "white",
  },
}));
export const Form = styled(Stack)(({ theme, image }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "auto",
}));

export const Global = styled(Stack)(({ theme, image }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "Center",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: 500,
}));

// -------------------------------------------------------------------------------------- Reusable Components

export const BranchCards = ({
  name,
  subtitle,
  add1,
  add2,
  add3,
  image,
  cManagerli,
  cname,
  cManager,
  email,
  mobile,
  location,
  mailto,
  mobileto,
}) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 450,
        border: "1px solid #d3e1ea",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 1 }}
      >
        <Typography>
          <b>{cname}</b>
        </Typography>
        <Share>
          <FiShare />
        </Share>
      </Stack>
      <CardMedia
        component="img"
        alt={cname}
        height="168px"
        width="100%"
        image={image}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {subtitle}
        </Typography>
        <Typography variant="body1">{add1}</Typography>
        <Typography variant="body1">{add2}</Typography>
        <Typography variant="body1">{add3}</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body1">Manager:</Typography>
          <Navigation2 to={cManagerli} target="blank">
            <b>{cManager}</b>
          </Navigation2>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FaEnvelope />
          <Navigation2 to={mailto}>{email}</Navigation2>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FaPhone />
          <Navigation2 to={mobileto}>{mobile}</Navigation2>
        </Stack>
      </CardContent>
    </Card>
  );
};

// ---------------------------------------------------------------------

function Contact() {
  return (
    <div>
      <Page name="Contact Us" content="" />
      <NavDiv>.</NavDiv>
      <BackContainer>
        <BannerImage
          src={ContactBanner}
          alt="Kapil Technologies Contact Banner"
        />
      </BackContainer>

      <MainDetails>
        <Grid
          columnGap={4}
          rowGap={2}
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            p: 1,
          }}
        >
          <Grid
            item
            xs={2.5}
            sx={{ p: 0.5, textAlign: "center" }}
            component={Stack}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <MapIcon />
            <Typography variant="subtile">
              28th Floor, DBS Bank Towers <br /> Ciputra World One, Jalan Prof{" "}
              <br /> Dr. Santrio Kav 3-5 Jakarta, <br /> Indonesia -12940
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ p: 0.5 }}
            component={Stack}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <MailIcon />
            <Navigation to="mailto:contact@ptkcs.com">
              contact@ptkcs.com
            </Navigation>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{ p: 0.5 }}
            component={Stack}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <PhoneIcon />
            <Navigation to="tel:+62 852 1808 4208">
              +62 852 1808 4208
            </Navigation>
          </Grid>

          <Grid
            item
            xs={2.5}
            sx={{ p: 0.5 }}
            component={Stack}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <FollowIcon />
            <Stack direction="row" alignItems="center" spacing={1}>
              {SMedia.map((item) => (
                <Social to={item.path} key={item.id} target="blank">
                  {item.icon}
                </Social>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </MainDetails>
      <Form image={FormBanner}>
        <Stack
          sx={{
            width: 500,
            margin: 3,
            p: 2,
            borderRadius: 2,
            // background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
            background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
            color: "#162438",
          }}
          direction="column"
          alignItems="center"
          justifyContent="center"
          component="form"
          spacing={2}
          aria-disabled="true"
        >
          <Typography variant="h6">
            <b>Connect with Us – Your Thoughts Matter!</b>
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <TextField label="First Name" size="small" disabled />
            <TextField label="Last Name" size="small" disabled />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <TextField label="Country" size="small" />
            <TextField label="Designation" size="small" />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <TextField label="Company" size="small" />
            <TextField label="Email" size="small" />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <TextField label="Phone" size="small" />
            <TextField label="Industries" size="small" />
          </Stack>
          <TextField label="Message" multiline rows={5} sx={{ width:450}} />
          <Button variant="contained">
            Submit
          </Button>
        </Stack>
      </Form>

      <Global image={GlobalBanner}>
        <Box
          sx={{
            background: "white",
            p: 3,
            boxShadow: 2,
            border: "1px solid #d3e1ea",
            borderRadius: 3,
            width: 300,
            textAlign: "left",
          }}
          component={Stack}
          direction="column"
          alignItems="left"
          justifyContent="left"
          spacing={1}
        >
          <Typography variant="h5">
            <b>Global facilities</b>
          </Typography>

          <Typography variant="body1">
            Our worldwide presence narrates the tale of our collective voyage,
            imprinting itself in every corner of the globe.
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              fontSize: "20px",
              color: "darkblue",
              "&:hover": {
                color: "orange",
              },
            }}
          >
            <Typography
              sx={{ textDecoration: "none", cursor: "pointer" }}
              component={Link}
              to="/contact/our-global-presence"
            >
              Check Offices
            </Typography>
            <FiArrowRight />
          </Stack>
        </Box>
      </Global>
    </div>
  );
}

export default Contact;
