import * as React from "react";
import SearchBox from "./SearchBox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our Intranet
          </Typography>
          <SearchBox />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
