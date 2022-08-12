import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { History } from './pages/History'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <History />

      <GlobalStyle />
    </ThemeProvider>
  )
}
