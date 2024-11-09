import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cart from './componenets/cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// we can pass array also
const arr =[1,2,3,4]
  return (
    <>
    <Cart username="Arafat Shaikh" brand = "Just"/> 
    <Cart myarr= {arr} /> 
    </>
  )
}

export default App
