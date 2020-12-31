import { useState, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { CustomerContext } from "../../context/customers/context";
import ProgressBar from "../../components/ProgressBar";
import getInitials from "../../utils/getInitials";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
  error: {
    color: "red",
    fontSize: "11px",
    maxWidth: "200px",
  },
}));

const Results = ({ className, ...rest }) => {
  const classes = useStyles();
  const context = useContext(CustomerContext);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = context.customers.map((customer) => customer.Id);
    } else {
      newSelectedCustomerIds = [];
    }

    context.toggleSelectAllCustomer(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, Id) => {
    const selectedIndex = context.selectedCustomerIds.indexOf(Id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        context.selectedCustomerIds,
        Id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        context.selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === context.selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        context.selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        context.selectedCustomerIds.slice(0, selectedIndex),
        context.selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    context.toggleSelectAllCustomer(newSelectedCustomerIds);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      context.selectedCustomerIds?.length ===
                      context.customers.length
                    }
                    color="primary"
                    indeterminate={
                      context.selectedCustomerIds.length > 0 &&
                      context.selectedCustomerIds.length <
                        context.customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Opening Balance</TableCell>
                <TableCell>Registration date</TableCell>
                <TableCell>Logs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.loading ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    <ProgressBar progress={context.progress} />
                  </TableCell>
                </TableRow>
              ) : (
                context.customers.map((customer) => (
                  <TableRow
                    hover
                    key={customer.Id}
                    selected={
                      context.selectedCustomerIds.indexOf(customer.Id) !== -1
                    }
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          context.selectedCustomerIds.indexOf(customer.Id) !==
                          -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, customer.Id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box alignItems="center" display="flex">
                        <Avatar className={classes.avatar}>
                          {getInitials(customer.FullyQualifiedName)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {customer.FullyQualifiedName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.PrimaryEmailAddr?.Address}</TableCell>
                    <TableCell>
                      {`${customer.BillAddr?.City}, ${customer.BillAddr?.CountrySubDivisionCode}, ${customer.BillAddr?.Line1}`}
                    </TableCell>
                    <TableCell>
                      {customer.PrimaryPhone?.FreeFormNumber}
                    </TableCell>
                    <TableCell>${customer.Balance}.00</TableCell>
                    <TableCell>
                      {moment(customer.MetaData?.CreateTime).format(
                        "DD/MM/YYYY"
                      )}
                    </TableCell>
                    <TableCell>
                      <p className={classes.error}>{customer.logs}</p>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={context.totalResult}
        onChangePage={(_e, newPage) => context.updatePage(newPage)}
        onChangeRowsPerPage={(e) => context.updatePerPage(e.target.value)}
        page={context.page}
        rowsPerPage={context.perPage}
        rowsPerPageOptions={[50, 100, 250, 500, 1000]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
};

export default Results;
