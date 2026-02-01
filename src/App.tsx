import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './Pages/Home'
import { Header } from './components/Header'
import { MainContainer } from './app.styles'
import { Route, Routes } from 'react-router-dom'
import { Pokedex } from './Pages/Pokedex'

function App() {

  


  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>

        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokedex />} />
          <Route path="/berries" element={<Pokedex  />} />
          <Route path="/items" element={<Pokedex  />} />

          
        </Routes>
      </MainContainer>

      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
