import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import JobApply from "../joinus/JobApply";
import Page from "../../components/Page";
import { getOpenings } from "../../api/Main";
import { JobDot } from "./Careers";
import { useDispatch, useSelector } from "react-redux";
import { getOpeningData } from "../../redux/Actions";

const KeyValuePairsComponent = ({ keydata, value }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {keydata}
      </Typography>
      <Typography variant="body1">:</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};

function JobDescription() {
  const Navigate = useNavigate();
  const [opening, setopening] = useState([]);
  const [jobStatus, setjobStatus] = useState("");

  const [jtitle, setJtitle] = useState({});

  const { jobid } = useParams();

  useEffect(() => {
    getOpenings()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status === true) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          const openings = res.data.response;
          const filtered = openings.filter((item) => item.jobid === jobid);
          setopening(filtered);
          const Status = filtered.map((item) => item.status);
          setjobStatus(Status[0]);

          const FilteredObject = filtered[0];
          setJtitle(FilteredObject);
        }
      })
      .catch((err) => {});
  }, []);

  // console.log(opening);

  return (
    <Stack
      direction="row"
      alignItems="start"
      justifyContent="center"
      spacing={2}
      component={Grid}
      container
      columnGap={1}
      rowGap={1}
      sx={{ marginBottom: "10px" }}
    >
      <Page
        name="Job Description"
        description={`Job Opening on ${jobid}`}
        jobid={jobid}
      />
      {opening.map((item) =>
        item.status === "active" ? (
          <Stack
            key={item.id}
            component={Grid}
            item
            xs={5.5}
            sx={{ p: 1 }}
            spacing={1}
            direction="column"
            alignItems="left"
            justifyContent="left"
          >
            <Stack
              direction="row"
              alignItem="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#233F57",
                  textTransform: "uppercase",
                }}
              >
                {item.jobtitle}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItem="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <KeyValuePairsComponent keydata="Job Id" value={item.jobid} />
              <KeyValuePairsComponent
                keydata="Category"
                value={item.category}
              />
            </Stack>

            <Stack
              direction="row"
              alignItem="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <KeyValuePairsComponent keydata="Job Mode" value={item.jobmode} />
              <KeyValuePairsComponent keydata="Job Type" value={item.jobtype} />
            </Stack>
            <Stack
              direction="row"
              alignItem="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <KeyValuePairsComponent
                keydata="Duration"
                value={item.duration === "NA" || "" ? "-" : item.duration}
              />
              <KeyValuePairsComponent
                keydata="Location"
                value={item.location === "" ? "Not Mentioned" : item.location}
              />
            </Stack>
            <KeyValuePairsComponent
              keydata="Experience"
              value={item.experience}
            />

            <KeyValuePairsComponent keydata="Description" />
            {item.description.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="start"
                spacing={1}
                sx={{ width: "100%" }}
              >
                <Typography variant="body1">{item.did}.</Typography>
                <Typography variant="body1" sx={{ width: "95%" }}>
                  {item.ddata}
                </Typography>
              </Stack>
            ))}
          </Stack>
        ) : (
          Navigate(`/join-us/application/${item.jobid}/closed`)
        )
      )}
      {jobStatus === "active" ? (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ p: 1 }}
          component={Grid}
          item
          xs={5}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Fill the form to Apply
          </Typography>
          <JobApply appliedto={jobid} JobopeningData={opening} />
        </Stack>
      ) : null}
    </Stack>
  );
}

export default JobDescription;
