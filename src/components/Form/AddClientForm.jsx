import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form as Formi } from "formik";
import * as Yup from "yup";
import { Textfield } from "../Form/TextField";
import { Button } from "../Form/Button";
import { Select } from "../Form/Select";
import { Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// all the forms can be refactored because they mostly contain common code
const techStackOptions = {
  React: "React",
  Typescript: "Typescript",
  JavaScript: "JavaScript",
};
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const stringRegex = /[a-zA-Z]/;
const INITIAL_FORM_STATE = {
  clientName: "",
  logo: "",
  description: "",
  stackTech: "",
};
const FORM_VALIDATION = Yup.object().shape({
  clientName: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
  logo: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  stackTech: Yup.string().typeError("Please add a tech").required(),
});
export const AddClientForm = () => {
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
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth='md'>
              <div className={classes.formWrapper}>
                <Formik
                  initialValues={{ ...INITIAL_FORM_STATE }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    const stackTeckArray = [values.stackTech];
                    console.log({
                      ...values,
                      stackTech: [...stackTeckArray],
                    });

                    axios
                      .post("http://127.0.0.1:5000/moonapi/v1/newClient/", {
                        values,
                      })
                      .then((res) => {
                        if (res.status === 200) {
                          setSuccess(true);
                          setAlertContent("YAAAAAS");
                          setAlert(true);
                          setSubmitting(false);
                          resetForm(INITIAL_FORM_STATE);
                        } else {
                          console.log(res);
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
                        <Typography>Please fill the Client details</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name='clientName' label='Client name' />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        <Textfield name='logo' label='Logo url' />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        <Textfield
                          name='description'
                          label='Description'
                          multiline={true}
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        <Textfield name='stackTech' label='Tech Stack' />
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
      )}
    </>
  );
};
