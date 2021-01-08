import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { useNavigate } from "react-router-dom";

import Steps from "./Steps";
import Footer from "./Footer";
import Header from "./Header";
import UploadCsv from "./UploadCsv";
import MapData from "./MapData";
import VerifyAndImport from "./VerifyAndImport";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  footer: {
    padding: theme.spacing(1),
    background: "#393A3D",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function getSteps() {
  return ["UPLOAD", "MAP DATA", "IMPORT"];
}

const CustomerImport = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [csvData, setCsvData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open
        onClose={() => navigate("/app/customers")}
        TransitionComponent={Transition}
      >
        <Header />
        <Box className={classes.contentWrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Steps
                steps={steps}
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
              />

              {/* Step content */}
              <UploadCsv activeStep={activeStep} setCsvData={setCsvData} />
              <MapData activeStep={activeStep} csvData={csvData} />
              <VerifyAndImport activeStep={activeStep} csvData={csvData} />
            </Grid>
          </Grid>

          <Box container className={classes.footer}>
            <Footer
              steps={steps}
              activeStep={activeStep}
              invalid={invalid}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default CustomerImport;
