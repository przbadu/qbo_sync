import { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { CustomerContext } from "../../../context/customers/context";
import { AppAlert } from "../../../components";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const context = useContext(CustomerContext);
  const navigate = useNavigate();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box style={{ marginBottom: "10px" }} justifyContent="space-between">
        {context.isDeleting && (
          <AppAlert severity="info">
            <Typography variant="subtitle1" component="div">
              Deleting {context.selectedCustomerIds.length} selected customer(s)
              - {`${context?.progress?.percent || 0}%`}
            </Typography>
          </AppAlert>
        )}
        {context.isExporting && (
          <AppAlert severity="info">
            <Typography variant="subtitle1" component="div">
              Exported {context?.progress?.count} customer(s)
            </Typography>
          </AppAlert>
        )}
      </Box>
      <Box display="flex" justifyContent="flex-start"></Box>
      <Box display="flex" justifyContent="flex-end">
        {context.selectedCustomerIds.length ? (
          <Button
            color="primary"
            variant="contained"
            onClick={() => context.deleteSelectedCustomers()}
            disabled={context.loading}
          >
            Make Inactive ({context.selectedCustomerIds.length})
          </Button>
        ) : (
          <>
            <Button
              color="primary"
              variant="contained"
              className={classes.exportButton}
              disabled={context.loading}
              onClick={context.exportCustomers}
            >
              CSV Export
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.importButton}
              disabled={context.loading}
              onClick={() => navigate("/app/customers/import")}
            >
              Import Customer
            </Button>
          </>
        )}
      </Box>
      {/* <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box> */}
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
