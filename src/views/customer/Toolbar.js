import { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Button, makeStyles } from "@material-ui/core";
import { CustomerContext } from "../../context/customers/context";

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
  const { selectedCustomerIds, deleteSelectedCustomers } = useContext(
    CustomerContext
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="secondary"
          variant="outlined"
          className={classes.importButton}
        >
          Import
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.exportButton}
        >
          Export
        </Button>
        {selectedCustomerIds.length ? (
          <Button
            color="primary"
            variant="contained"
            onClick={() => deleteSelectedCustomers(selectedCustomerIds)}
          >
            Make Inactive ({selectedCustomerIds.length})
          </Button>
        ) : null}
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
