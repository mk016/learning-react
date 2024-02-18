import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("olvie")

  return (
    <div className='w-full h-screen  duration-200' style={{ backgroundColor :black}}>
 
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    </div>
  )
}

export default App
