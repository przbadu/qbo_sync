import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import WarningImage from "../../assets/warning.svg";
import Page from "../../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560,
  },
}));

const ServerErrorView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            500: Something went wrong!
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            We were unable to process your request
          </Typography>
          <Typography variant="h3" align="center" style={{ marginTop: 20 }}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate(-2)}
            >
              Goto Back
            </Button>
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={WarningImage}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default ServerErrorView;
