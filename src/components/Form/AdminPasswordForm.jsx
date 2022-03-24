import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form as Formi } from "formik";
import * as Yup from "yup";
import { Textfield } from "./TextField";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
// all the forms can be refactored because they mostly contain common code
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const INITIAL_FORM_STATE = {
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string().required("Required").matches("123", "NICE TRY"),
});

export const AdminPasswordForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth='md'>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                resetForm(INITIAL_FORM_STATE);
                setSubmitting(false);
                navigate("/admin/landing");
              }}
            >
              <Formi>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Password</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield
                      name='password'
                      label='Password'
                      type='password'
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
  );
};
