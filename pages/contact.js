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

const EMAIL_STATUS = {
  UNSENT: 1,
  SENDING: 2,
  SENT: 3,
  ERROR: 4,
};

const images = importAll(
  require.context("../public/resources/contact", false, /\.(png|jpe?g|svg)$/)
);

const libraries = ["places"];

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState(EMAIL_STATUS.UNSENT);
  const formik = useFormik({
    initialValues: fields.reduce((o, key) => ({ ...o, [key]: "" }), {}),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post("/api/mail", { body: JSON.stringify(values) })
        .then(() => console.log("email successfully fulfilled"));
    },
  });
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? "",
    libraries,
  });

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //
  // });
  const {
    ready,
    value: locationValue,
    suggestions: { status, data },
    setValue: setLocationValue,
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300 });

  const handleLocationValueChange = (e) => {
    console.log(e);
    setLocationValue(e.target.value);
    formik.handleChange(e);
  };

  // const handleFormDataChange = (event, name) => {
  //   setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  // };
  const handleValueChange = useCallback(
    (e, value) => {
      formik.setFieldValue(e, value);
    },
    [formik.setFieldValue, formik]
  );

  const handleSelect = (val) => {
    setLocationValue(val, false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    console.log("sunmmiter");
    /*await*/ sendEmail(e); //.then()
    // Email marina
    // In then
    setEmailStatus(EMAIL_STATUS.SENT); // or ERROR
  };

  const /*async*/ sendEmail = (e) => {
      setEmailStatus(EMAIL_STATUS.SENDING);
    };

  const handleAnotherEventClick = () => {
    setEmailStatus(EMAIL_STATUS.UNSENT);
  };

  // if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <NavBar />
      {/* {console.log(ready, value, { suggestions: { status, data } }, setValue)} */}
      <center className="contact-banner-container">
        <div className="contact-banner-box">
          <SecondaryTypography variant="h2" className="contact-banner">
            <b>Engage</b>
          </SecondaryTypography>
          <SecondaryTypography variant="h4" className="contact-banner">
            <b>
              I&apos;d love to hear from you. So, fill out the form, and be one
              step closer
              
              to photos that will last a lifetime!
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
                    {/* {console.log(data.map(({ _, description }) => description))} */}
                    <label htmlFor={e}>
                      <Typography variant="h6">{e}:</Typography>
                    </label>
                    {{
                      Time: (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            onChange={(value) => formik.setFieldValue(e, value)}
                            value={formik.values[e]}
                            name={e}
                            id={e}
                            inputFormat="MM/DD/YYYY HH:MM"
                            className="contact-field"
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                inputProps={{
                                  ...params.inputProps,
                                  placeholder: "MM/DD/YYYY HH:MM",
                                }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      ),
                      Location: (
                        <Autocomplete
                          disablePortal
                          id={e}
                          freeSolo
                          onChange={(e) => console.log(e)}
                          options={data.map(
                            ({ _, description }) => description
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              value={locationValue}
                              onChange={handleLocationValueChange}
                              // autoComplete="false"
                              name={e}
                            />
                          )}
                        />
                      ),
                      "Phone number": (
                        <MuiTelInput
                          defaultCountry={["US"]}
                          preferredCountries={["US"]}
                          variant="outlined"
                          // onChange={handleValueChange.bind(this, e)}
                          value={formik.values[e]}
                          name={e}
                          // required
                          size="small"
                          id={e}
                          className="contact-field"
                        />
                      ),
                    }[e] || (
                      <TextField
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values[e]}
                        name={e}
                        required
                        multiline={e === "Event details"}
                        size="small"
                        id={e}
                        rows={e === "Event details" ? 4 : 1}
                        className="contact-field"
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
                <Card className="contact-banner-sent">
                  <SecondaryTypography variant="h4">
                    {emailStatus === EMAIL_STATUS.SENT ? "Success" : "Error"}
                  </SecondaryTypography>
                  <SecondaryTypography variant="h5" className="contact-banner">
                    {emailStatus === EMAIL_STATUS.SENT ? (
                      <SecondaryTypography variant="h5">
                        Thank you! An email has been sent to Marina and Chris
                        with your information. <br />
                        You can either add another event or return to the main
                        page.
                      </SecondaryTypography>
                    ) : (
                      <SecondaryTypography variant="h5">
                        There was an error in submitting your information.
                        Please either try again or try later.
                      </SecondaryTypography>
                    )}
                  </SecondaryTypography>
                  {/* <CardActionArea> */}
                  {emailStatus === EMAIL_STATUS.SENT ? (
                    <>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "0px !important",
                        }}
                        size="large"
                        onClick={handleAnotherEventClick}
                      >
                        Add another event
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "0px !important",
                        }}
                        size="large"
                      >
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
                </Card>
              </div>
            ) : (
              <></>
            )}
          </div>
        </form>
        <div className="contact-inner">
          {images.map((e, i) => (
            <Image key={i} priority alt="" src={e} className="contact-image" />
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
