import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import UnauthorizedImage from "../../assets/unauthorized.svg";
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
    height: 200,
  },
}));

const NotAuthorizedView = () => {
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
            401: You are not authorized
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You tried to access resource which is not authorized to you. If this
            is unexpected, please contact administrator.
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
              src={UnauthorizedImage}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotAuthorizedView;
