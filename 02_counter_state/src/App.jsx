import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // if i do with normal getIncerement the value will not be update thats why we have use state no tension of document.qureyselector
  // now using state
  //    value   , function  
  let [counter,setCounter] = useState(0)// we can pass any thing and it return array which contain 2 values

  //let counter = 15
  function getIncerement() {
    counter++;
    if (counter<=20) {
      setCounter(counter)
    }
    else{
      counter--;
    }
    
  }
  function getDecrement() {
    counter--;
    if (counter>0) {
      setCounter(counter)
    }
    else{
      counter++;
    }
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
