import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(0);
  //let counter = 10
  const addValue = ()=>{
    console.log(`clicked now the value is ${counter}`);
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    if(counter>0){
    setCounter(counter-1);
      }  }
  
  return (
    <>
    
      <h1>Hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Counter</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Counter</button>
    </>
  )
}

export default App
