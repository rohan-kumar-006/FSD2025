import React,{useState} from 'react'

const StateHandling = () => {
  const [counter,setCounter]=useState(20);

  function increaseCounter(){
    setCounter(counter+5);
  }

  return (
    <div>
      <h2>Counter Value= {counter}</h2>
      <button onClick={increaseCounter}>Increment</button>
      <button onClick={()=>setCounter(counter-10)}>Decrease Value</button>
    </div>
  )
}

export default StateHandling