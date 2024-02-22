import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MainContainer } from "../../pages/joinus/Careers";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { countrys } from "../../mock/ContactData";
import { ApplyJob } from "../../api/Main";
import { useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";

const NpArray = [
  {
    id: 1,
    label: "Immediate Joiner",
    value: "immediate joiner",
  },
  {
    id: 2,
    label: "15 days",
    value: "15 days",
  },
  {
    id: 3,
    label: "30 days",
    value: "30 days",
  },
  {
    id: 4,
    label: "60 days",
    value: "60 days",
  },
];

const yesorno = [
  {
    id: 1,
    label: "Yes",
    value: "yes",
  },
  {
    id: 2,
    label: "No",
    value: "no",
  },
];

const emailregex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

const decimalornumber = "/^[0-50]*.?[0-9]*$/";

const dateregix = "/^(0[1-9]|1d|2d|3[01])-(0[1-9]|1[0-2])-(19|20)d{2}$/";

const schema = yup.object({
  fname: yup.string().required("First Name is Required"),
  lname: yup.string().required("Last Name is Required"),
  appliedto: yup.string().required("Applied to is Required"),
  aemail: yup
    .string()
    .matches(emailregex, "Invalid email format")
    .required("Email is Required"),
  years: yup
    .string()
    .matches(/^[0-9]/, "Must be only digits")
    .required("Experience in Months is Required")
    .min(1, "Minimum 2 number")
    .max(2, "Maximum 2 numbers"),
  months: yup
    .string()
    .matches(/^[0-9]/, "Must be only digits")
    .test("", "Enter Months Between 0 to 11", (value) => {
      // console.log(value);
      return value ? value >= "0" && value <= "11" : null;
    })
    .min(1)
    .max(2),
  ryears: yup
    .string()
    .matches(/^[0-9]/, "Must be only digits")
    .required("Experience in Months is Required")
    .min(1, "Minimum 2 number")
    .max(2, "Maximum 2 numbers"),
  rmonths: yup
    .string()
    .matches(/^[0-9]/, "Must be only digits")
    .test("", "Enter Months Between 0 to 11", (value) => {
      // console.log(value);
      return value ? value >= "0" && value <= "11" : null;
    })
    .min(1)
    .max(2),
  country: yup.string().required("Country Code is Required"),
  mobile: yup
    .string()
    .matches(/^[0-9]/, "Must be only digits")
    .required("Mobile Number is Required"),
  ctc: yup
    .string()
    .required("CTC is Required")
    .matches(/^\d+(\.\d+)?$/, "Invalid format"),
  ectc: yup
    .string()
    .required("Expected CTC is Required")
    .matches(/^\d+(\.\d+)?$/, "Invalid format"),
  notice: yup.string().required("Notice Period is Required"),
  relocation: yup.string().required("Relocation is Required"),
  referance: yup.string().required("Select one Option"),
  empid: yup.string(),
  empname: yup.string(),
  status: yup.string(),
  file: yup
    .mixed()
    .test("type", "Only the PDF documents are accepted ", (value) => {
      // console.log(value);
      return value ? value.type === "application/pdf" : null;
    }),
  // .test(
  //   "name",
  //   "Name should as per your firstname-lastname.pdf ",
  //   function (value) {
  //     // console.log(value.name);
  //     const { fname, lname } = this.parent;
  //     const expectedFileName = `${fname}-${lname}.pdf`;
  //     return value ? value.name === expectedFileName : null;
  //   }
  // )
  // .test("size", "Pdf File Should be less or Equal to 100kb", (value) => {
  //   return value ? value.size <= 102400 : null;
  // }),
});

function JobApply({ JobopeningData }) {
  // console.log(JobopeningData);
  // console.log(value)
  const { enqueueSnackbar } = useSnackbar();
  const [countryCode, setCountryCode] = useState("");
  const [fileDetails, setFileData] = useState("");
  const defaultValues = {
    fname: "",
    lname: "",
    aemail: "",
    country: "",
    mobile: "",
    appliedto: "",
    years: "",
    months: "",
    ryears: "",
    rmonths: "",
    ctc: "",
    ectc: "",
    notice: "",
    date: "",
    referance: "",
    empid: "",
    empname: "",
    status: "applied",
    relocation: "",
    file: null,
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const values = watch();

  const referedValue = values.referance;

  const onSubmit = (data) => {
    const file = data.file;
    const AMobile = `${data.country}-${data.mobile}`;
    const AExperience = `${data.years} Years - ${data.months} Months`;
    const RExperience = `${data.ryears} Years - ${data.rmonths} Months`;
    const AFilename = `${data.fname}-${data.lname}.pdf`;
    const ctcdetails = `${data.ctc}  `;
    const ectcdetails = `${data.ectc}  `;

    const ReqData = {
      firstname: data.fname,
      lastname: data.lname,
      applied: data.appliedto,
      email: data.aemail,
      experience: AExperience,
      mobile: AMobile,
      status: data.status,
      internalR: data.referance,
      empid: referedValue === "Yes" ? data.empid : "",
      empname: referedValue === "Yes" ? data.empname : "",
      filename: AFilename,
      filedata: file,
      relavent: RExperience,
      date: data.date,
      ctc: ctcdetails,
      ectc: ectcdetails,
      notice: data.notice,
      relocation: data.relocation,
    };

    console.log(ReqData);

    ApplyJob(ReqData)
      .then((res) => {
        const status = res.data.success;
        if (status === true) {
          enqueueSnackbar(res.data.message, { variant: "success" });
          reset();
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        const status = err.name;
        if (status === "AxiosError") {
          enqueueSnackbar(err.response.data.message, { variant: "error" });
          // reset();
        } else {
          enqueueSnackbar(err.message, { variant: "error" });
        }
      });
  };

  return (
    <Stack
      direction="column"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="column" alignItems="start" spacing={1}>
          <TextField
            label="First Name"
            fullWidth
            {...register("fname")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="fname"
            render={({ message }) => (
              <Typography variant="b/ody2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
        <Stack direction="column" alignItems="start" spacing={1}>
          <TextField
            label="Last Name"
            fullWidth
            {...register("lname")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="lname"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>

      <Stack direction="column" alignItems="start" spacing={1}>
        <TextField
          label="Email"
          fullWidth
          {...register("aemail")}
          autoComplete="off"
          size="small"
        />
        <ErrorMessage
          errors={errors}
          name="aemail"
          render={({ message }) => (
            <Typography variant="body2" sx={{ color: "red" }}>
              {message}
            </Typography>
          )}
        />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Controller
            name="country"
            control={control}
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <Autocomplete
                  sx={{ width: "100%" }}
                  size="small"
                  value={
                    value
                      ? countrys.find((option) => {
                          return value == option.dail;
                        }) ?? null
                      : null
                  }
                  getOptionLabel={(option) => {
                    return `${option.id} - ${option.dail}`;
                  }}
                  options={countrys}
                  onChange={(e, newValue) => {
                    onChange(newValue ? newValue.dail : null);
                    setCountryCode(newValue.dail);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Code" />
                  )}
                />
              );
            }}
          />
          <ErrorMessage
            errors={errors}
            name="country"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>

        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Mobile"
            fullWidth
            {...register("mobile")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="mobile"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        alignItems="start"
        spacing={1}
        sx={{ width: "100%" }}
      >
        <Controller
          name="appliedto"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                fullWidth
                size="small"
                value={
                  value
                    ? JobopeningData.find((option) => {
                        return value == `${option.jobid} - ${option.jobtitle}`;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.jobid} - ${option.jobtitle}`;
                }}
                options={JobopeningData}
                onChange={(e, newValue) => {
                  onChange(
                    newValue ? `${newValue.jobid} - ${newValue.jobtitle}` : null
                  );
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Applied to" />
                )}
              />
            );
          }}
        />
        <ErrorMessage
          errors={errors}
          name="appliedto"
          render={({ message }) => (
            <Typography variant="body2" sx={{ color: "red" }}>
              {message}
            </Typography>
          )}
        />
      </Stack>

      <Stack
        direction="row"
        alignItem="center"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Stack
          direction="column"
          alignItems="left"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Experience in Years"
            fullWidth
            {...register("years")}
            autoComplete="off"
            size="small"
          />

          <ErrorMessage
            errors={errors}
            name="years"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Experience in Months"
            fullWidth
            {...register("months")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="months"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItem="center"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Stack
          direction="column"
          alignItems="left"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Relavent Exp in Years"
            fullWidth
            {...register("ryears")}
            autoComplete="off"
            size="small"
          />

          <ErrorMessage
            errors={errors}
            name="ryears"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Relavent Exp in Months"
            fullWidth
            {...register("rmonths")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="rmonths"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="column" alignItems="start" spacing={1}>
          <TextField
            label="CTC (in LPA)"
            fullWidth
            {...register("ctc")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="ctc"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
        <Stack direction="column" alignItems="start" spacing={1}>
          <TextField
            label="Expected CTC (in LPA)"
            fullWidth
            {...register("ectc")}
            autoComplete="off"
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="ectc"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Controller
            name="notice"
            control={control}
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <Autocomplete
                  sx={{ width: "100%" }}
                  size="small"
                  value={
                    value
                      ? NpArray.find((option) => {
                          return value == option.value;
                        }) ?? null
                      : null
                  }
                  getOptionLabel={(option) => {
                    return option.label;
                  }}
                  options={NpArray}
                  onChange={(e, newValue) => {
                    onChange(newValue ? newValue.value : null);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Notice Period" />
                  )}
                />
              );
            }}
          />
          <ErrorMessage
            errors={errors}
            name="notice"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>

        <Stack
          direction="column"
          alignItems="start"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Controller
            name="relocation"
            control={control}
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <Autocomplete
                  sx={{ width: "100%" }}
                  size="small"
                  value={
                    value
                      ? yesorno.find((option) => {
                          return value == option.value;
                        }) ?? null
                      : null
                  }
                  getOptionLabel={(option) => {
                    return option.label;
                  }}
                  options={yesorno}
                  onChange={(e, newValue) => {
                    onChange(newValue ? newValue.value : null);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Willing to relocate" />
                  )}
                />
              );
            }}
          />

          <ErrorMessage
            errors={errors}
            name="date"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </Stack>
      </Stack>

      <FormControl component="fieldset">
        <FormLabel component="legend">
          Refferred by Internal Employee of KCS Technologies
        </FormLabel>
        <Controller
          control={control}
          name="referance"
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack direction="row" alignItems="center">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </Stack>
            </RadioGroup>
          )}
        />
        <ErrorMessage
          errors={errors}
          name="referance"
          render={({ message }) => (
            <Typography variant="body2" sx={{ color: "red" }}>
              {message}
            </Typography>
          )}
        />
      </FormControl>

      {referedValue === "Yes" ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack direction="column" alignItems="start" spacing={1}>
            <TextField
              label="Employee ID"
              fullWidth
              {...register("empid")}
              autoComplete="off"
              size="small"
            />
            <ErrorMessage
              errors={errors}
              name="empid"
              render={({ message }) => (
                <Typography variant="body2" sx={{ color: "red" }}>
                  {message}
                </Typography>
              )}
            />
          </Stack>
          <Stack direction="column" alignItems="start" spacing={1}>
            <TextField
              label="Employee Name"
              fullWidth
              {...register("empname")}
              autoComplete="off"
              size="small"
            />
            <ErrorMessage
              errors={errors}
              name="empname"
              render={({ message }) => (
                <Typography variant="body2" sx={{ color: "red" }}>
                  {message}
                </Typography>
              )}
            />
          </Stack>
        </Stack>
      ) : null}

      <Stack direction="column" alignItems="start" spacing={2}>
        <Controller
          name="file"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <TextField
                fullWidth
                size="small"
                type="file"
                onChange={(e, newValue) => {
                  // console.log(e.target.files[0]);
                  // const file = e.target.files[0];
                  // const reader = new FileReader(file);
                  // reader.readAsDataURL(file);
                  // reader.onloadend = () => {
                  //   const base64 = reader.result;
                  //   const CleanResume = base64.substring(
                  //     "data:application/pdf;base64,".length
                  //   );
                  //   setFileData(CleanResume);
                  // };
                  onChange(e.target.files[0]);
                }}
                renderInput={(params) => <TextField {...params} label="Code" />}
              />
            );
          }}
        />
        {/* <TextField
          type="file"
          size="small"
          {...register("file")}
          fullWidth
          accept=".pdf"
        /> */}
        <ErrorMessage
          errors={errors}
          name="file"
          render={({ message }) => (
            <Typography variant="body2" sx={{ color: "red" }}>
              {message}
            </Typography>
          )}
        />
      </Stack>
      <Button variant="contained" type="submit">
        Apply
      </Button>
    </Stack>
  );
}

export default JobApply;
