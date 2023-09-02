import { extendTheme } from '@mui/joy/styles';

export const customTheme = extendTheme({
    typography: {
      display1: {
        // `--joy` is the default CSS variable prefix.
        // If you have a custom prefix, you have to use it instead.
        // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
        fontSize: 96,
        "@media(max-width: 767px)": {
          fontSize: 50
        },
        fontWeight: 'bold',
        background:
          'linear-gradient(-60deg, var(--joy-palette-success-200), var(--joy-palette-primary-700))',
        // `Webkit*` properties must come later.
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      display2: {
        fontSize: 20,
        background: '#ffff',
        fontWeight: 'light',
        marginTop: 3,
        width: 'auto',
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
      display4: {
        fontSize: 26,
        marginTop: 10,
        background: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',
        fontFamily: `'Playfair Display', serif;`,
        fontWeight: 'light',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      display5: {
        fontSize: 26,
        background: '#2E020E',
        fontFamily: `'Raleway', sans-serif`,
        fontWeight: 'bold',
        marginTop: 5,
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