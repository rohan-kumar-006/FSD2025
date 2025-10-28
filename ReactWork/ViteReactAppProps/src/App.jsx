import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import ICard from './components/ICard'

function App() {

  const student=[
    {
    name:"Ram",
    age:20,
    branch:"CSE",
    college:"ABES",
    location:"Ghaziabad"
  },
    {
    name:"Rajveer",
    age:20,
    branch:"CSE",
    college:"ABES",
    location:"Ghaziabad"
  },
    {
    name:"Pratik",
    age:20,
    branch:"CSE",
    college:"ABES",
    location:"Ghaziabad"
  },
]

  return (
    <>
    <div className="idcard-container">

    {student.map((st)=>{
      return <ICard props={st}/>
    })}
    </div>
    </>
  )
}

export default App
