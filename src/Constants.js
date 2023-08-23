import { extendTheme } from '@mui/joy/styles';

export const customTheme = extendTheme({
    typography: {
      display1: {
        // `--joy` is the default CSS variable prefix.
        // If you have a custom prefix, you have to use it instead.
        // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
        fontSize: 90,
        background:
          'linear-gradient(-60deg, var(--joy-palette-success-100, #77EC95), var(--joy-palette-primary-500))',
        // `Webkit*` properties must come later.
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      display2: {
        fontSize: 27,
        background:
          '#FDFEFE',
        fontWeight: 'light',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      display3: {
        fontSize: 25,
        fontFamily: `'Edu SA Beginner', cursive`,
        color:
          '#FFFF',
        fontWeight: 'bold',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      workExpHeader:{
        fontSize: 25,
        fontFamily: `'Edu SA Beginner', cursive`,
        color:
          '#FFFF',
        fontWeight: 'bold',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    },
  });