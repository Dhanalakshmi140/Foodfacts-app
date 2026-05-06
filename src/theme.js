import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      main: '#ff6f00'
    }
  },
  shape: {
    borderRadius: 12
  }
})

export default theme