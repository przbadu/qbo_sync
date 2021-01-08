import { makeStyles, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  fileImport: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
  },
}));

const UploadCsv = ({ activeStep, setCsvData }) => {
  const classes = useStyles();

  if (activeStep !== 0) return null;

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Notes:</Typography>
          <Typography variant="subtitle1">
            - All your customer information must be in one file
          </Typography>
          <Typography variant="subtitle1">
            - The top row of your file must contain a header title for each
            column of information
          </Typography>
          <Typography variant="subtitle1">
            - <strong>Customer Name</strong> is the only required field
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.fileImport}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Select a CSV file to upload
            </Typography>
            <input type="file" />
            <br />
            <a href="">
              <Typography style={{ marginTop: "10px" }}>
                Download a sample file
              </Typography>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadCsv;
