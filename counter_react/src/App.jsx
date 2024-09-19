
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]= useState(5)
  //let counter=5;

  const addValue= ()=>{
       //counter=counter+1;
       counter=counter+1;
       setCounter(counter)
  }
  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter)
  }
  return (
    <>
      <h1>Ritika aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
