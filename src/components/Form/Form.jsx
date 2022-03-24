import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form as Formi } from "formik";
import * as Yup from "yup";
import { Textfield } from "../Form/TextField";
import { Select } from "../Form/Select";
import { andis } from "../../data/andis";
import { DateTimePicker } from "../Form/DateTimePicker";
import { Button } from "../Form/Button";
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
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  andi: "",
  startDate: "",
  endDate: "",
  message: "",
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .matches(stringRegex, "Just letters"),
  lastName: Yup.string()
    .required("Required")
    .matches(stringRegex, "Just letters"),
  email: Yup.string().email("Invalid Email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required(),
  andi: Yup.string().required(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  message: Yup.string(),
});
export const Form = () => {
  const classes = useStyles();
  return (
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
              }}
            >
              <Formi>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield name='firstName' label='First Name' />
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield name='lastName' label='Last Name' />
                  </Grid>
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                    <Textfield name='email' label='Email' />
                  </Grid>
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                    <Textfield name='phone' label='Phone number' />
                  </Grid>
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                    <Select name='andi' label='Andi' options={andiNameAndId} />
                  </Grid>
                  <Grid item xs={6} />
                  <Grid item xs={3}>
                    <DateTimePicker name='startDate' label='Starting Date' />
                  </Grid>
                  <Grid item xs={3}>
                    <DateTimePicker name='endDate' label='Ending Date' />
                  </Grid>
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                    <Textfield
                      name='message'
                      label='Reasons'
                      multiline={true}
                      rows={4}
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
