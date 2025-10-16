import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import ICard from './components/ICard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="idcard-container">

    <ICard name="Ramprakash" age="21" branch="CSE" college="ABES" location="Ghaziabad"/>
    <ICard name="Ramprakash" age="21" branch="CSE" college="ABES" location="Ghaziabad"/>
    <ICard name="Ramprakash" age="21" branch="CSE" college="ABES" location="Ghaziabad"/>
    <ICard name="Ramprakash" age="21" branch="CSE" college="ABES" location="Ghaziabad"/>
    </div>
    </>
  )
}

export default App
