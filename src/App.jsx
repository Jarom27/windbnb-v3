import './App.css'
import Header from './components/Header'
import SearchContext from './context/SearchContext'
import CardsContainer from './components/CardsContainer'
import { useState, useEffect, useContext } from "react";
function App() {
  const [datos,setDatos] = useState([]);
  const [copia,setCopia] = useState([]);
  const {city,country,maxGuests,filtered,setFiltered} = useContext(SearchContext)
  useEffect(()=>{
      fetch('./stays.json')
      .then(res => res.json())
      .then(res => {
        setDatos(res)
        setCopia(res)
      })

  },[])
  useEffect(()=>{
    if(filtered && city !== undefined && country !== undefined ){
      console.log(city)
      setCopia(datos.filter(stay => stay.city.toLowerCase() == city.toLowerCase() && stay.country.toLowerCase() == country.toLowerCase()))
      setFiltered(false)
    }
      
  },[city,country,filtered])
  
  return (
    <>
        <Header></Header>
        <CardsContainer datos = {copia}></CardsContainer>
    </>
  )
}

export default App
