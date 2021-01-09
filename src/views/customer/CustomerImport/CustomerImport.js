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

// TODO: fix this with server side import
import data from "./data.json";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  stepContent: {
    padding: theme.spacing(4),
  },
  footer: {
    padding: theme.spacing(1),
    background: "#F1F1F1",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function getSteps() {
  return ["UPLOAD", "MAP HEADERS", "VERIFY AND IMPORT"];
}

const CustomerImport = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [csvHeaders, setCsvHeaders] = React.useState(null); // headers extracted from csv
  const [csvMappings, setCsvMappings] = React.useState(null); // mapping of headers with our supported headers
  const [csvData, setCsvData] = React.useState(null); // data used to make changes
  const [originalData, setOriginalData] = React.useState(null); // original csv data
  const [loading, setLoading] = React.useState(false);
  const [invalid, setInvalid] = React.useState(true);
  const classes = useStyles();
  const navigate = useNavigate();
  const steps = getSteps();

  React.useEffect(() => {
    setCsvHeaders(data.headers);
    setCsvMappings(data.mappings);
    setCsvData(data.data);
    setOriginalData(data.data);
    setInvalid(false);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) navigate("/app/customers");
    else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // update mapping from map headers page
  const updateMapping = (name, newMapping) => {
    setCsvMappings((prev) => ({
      ...prev,
      mappingInfo: {
        ...prev.mappingInfo,
        [name]: { ...prev.mappingInfo[name], colHeader: newMapping.colHeader },
      },
    }));

    // get value from newly mapped column
    // replace existing column with that value
    const mapping = csvMappings.mappingInfo[name];
    setCsvData((prev) => {
      let newItems = [...prev.items];

      originalData.items.map((item, idx) => {
        newItems[idx] = {
          ...newItems[idx],
          [mapping.colNum]: item[newMapping.colNum],
        };
      });

      return {
        ...prev,
        items: newItems,
      };
    });
  };

  // update csvData from verify and import page
  // find exact cell (row number, column number), and update its value with new value
  const updateCsvData = (rowIndex, columnIndex, newValue) =>
    setCsvData((prev) => {
      console.log(rowIndex, columnIndex);
      let newItems = [...prev.items];
      newItems[rowIndex] = { ...newItems[rowIndex], [columnIndex]: newValue };

      return {
        ...prev,
        items: newItems,
      };
    });

  return (
    <div>
      <Dialog
        fullScreen
        open
        onClose={() => navigate("/app/customers")}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: "#F4F5F8",
          },
        }}
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

              <div className={classes.stepContent}>
                <UploadCsv activeStep={activeStep} setCsvData={setCsvData} />
                <MapData
                  activeStep={activeStep}
                  csvHeaders={csvHeaders}
                  csvMappings={csvMappings}
                  onUpdateMapping={updateMapping}
                />
                <VerifyAndImport
                  activeStep={activeStep}
                  csvMappings={csvMappings}
                  csvData={csvData}
                  onUpdateCsvData={updateCsvData}
                />
              </div>
            </Grid>
          </Grid>

          <Box className={classes.footer}>
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
