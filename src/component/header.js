
import React from "react";
import { Box } from "@mui/material";
import { CssVarsProvider } from '@mui/joy/styles';
import { customTheme } from "../Constants";


const Header = () => {

  return (
      <Box sx={{
        p: 5,
        background: "#000000"
      }} 
      marginLeft="auto"
      marginRight="auto">
          <CssVarsProvider theme={customTheme}>
            <Box sx={(theme) => theme.typography.display1} align='center' > 
              Supratim Halder
            </Box>

            <Box sx={(theme) => theme.typography.display2} align='center'>
              Software engineer, Bibliophile, Politics enthusiast, Real madrid forever.
            </Box>
          </CssVarsProvider>
      </Box>
  );
}

export default Header;