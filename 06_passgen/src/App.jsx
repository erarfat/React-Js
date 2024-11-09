import { useState ,useCallback, useEffect,useRef } from 'react'

function App() {
  let [length, setLength] = useState(8)
  let [number, setNumber] = useState(false)
  let [characters, setCharacters] = useState(false)
  let [charoffon, setCharOffOn] = useState("OFF")
  let [numoffon, setNumOffOn] = useState("OFF")
  let [password, setPassword] = useState("")
  // let unOptimizedPassGen = () => {
  //   let pass =""
  //   let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //   if (number) {
  //     str +="0123456789"
  //   }
  //   if (characters) {
  //     str += " !@#$%#&*"
  //   }
  //   for (let index = 1; index <= length; index++) {
  //     let char = Math.floor( Math.random()*str.length+1)
  //     pass += str.charAt(char)
  //   }
  //   setPassword(pass)
  // } in this there is no optimization because it does not store things


  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback(fn, dependencies) dependencies changes
  const optimizedPassGen =useCallback(()=>{
    let pass =""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) {
      str +="0123456789"
    }
    if (characters) {
      str += " !@#$%#&*"
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor( Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,number,characters,setPassword])

  let decreaseLength = () => {
    length--;
    if (length>=8) {
      setLength(length)
    }
    else{
      length++;
      setLength(length)
    }
  }

  let onOfChar = () =>{
    if (characters) {
      setCharacters(false)
      setCharOffOn("OFF")
    }
    else  {
      setCharacters(true)
      setCharOffOn("ON")
    }
    
  }

  let onOfNum = () =>{
    if (number) {
      setNumber(false)
      setNumOffOn("OFF")
    }
    else  {
      setNumber(true)
      setNumOffOn("ON")
    }
  }

  // live changes [] array mai wo pass karo jo change horaha hai

  useEffect(()=>{
    optimizedPassGen()
  },[length, characters,number,setPassword])

  // kise bhi cheez ka reference lena hai to refehook loo is case mai copy button se text value le rahe hai

  const passref =useRef(null)

  const copytoClip =()=>{
    // react mai window obj hota hai but next js mai nahi hota hai
    passref.current?.select() // here we are using ref
    passref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password) // without use of ref 
  }



  return (
    <>
        <h1>PasswordGenerator</h1>
        <input type="text" value={password} readOnly ref={passref} />
        <button type="button" onClick={copytoClip} >copy</button>
        <br />
        <button type="button" onClick={() => {setLength(length+1)}}>IncreaseLength:- {length}</button>
        <button type="button" onClick={decreaseLength}>DecreaseLength:- {length}</button>
        <button type="button" onClick={onOfNum}>Number({numoffon})</button>
        <button type="button" onClick={onOfChar}>Characters({charoffon})</button>

    </>
  )
}

export default App
