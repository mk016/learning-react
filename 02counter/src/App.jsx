import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter =6

  const addValue= ()=>{
    console.log("click",counter)
    console.log("Click",Math.random());
  
    counter = counter + 1
    //console.log("value add",Math.random());
  }

  return (
    <>
  <h1>Hello My Name is Mahendra</h1>
  <h2>Counter value : {counter}</h2>
  


  <button onClick={addValue}>Add Value</button>
  <br></br>
  <button>Remove value</button>
    </>
  )
}

export default App
