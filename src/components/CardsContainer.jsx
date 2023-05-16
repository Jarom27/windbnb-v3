
import Card from "./Card";
import { useState,useContext, useEffect } from "react";
import SearchContext from "../context/SearchContext";

export default function CardsContainer() {
  const [datos,setDatos] = useState([]);
  const [copia,setCopia] = useState([])
  useEffect(()=>{
      fetch('./stays.json')
      .then(res => res.json())
      .then(res => {
        setDatos(res)
        setCopia(res)
      })

  },[])

  return (
    <>
      <div className="p-3 flex justify-between">
        <h2 className="font-bold text-2xl ">Stays in Finland</h2>
        <h2 className="font-bold text-md">12+ stays</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
        {copia.map((stay,index) => <Card key={index} stay={stay}></Card>)}
      </div>
    </>
    
  )
}