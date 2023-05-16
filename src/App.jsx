import './App.css'
import Header from './components/Header'
import { SearchProvider } from './context/SearchContext'
import CardsContainer from './components/CardsContainer'
function App() {
  
  return (
    <>
      <SearchProvider>
                <Header></Header>
                <CardsContainer></CardsContainer>
      </SearchProvider>
    </>
  )
}

export default App
