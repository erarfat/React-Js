import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(0)

  
  function getIncerement() {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) is mai counter ek baar update hoga because of fiber algo agar bar bar request arahi hai to take the last one 
    // to overcome above problem use preCount
    setCounter((preCount) => (preCount+1))
    setCounter((preCount) => (preCount+1))
    setCounter((preCount) => (preCount+1))
    setCounter((preCount) => (preCount+1)) // preCount is previous value of counter in array
  }
  function getDecrement() {
    counter--;
    setCounter(counter)
    
  }


  return (
    <>
     <h1>Counter Value {counter}</h1>
     <button onClick={getIncerement}>Increment {counter}</button>
     <br />
     <button onClick={getDecrement}>Decrement {counter}</button>
    </>
  )
}

export default App
