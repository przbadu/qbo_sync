import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Footer = ({ activeStep, steps, handleBack, handleNext, invalid }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <Button
        onClick={handleBack}
        className={classes.backButton}
        variant="contained"
      >
        {activeStep === 0 ? "Cancel" : "Back"}
      </Button>
      <Button
        disabled={invalid}
        variant="contained"
        color="primary"
        onClick={handleNext}
      >
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

export default Footer;
