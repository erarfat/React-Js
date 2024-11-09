import { useState,useContext } from 'react'
import Parrent from './components/Parrent'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App({username}) {
   const {setData,data} = useContext(UserContext)
    setData(username)
  return (
    <>
      
      <h1>UserName: {data} </h1>
      <Parrent/>
      
    </>
  )
}

export default App
