
import {  useNavigate } from "react-router-dom";
import { Button, Box, Container, Typography, makeStyles } from "@material-ui/core";

import NotFoundImage from "../../assets/404.svg";
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

const NotFoundView = () => {
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
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation{" "}
          </Typography>
          <Typography variant="h3" align="center" style={{  marginTop: 20  }}>
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
              src={NotFoundImage}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;
