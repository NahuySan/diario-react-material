import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    color1: {
      main: '#6f748f',
      
    },
    color2: {
      main: '#b4b7c5'
    },
    color3: {
      main: '#393c4a'
    },
    color4: {
      main: '#6c749c'
    },
    color5: {
      main: '#b4b7c5'
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
            color: '#393c4a',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#6f748f',
            },
            "&:hover fieldset": {
              borderColor: '#b4b7c5',
            },
            "&.Mui-focused fieldset": {
              borderColor: '#b4b7c5',
            },
          },
        },
      },
    },
  },

})


