import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import AppSelect from "./AppSelect";

const TableRowSelect = ({ name, ...props }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>
      <AppSelect name={name} {...props} />
    </TableCell>
  </TableRow>
);

export default TableRowSelect;
