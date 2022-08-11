import { ThemeProvider } from 'styled-components'
import { Button } from './components/Buttons'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
