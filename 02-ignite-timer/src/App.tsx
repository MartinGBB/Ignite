import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { Button } from "./components/Buttons";
import { defaultTheme, ThemeBlue } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/global';

export function App() {
  const [theme, setTheme] = useState(defaultTheme)

  function handleTheme() {
    theme === defaultTheme ? setTheme(ThemeBlue) : setTheme(defaultTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <button onClick={handleTheme}>mudar tema</button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
