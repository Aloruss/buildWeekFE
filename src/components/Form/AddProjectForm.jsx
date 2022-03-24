import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form as Formi } from "formik";
import * as Yup from "yup";
import { Textfield } from "../Form/TextField";
import { DateTimePicker } from "../Form/DateTimePicker";
import { Button } from "../Form/Button";
import { Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// all the forms can be refactored because they mostly contain common code
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const stringRegex = /[a-zA-Z]/;
const INITIAL_FORM_STATE = {
  projectName: "",
  description: "",
  lead: "",
  start: "",
  end: "",
  clientContact: "",
};
const FORM_VALIDATION = Yup.object().shape({
  projectName: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  lead: Yup.string()
    .required("Required")
    .matches(stringRegex, "This field can contain just letters"),
  start: Yup.date(),
  end: Yup.date(),
  clientContact: Yup.string(),
});
export const AddProjectForm = () => {
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
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
                        <Typography>Please fill the project details</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name='projectName' label='Project Name' />
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
                        <Textfield name='lead' label='Lead Contact' />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={3}>
                        <DateTimePicker name='start' label='Starting Date' />
                      </Grid>
                      <Grid item xs={3}>
                        <DateTimePicker name='end' label='Ending Date' />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        <Textfield
                          name='clientContact'
                          label='Client Contact'
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
