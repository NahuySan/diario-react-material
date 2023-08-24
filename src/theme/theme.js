import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    color1: {
      main: '#b0b087',
      
    },
    color2: {
      main: '#58706d'
    },
    color3: {
      main: '#e3e3d1'
    },
    color4: {
      main: '#4b5757'
    },
    color5: {
      main: '#7c8a6e'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: '#7c8a6e',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#b0b087',
            },
            "&:hover fieldset": {
              borderColor: '#7c8a6e',
            },
            "&.Mui-focused fieldset": {
              borderColor: '#7c8a6e',
            },
            "& input": {
              color: '#7c8a6e',
            },
          },
        },
      },
    },
  },

})


