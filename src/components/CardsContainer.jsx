/* eslint-disable react/prop-types */

import Card from "./Card";

export default function CardsContainer({datos}) {
  
  return (
    <>
      <div className="p-3 flex justify-between">
        <h2 className="font-bold text-2xl ">Stays in Finland</h2>
        <h2 className="font-bold text-md">12+ stays</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
        {datos.map((stay,index) => <Card key={index} stay={stay}></Card>)}
      </div>
    </>
    
  )
}