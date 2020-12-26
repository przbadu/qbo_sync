import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { useStyles } from "./callbackStyle";
import { AuthContext } from "../../context/auth/context";
import LoadingImage from "../../assets/loading.svg";
import Page from "../../components/Page";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const Callback = () => {
  const classes = useStyles();
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  useEffect(() => {
    const error = queryParams.get("error");
    const code = queryParams.get("code");

    // set error if queryParams has error
    if (error) context.setAuthError();

    if (code) {
      const decodedToken = jwtDecode(code);
      if (decodedToken) {
        context.login(decodedToken);
        navigate("/");
      } else {
        context.setAuthError();
      }
    } else {
      context.setAuthError();
    }

    console.log(context);
  }, []);

  if (context.auth.error) return <Navigate to="/500" />;

  return (
    <Page className={classes.root} title="Authenticating">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            Setting up your account, please wait...
          </Typography>
          <Box textAlign="center">
            <img alt="Loading" className={classes.image} src={LoadingImage} />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default Callback;
