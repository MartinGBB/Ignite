import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { Button } from "./components/Buttons";
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

export function App() {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
