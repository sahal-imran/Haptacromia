import React, { useState, createContext, Provider } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Header from "../../components/Conversor/Header";
import Contrast from "../../components/Conversor/Contrast/Contrast";
import Formulas from "../../components/Conversor/Formulas/Formulas";
import CustomeColorPicker from "../../components/Conversor/Formulas/ColorPicker";
import MiddleMain from "../../components/Conversor/Middle/MiddleMain";

export const ColorContext = createContext();

function Conversor() {
  const [Cyan, Set_Cyan] = useState(0);
  const [Magenta, Set_Magenta] = useState(0);
  const [Yellow, Set_Yellow] = useState(0);
  const [Black, Set_Black] = useState(0);
  return (
    <ColorContext.Provider value={{
      Cyan,
      Set_Cyan,
      Magenta,
      Set_Magenta,
      Yellow,
      Set_Yellow,
      Black,
      Set_Black
    }} >
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "#D8D8D8",
        }}
      >
        {/* Conversor Header */}

        <Header />

        <Grid container spacing={{ xs: 1, md: 2 }}>
          {/* first column */}
          <Grid
            item
            xs={3.8}
          >
            <Formulas />
            <CustomeColorPicker />
          </Grid>

          {/* secound column */}
          <Grid
            item
            sx={{ minHeight: "100vh" }}
            xs={5.5}
          >
            <MiddleMain />
          </Grid>

          {/* third column */}
          <Grid item xs={2.5}>
            <Contrast />
          </Grid>
        </Grid>
      </Box>
    </ColorContext.Provider>
  );
}

export default Conversor;
