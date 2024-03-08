import { useState } from 'react'
import InputBox from './Compnents/InputBox'
import useCurrenecyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 const [amount , setamount] = useState(0)
 const [from , setFrom] = useState("usd")
 const [to , setTo] = useState("inr")


  return (
    <>
      <h1 className=' text-3xl bg-orange-500'> Currency app with Me</h1>
    </>
  )
}

export default App
