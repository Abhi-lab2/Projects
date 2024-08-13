import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, TextField, Button } from '@mui/material';
import { lightBlue, deepOrange, green } from '@mui/material/colors';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [number, setNumber] = useState('') // saving number

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? green[500] : lightBlue[500],
      },
      secondary: {
        main: darkMode ? deepOrange[500] : lightBlue[500],
      },
    },
  })

  const handleToggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const handleNumberChange = (event) => {
    if (isNaN(event.target.value)) return
    setNumber(event.target.value)
  }

  const handleDoubleNumber = useMemo(() => {
    return number * 2
  }, [number])

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Button variant='contained' onClick={handleToggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Theme
        </Button>
        <div style={{ marginTop: '20px' }}>
          <TextField
            id="outlined-number"
            label="Number"
            type="tel"
            value={number}
            fullWidth
            onChange={handleNumberChange}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField
            id="outlined-number"
            label="Result"
            type="number"
            value={handleDoubleNumber}
            fullWidth
            disabled
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
