import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#"+((1<<24)*Math.random()|0).toString(16),
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });