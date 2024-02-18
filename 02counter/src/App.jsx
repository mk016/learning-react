import React,{useState} from 'react'
import './App.css';

function App(){
  const [counter ,setCounter] = useState(15);

  const addValue = () =>{
    console.log("click", counter)
    setCounter(counter + 1);// this is for add value 
  }

  const removeValue =() =>{
    console.log("click",counter)
    setCounter(counter -1) // this is for remove vale 

  }

  return (
    <>
    
    <h1>hello My Name is Mahendra</h1>
    <h2> Count Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br></br>
    <button onClick={removeValue}>Remove Value</button>
    </>
  );
  }


export default App;

