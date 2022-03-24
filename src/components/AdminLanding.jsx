import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
export const AdminLanding = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth='md'>
            <div className={classes.formWrapper}>
              <Grid item xs={6}>
                <Button
                  color='secondary'
                  variant='outlined'
                  onClick={() => navigate("/admin/landing/addandi")}
                >
                  ADD ANDI
                </Button>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={6}>
                <Button
                  color='secondary'
                  variant='outlined'
                  onClick={() => navigate("/admin/landing/addclient")}
                >
                  ADD CLIENT
                </Button>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={6}>
                <Button color='secondary' variant='outlined'>
                  ADD PROJECT
                </Button>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={6}>
                <Button color='secondary' variant='outlined'>
                  ALLOCATE ANDI
                </Button>
              </Grid>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
