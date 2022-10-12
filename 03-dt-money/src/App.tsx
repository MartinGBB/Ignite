import { ThemeProvider } from "styled-components";
import { Trasactions } from "./pages/Transations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Trasactions />
    </ThemeProvider>
  )
}
