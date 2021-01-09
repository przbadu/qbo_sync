import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TableRowSelect from "../../../components/TableRowSelect";

const useStyles = makeStyles({
  heading: {
    margin: "10px 20px",
  },
  table: {
    minWidth: 650,
  },
});

const MapData = ({ activeStep, csvHeaders, csvMappings, onUpdateMapping }) => {
  const classes = useStyles();

  if (activeStep !== 1) return null;

  return (
    <Grid>
      <Grid item md={12} lg={6}>
        <TableContainer component={Paper}>
          <Typography variant="h3" className={classes.heading}>
            Map your fields with QuickBooks fields.
          </Typography>

          <Table className={classes.table} aria-label="Map Headers">
            <TableHead>
              <TableRow>
                <TableCell>QuickBooks Online Fields</TableCell>
                <TableCell>Your Field</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowSelect
                name="Name"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Name}
                onChange={(_e, newVal) => onUpdateMapping("Name", newVal)}
              />
              <TableRowSelect
                name="Company"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Company}
                onChange={(_e, newVal) => onUpdateMapping("Company", newVal)}
              />
              <TableRowSelect
                name="Email"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Email}
                onChange={(_e, newVal) => onUpdateMapping("Email", newVal)}
              />
              <TableRowSelect
                name="Phone"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Phone}
                onChange={(_e, newVal) => onUpdateMapping("Phone", newVal)}
              />
              <TableRowSelect
                name="Mobile"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Mobile}
                onChange={(_e, newVal) => onUpdateMapping("Mobile", newVal)}
              />
              <TableRowSelect
                name="Fax"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Fax}
                onChange={(_e, newVal) => onUpdateMapping("Fax", newVal)}
              />
              <TableRowSelect
                name="Website"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Website}
                onChange={(_e, newVal) => onUpdateMapping("Website", newVal)}
              />
              <TableRowSelect
                name="Street"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.BillingAddressStreet}
                onChange={(_e, newVal) =>
                  onUpdateMapping("BillingAddressStreet", newVal)
                }
              />
              <TableRowSelect
                name="City"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.BillingAddressCity}
                onChange={(_e, newVal) =>
                  onUpdateMapping("BillingAddressCity", newVal)
                }
              />
              <TableRowSelect
                name="Province/Region/State"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.BillingAddressState}
                onChange={(_e, newVal) =>
                  onUpdateMapping("BillingAddressState", newVal)
                }
              />
              <TableRowSelect
                name="Zip code"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.BillingAddressZip}
                onChange={(_e, newVal) =>
                  onUpdateMapping("BillingAddressZip", newVal)
                }
              />
              <TableRowSelect
                name="Country"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.BillingAddressCountry}
                onChange={(_e, newVal) =>
                  onUpdateMapping("BillingAddressCountry", newVal)
                }
              />

              <TableRowSelect
                name="Opening Balance"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.OpeningBalance}
                onChange={(_e, newVal) =>
                  onUpdateMapping("OpeningBalance", newVal)
                }
              />
              <TableRowSelect
                name="Opening Balance Date"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.OpeningBalanceDate}
                onChange={(_e, newVal) =>
                  onUpdateMapping("OpeningBalanceDate", newVal)
                }
              />
              <TableRowSelect
                name="Tax Resale No."
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.Tax}
                onChange={(_e, newVal) => onUpdateMapping("Tax", newVal)}
              />
              <TableRowSelect
                name="Customer Type"
                options={csvHeaders.items}
                value={csvMappings.mappingInfo.CustomerType}
                onChange={(_e, newVal) =>
                  onUpdateMapping("CustomerType", newVal)
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default MapData;
