import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Conversor() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={0}>
          <Grid item sx={{background:"red",minHeight:"100vh"}} xs={5}></Grid>
          <Grid item sx={{background:"green",minHeight:"100vh"}} xs={4}></Grid>
          <Grid item sx={{background:"blue",minHeight:"100vh"}} xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Conversor;
