import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './Pages/Home'
import { Header } from './components/Header'
import { MainContainer } from './app.styles'


function App() {


  


  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>

        <Header />

        <Home />

      </MainContainer>

      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
