import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AppSelect = ({ name, options, inputProps, ...rest }) => (
  <Autocomplete
    disableClearable
    id={`select-${name}`}
    options={options}
    getOptionLabel={(option) => option.colHeader}
    renderInput={(params) => <TextField inputProps={inputProps} {...params} />}
    {...rest}
  />
);

export default AppSelect;
