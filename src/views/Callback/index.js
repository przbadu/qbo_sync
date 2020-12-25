import { useNavigate } from 'react-router-dom'
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'

import LoadingImage from '../../assets/loading.svg'
import Page from "../../components/Page";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

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

const Callback = () => {
  const classes = useStyles();
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);


  useEffect(() => {
    const err = queryParams.get("error");
    const code = queryParams.get("code")
    setError(err ? true : false);

    if (code) {
      const decodedToken = jwtDecode(code)
      if (decodedToken) {
        localStorage.setItem('user', JSON.stringify(decodedToken))
        navigate('/')
      } else {
        setError(true)
      }
    } else {
      setError(true);
    }
  }, []);

  if (error) return <Navigate to="/500" />;

  return (
    <Page className={classes.root} title="Authenticating">
        <Box display='flex' flexDirection='column' height='100%' justifyContent='center'>
          <Container maxWidth="md">

          <Typography align="center" color="textPrimary" variant="h1">
            Setting up your account, please wait...
          </Typography>
          <Box textAlign="center">
            <img
              alt="Loading"
              className={classes.image}
              src={LoadingImage}
            />
          </Box>
          </Container>
        </Box>
      </Page>
  );
};

export default Callback;
