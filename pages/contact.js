import Footer from "../components/footer";
import NavBar from "../components/navbar";
import TextField from "@mui/material/TextField";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
  Button,
  Typography,
  Option,
  Select,
  LinearProgress,
  MenuItem,
  CircularProgress,
  Card,
  CardActionArea,
  CardHeader,
} from "@mui/material";
import Image from "next/image";
import FormHelperText from "@mui/material/FormHelperText";

import { useFormik } from "formik";
// import MuiPhoneNumber from "material-ui-phone-number";
import { MuiTelInput } from "mui-tel-input";

import { useGoogleMapsScript } from "use-google-maps-script";
import usePlacesAutocomplete from "use-places-autocomplete";
import Autocomplete from "@mui/material/Autocomplete";

import Socials from "../components/socials";
import { Fragment, useState, memo, useCallback } from "react";
import SecondaryTypography from "../components/secondaryTypography";
import { LoadingButton } from "@mui/lab";
import MuiPhoneNumber from "material-ui-phone-number";

// import Autocomplete from "react-google-autocomplete";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import axios from "axios";
import { importAll } from "../utils/importUtils";

const fields = [
  "Name",
  "Email",
  "Phone number",
  "Event type",
  "Location",
  "Time",
  "Event details",
];

const emails = ["mkuzminer1@gmail.com", "89cpetersen@gmail.com"];

const dateIsValid = (date) => {
  console.log(date);
  return date !== "" && date instanceof Date && !isNaN(date);
};

const EMAIL_STATUS = {
  UNSENT: 1,
  SENDING: 2,
  SENT: 3,
  ERROR: 4,
};

const images = importAll(
  require.context("../public/resources/contact", false, /\.(png|jpe?g|svg)$/)
);

// const libraries = ["places"];

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState(EMAIL_STATUS.UNSENT);
  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: fields.reduce((o, key) => ({ ...o, [key]: "" }), {}),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      // if (!dateIsValid(values["Time"])) {
      //   setErrors((prevState) => ({
      //     ...prevState,
      //     Time: "Error: Date is not valid.",
      //   }));
      //   return;
      // }
      setEmailStatus(EMAIL_STATUS.SENDING);
      await axios
        .post("/api/mail", { body: values })
        .then((res) => {
          setEmailStatus(EMAIL_STATUS.SENT);
          console.log("email successfully fulfilled");
          resetForm();
          setErrors({});
        })
        .catch((err) => {
          setEmailStatus(EMAIL_STATUS.ERROR);
          console.log(error);
        });
    },
  });

  const getDefaultFieldParams = (e) => ({
    variant: "outlined",
    onChange: formik.handleChange,
    value: formik.values[e],
    name: e,
    // required: true,
    size: "small",
    id: e,
    className: "contact-field",
  });

  const handleAnotherEventClick = () => {
    setEmailStatus(EMAIL_STATUS.UNSENT);
  };

  return (
    <div className="root">
      <NavBar />
      <center className="contact-banner-container">
        <div className="contact-banner-box">
          <SecondaryTypography variant="h2" className="contact-banner">
            <b>Engage!</b>
          </SecondaryTypography>
          <SecondaryTypography variant="h4" className="contact-banner">
            <b>
              We{`'`}d love to hear from you. So, fill out the form, and be one
              step closer to photos that will last a lifetime!
            </b>
          </SecondaryTypography>
        </div>
      </center>
      {console.log("render")}
      <div className="contact-container">
        <form className="contact-inner" onSubmit={formik.handleSubmit}>
          <div className="contact-field-container">
            {emailStatus === EMAIL_STATUS.UNSENT ? (
              <>
                {fields.map((e, i) => (
                  <Fragment key={i}>
                    <label htmlFor={e}>
                      <Typography variant="h6">{e}:</Typography>
                    </label>
                    {{
                      Time: (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            onChange={(value) => formik.setFieldValue(e, value)}
                            value={formik.values[e]}
                            ignoreInvalidInputs
                            name={e}
                            id={e}
                            disablePast
                            className="contact-field time-field"
                            renderInput={(params) => (
                              <>
                                <TextField
                                  {...params}
                                  // helperText={
                                  //   errors["Time"] ? "Date is not valid" : ""
                                  // }
                                  error={dateIsValid(formik.values[e])}
                                  inputProps={{
                                    ...params.inputProps,
                                    // placeholder: "MM/DD/YYYY HH:mm (A|P)M",
                                  }}
                                />
                                {errors["Time"] && (
                                  <FormHelperText
                                    style={{
                                      color: "red",
                                      fontSize: "16px",
                                    }}
                                  >
                                    <b>Time is not valid</b>
                                  </FormHelperText>
                                )}
                              </>
                            )}
                          />
                        </LocalizationProvider>
                      ),
                      "Phone number": (
                        // <MuiTelInput
                        //   defaultCountry={["US"]}
                        //   preferredCountries={["US"]}
                        //   variant="outlined"
                        //   // onChange={handleValueChange.bind(this, e)}
                        //   // value={formik.values[e]}
                        //   // onChange={(e) => {
                        //   //   console.log(e);
                        //   // }}
                        //   value={value}
                        //   onChange={handleChange}
                        //   // onChange={formik.handleChange}
                        //   // required
                        //   size="small"
                        // />

                        <MuiPhoneNumber
                          {...getDefaultFieldParams(e)}
                          onChange={(value) => formik.setFieldValue(e, value)}
                          defaultCountry={"us"}
                          preferredCountries={["us"]}
                          disableAreaCodes={true}
                          autoFormat={false}
                        />
                      ),
                    }[e] || (
                      <TextField
                        {...getDefaultFieldParams(e)}
                        multiline={e === "Event details"}
                        rows={e === "Event details" ? 4 : 1}
                      />
                    )}
                    <br />
                  </Fragment>
                ))}
                <div className="contact-submit-container">
                  <div className="contact-submit-item contact-socials">
                    <Socials />
                  </div>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    className="contact-submit-item"
                  >
                    Submit
                  </Button>
                </div>
              </>
            ) : emailStatus === EMAIL_STATUS.SENDING ? (
              <div className="contact-sending">
                <CircularProgress
                  className="contact-loading-indicator"
                  size={160}
                  thickness={1.5}
                />
              </div>
            ) : emailStatus === EMAIL_STATUS.SENT ||
              emailStatus === EMAIL_STATUS.ERROR ? (
              <div className="contact-sending">
                <div className="contact-banner-sent">
                  <SecondaryTypography variant="h4">
                    <b>
                      {emailStatus === EMAIL_STATUS.SENT ? "Success" : "Error"}
                    </b>
                  </SecondaryTypography>
                  <SecondaryTypography variant="h5" className="contact-banner">
                    {emailStatus === EMAIL_STATUS.SENT ? (
                      <b>
                        Thank you! An email has been sent to Marina and Chris
                        with your information. <br />
                        You can either add another event or return to the main
                        page.
                      </b>
                    ) : (
                      <b>
                        There was an error in submitting your information.
                        Please either try again or try later. If this error
                        persists, feel free to email Marina and Chris directly
                        at mandcphotographynj@gmail.com
                      </b>
                    )}
                  </SecondaryTypography>
                  {/* <CardActionArea> */}
                  {emailStatus === EMAIL_STATUS.SENT ? (
                    <>
                      <Button
                        variant="contained"
                        sx={{
                          marginRight: "10px",
                        }}
                        size="large"
                        onClick={handleAnotherEventClick}
                      >
                        Add another event
                      </Button>
                      <Button variant="contained" size="large">
                        <a href="./">Go to home</a>
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "0px !important",
                      }}
                      size="large"
                      onClick={handleAnotherEventClick}
                    >
                      Back
                    </Button>
                  )}
                  {/* </CardActionArea> */}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </form>
        <div className="contact-inner contact-image-container">
          {images.map((e, i) => (
            <Image
              key={i}
              priority
              alt=""
              src={e}
              // objectFit="unset"
              className="contact-image"
            />
          ))}
          {/* <img alt="" src={images[0]} className="contact-image" /> */}
        </div>
        {/* <div className="contact-image contact-inner">This will be an image</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default memo(Contact);
