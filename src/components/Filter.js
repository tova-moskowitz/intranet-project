import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300, mt: 2, mb: 2 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];
