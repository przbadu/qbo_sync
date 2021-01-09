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
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  heading: {
    margin: "10px 20px",
  },
  table: {
    minWidth: 650,
  },
  input: {
    fontSize: "12px",
    padding: "10px 5px",
  },
});

const tableHeaders = [
  { name: "Name", label: "Name" },
  { name: "Company", label: "Company" },
  { name: "Email", label: "Email" },
  { name: "Phone", label: "Phone" },
  { name: "Mobile", label: "Mobile" },
  { name: "Fax", label: "Fax" },
  { name: "Website", label: "Website" },
  { name: "BillingAddressStreet", label: "Street" },
  { name: "BillingAddressCity", label: "City" },
  { name: "BillingAddressState", label: "Province/Region/State" },
  { name: "BillingAddressZip", label: "ZIP Code" },
  { name: "BillingAddressCountry", label: "Country" },
  { name: "OpeningBalance", label: "Opening Balance" },
  { name: "OpeningBalanceDate", label: "Opening Balance Date" },
  { name: "Tax", label: "Tax Resale No." },
  { name: "CustomerType", label: "Customer Type" },
];

const VerifyAndImport = ({
  activeStep,
  csvData,
  csvMappings,
  onUpdateCsvData,
}) => {
  const classes = useStyles();

  if (activeStep !== 2) return null;

  const _renderTableHeader = ({ name, label }) => {
    const mapping = csvMappings.mappingInfo[name];

    if (mapping?.colHeader) return <TableCell align="left">{label}</TableCell>;
  };

  const _renderTableCell = (data, header, dataIdx) => {
    const mapping = csvMappings.mappingInfo[header.name];
    if (mapping?.colHeader)
      return (
        <TableCell key={`${dataIdx}${mapping.colNum}`}>
          <TextField
            name={`${header.name}[]`}
            value={data[mapping.colNum]}
            onChange={(e) =>
              onUpdateCsvData(dataIdx, mapping.colNum, e.target.value)
            }
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
        </TableCell>
      );
  };

  return (
    <Grid>
      <Grid item lg={12}>
        <TableContainer component={Paper}>
          <Typography variant="h3" className={classes.heading}>
            10 customers are ready to be imported
          </Typography>

          <Table className={classes.table} aria-label="Map Headers">
            <TableHead>
              <TableRow>
                {tableHeaders.map((row) => _renderTableHeader(row))}
              </TableRow>
            </TableHead>
            <TableBody>
              {csvData.items.map((data, i) => (
                <TableRow>
                  {tableHeaders.map((header) =>
                    _renderTableCell(data, header, i)
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default VerifyAndImport;
