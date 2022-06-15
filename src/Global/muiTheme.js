import theme from './theme';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    warning: {
      main: theme.colors.warning,
    },
    info: {
      main: theme.colors.white,
    },
    contrastPrimary: {
      main: theme.colors.contrastPrimary,
      contrastText: theme.colors.primary,
    },
  },
});
