
import React from "react";
import { Box } from "@mui/material";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter, GitHub } from "@mui/icons-material";


const customTheme = extendTheme({
  typography: {
    display1: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      fontSize: 90,
      background:
        'linear-gradient(-30deg, var(--joy-palette-success-200, #77EC95), var(--joy-palette-primary-400))',
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    display2: {
      fontSize: 25,
      background:
        '#FDFEFE',
      fontWeight: 'light',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  },
});


const Header = () => {

  return (
      <Box sx={{
        p: 5,
        height: '100%',
      }} >
          <CssVarsProvider theme={customTheme}>
            <Box sx={(theme) => theme.typography.display1} align='center' > 
              Supratim Halder
            </Box>

            <Box sx={(theme) => theme.typography.display2} align='center'>
              Software engineer, Reader, Political enthusiast, Real madrid
            </Box>
          </CssVarsProvider>
      </Box>
  );
}

export default Header;