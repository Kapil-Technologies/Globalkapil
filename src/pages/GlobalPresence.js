import React from "react";
import Page from "../components/Page";
import { NavDiv } from "./Home";
import { CareersBanner } from "./Careers";
import CBanner from "../assets/Banners/contactus.jpeg";
import { Box, Stack, Tab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BranchCards } from "./Contact";
import { TabsData } from "../mock/ContactData";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import India from '../assets/Banners/india.png'
import USA from '../assets/Banners/usa.png'
import Indonesia from '../assets/Banners/indonesia.png'

export const ClientSections = styled(Stack)(({ theme, image }) => ({
  backgroundColor: "#d3e1ea",
  height: "350px",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const ClientSectionsLayer = styled(Stack)(({ theme, image }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  height: "350px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

function GlobalPresence() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Global Presence" content="" />
      <ClientSections image={CBanner}>
        <ClientSectionsLayer>
          <Typography variant="h6" sx={{ fontSize: "40px" }}>
            <b>Our Global Presence</b>
          </Typography>
        </ClientSectionsLayer>
      </ClientSections>
      <TabContext value={value}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ width: "100%", py: 3, marginBottom: "-10px" }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="none"
            textColor="white"
            sx={{
              "& button": {
                borderRadius: 2,
                border: "1px solid #d3e1ea",
                fontSize: "18px",
                margin: "5px",
                boxShadow: 3,
                color: "white",
                background: "#012C54",
                width: 220,
                textTransform: "uppercase",
                fontWeight: "bold",
              },

              ".Mui-selected": {
                color: "#012C54",
                background: "white",
                borderRadius: 2,
                fontSize: "18px",
                boxShadow: 3,
              },
            }}
          >
            {TabsData.map((item) => (
              <Tab
                key={item.id}
                label={item.tabname}
                value={item.tabvalue}
                sx={{
                  textTransform: "capitalize",
                }}
              />
            ))}
          </TabList>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {TabsData.map((item) => (
            <TabPanel
              value={item.tabvalue}
              
            >
              <Stack direction="row" alignItems='center' spacing={2}>
                {item.subbranches.length === 0 ? (
                  <Typography>
                    Opening Soon
                  </Typography>
                ) :item.subbranches.map((cdetails) => (
                  <BranchCards
                    name={cdetails.title}
                    subtitle={cdetails.subtitle}
                    add1={cdetails.add1}
                    add2={cdetails.add2}
                    add3={cdetails.add3}
                    image={cdetails.image}
                    cname={cdetails.cName}
                    cManager={cdetails.cManager}
                    cManagerli={cdetails.cManagerlinkedin}
                    email={cdetails.email}
                    mailto={cdetails.mailto}
                    mobile={cdetails.mobile}
                    mobileto={cdetails.mobileto}
                    location={cdetails.location}
                  />
                ))}
              </Stack>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </div>
  );
}

export default GlobalPresence;
