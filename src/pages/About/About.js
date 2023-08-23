import React from 'react'
import { NavDiv } from '../Home'
import Page from '../../components/Page';
import { Grid, Stack, Typography } from '@mui/material';


const AboutText = [
  {
    id: 1,
    title: "Vision",
    color: "#6B0801",
    subtext:
      "To revolutionize the way businesses, use technology, by developing and delivering software services that are agile, scalable, and future-proof, and that enable them to stay ahead of the curve in a fast-evolving digital economy",
  },
  {
    id: 2,
    title: "Mission",
    color: "#F56701",
    subtext:
      "To be a socially responsible software services company that makes a positive impact on the world and contributes to the betterment of society",
  },
  {
    id: 3,
    title: "Trust & Reliability",
    color: "#298F9D",
    subtext:
      "At Kapil Technologies, we convert every transaction into a relationship and extend our support to the best of our capabilities.",
  },
  {
    id: 4,
    title: "Unparalleled & Affordable Services",
    color: "#F56701",
    subtext:
      "We hire the best and find innovative ways to solve problems that require smart work. We then pass on the benefits to our clients for mutual benefit",
  },
  {
    id: 5,
    title: "Expertise & Experience",
    color: "#F5F5F5",
    subtext:
      "Our services and products are built over 40 years of experience of Kapil Group into multiple industries.",
  },
  {
    id: 6,
    title: "True Value",
    color: "#6B0801",
    subtext:
      "We make every effort to provide our customers with great products and services, and we work just as hard to make sure they are getting the right business model that fits their needs.",
  },
];



function About() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Our Story" content="" />
      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 5,
        }}
      >
        {AboutText.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Stack direction="column" alignItems="left" justifyContent="center">
              <Typography variant="h6">
                <b>{ item.title}</b>
              </Typography>
              <Typography>
              {item.subtext}
              </Typography>
            </Stack>
          </Grid>
        ))}
        {/* <Grid item xs={4}>
          <Stack direction="column" alignItems="left" justifyContent="center">
            <Typography variant="h6">
              <b>Vision</b>
            </Typography>
            <Typography>
              To become the most loved, trusted, and innovative IT company by
              applying innovation, creativity and imagination to think beyond
              horizons.
            </Typography>
          </Stack>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default About
