import {
  Alert,
  Autocomplete,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { VscSend } from "react-icons/vsc";
import { countrys } from "../../mock/ContactData";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postEnquiry } from "../../api/Main";

const schema = yup.object({
  fname: yup.string(),
  lname: yup.string(),
  cname: yup.string(),
  cemail: yup.string(),
  industry: yup.string(),
  location: yup.string(),
  country: yup.string(),
  ccode: yup.string(),
  mobile: yup.string(),
  message: yup.string(),
});

function Contactform() {
  const [Message, setMessage] = useState("");
  const defaultValues = {
    fname: "",
    lname: "",
    cname: "",
    cemail: "",
    industry: "",
    location: "",
    country: "",
    ccode: "",
    mobile: "",
    message: "",
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log("form Data", data);
    postEnquiry(data)
      .then((res) => {
        console.log(res);
        const status = res.data.code;
        if (status === 201) {
          setMessage("success");
        } else setMessage("error");
      })
      .catch((err) => {
        console.log(err);
        setMessage("error");
      });
  };
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="start"
      spacing={2}
      sx={{ p: 2, width: "50%", height: "auto" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h5">Reach Our Team!</Typography>

      <Stack direction="row" alignItems="center" justifyContent="center">
        {Message === "success" ? (
          <Alert severity="success">
            "Thank you for reaching out and expressing interest in our
            services.Our Sales Representative will react out to you with in 24
            business hours."
          </Alert>
        ) : Message === "error" ? (
          <Alert severity="warning">
            Something Went Wrong ! Please Try again Later.
          </Alert>
        ) : null}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ width: "100%" }}
      >
        <TextField label="First Name" {...register("fname")} fullWidth />
        <TextField label="Last Name" {...register("lname")} fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField label="Company" {...register("cname")} fullWidth />
        <TextField label="Email" {...register("cemail")} fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField
          label="Business Vertical"
          {...register("industry")}
          fullWidth
        />
        <TextField label="Location" {...register("location")} fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Controller
          name="country"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                fullWidth
                value={
                  value
                    ? countrys.find((option) => {
                        return value == option.label;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.id} - ${option.label}`;
                }}
                options={countrys}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.label : null);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Country" />
                )}
              />
            );
          }}
        />

        <Controller
          name="ccode"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                fullWidth
                value={
                  value
                    ? countrys.find((option) => {
                        return value == option.dail;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.id} - (${option.dail})`;
                }}
                options={countrys}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.dail : null);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Country Code" />
                )}
              />
            );
          }}
        />

        <TextField label="Phone Number" {...register("mobile")} fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <TextField
          label="Your Message"
          {...register("message")}
          multiline
          rows={3}
          fullWidth
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="left"
        justifyContent="left"
        sx={{ width: "100%" }}
      >
        <Button variant="contained" type="submit" endIcon={<VscSend />}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
}

export default Contactform;
