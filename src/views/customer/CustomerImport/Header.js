import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    textTransform: "uppercase",
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Import Customers
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => navigate("/app/customers")}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
