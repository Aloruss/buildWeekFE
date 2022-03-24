import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Button as ButtonMui,
} from "@material-ui/core";
import { Formik, Form as Formi } from "formik";
import * as Yup from "yup";
import { Textfield } from "../Form/TextField";
import { andis } from "../../data/andis";
import { Button } from "../Form/Button";
import { Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// all the forms can be refactored because they mostly contain common code
const andiNameAndId = {};
andis.forEach((item) => {
  andiNameAndId[item.andiId] = item.name;
});

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const stringRegex = /[a-zA-Z]/;
const INITIAL_FORM_STATE = {
  name: "",
  squad: "",
  role: "",
  level: "",
  andTitle: "",
};
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
  squad: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
  role: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
  level: Yup.number().typeError("Please enter a valid level number").required(),
  andTitle: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
});
export const AddAndiForm = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {alert && (
        <Alert
          severity={success ? "success" : "error"}
          onClose={() => {
            navigate("/admin/landing");
          }}
        >
          {alertContent}
        </Alert>
      )}
      {!alert && (
        <>
          <Grid container>
            <Grid item xs={12}>
              <Container maxWidth='md'>
                <div className={classes.formWrapper}>
                  <Formik
                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log(values);
                      axios
                        .post("http://127.0.0.1:5000/moonapi/v1/newAndi/", {
                          values,
                        })
                        .then((res) => {
                          if (res.status === 201) {
                            setSuccess(true);
                            setAlertContent("YAAAAAS");
                            setAlert(true);
                            setSubmitting(false);
                            resetForm(INITIAL_FORM_STATE);
                          } else {
                            setSuccess(false);
                            setAlertContent("OH NOOOO! SOMETHING WRONG,RETRY");
                            setAlert(true);
                          }
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    <Formi>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>
                            Please fill those fields with the ANDi details
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Textfield name='name' label='Full Name' />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                          <Textfield name='squad' label='Squad' />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                          <Textfield name='role' label='Role' />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                          <Textfield name='level' label='level' />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                          <Textfield name='andTitle' label='AND title' />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={3}>
                          <ArrowBackIosIcon
                            color='secondary'
                            onClick={() => navigate("/admin/landing")}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Button>Submit</Button>
                        </Grid>
                      </Grid>
                    </Formi>
                  </Formik>
                </div>
              </Container>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
