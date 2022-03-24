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
  name: "",
  logo: "",
  description: "",
  stackTech: [],
};
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Required").matches(stringRegex, "Just letters"),
  logo: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  stackTech: Yup.string().typeError("Please select at least one").required(),
});
export const AddClientForm = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const navigate = useNavigate();
  return (
    <>
      {alert && (
        <Alert
          severity='success'
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
                    console.log(values);
                    resetForm(INITIAL_FORM_STATE);
                    setSubmitting(false);
                    setAlertContent("YAAAAAS");
                    setAlert(true);
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
                        <Textfield name='name' label='Client name' />
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
                        <Select
                          name='stackTech'
                          label='Tech Stack'
                          options={techStackOptions}
                        />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
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
