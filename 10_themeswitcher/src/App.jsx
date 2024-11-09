import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeButton from './componenets/ThemeButton'
import Card from './componenets/Card'

function App() {
  // note both themeMode are Linked value and state both are same 
  const [themeMode,setThemeMode] = useState("light")
  const darkTheme =()=>{
    //these will overewrite
    setThemeMode("dark")
  }

  const lightTheme =()=>{
    //these will overewrite
    setThemeMode("light")
  }

  // change in theme

  useEffect(()=>{
    const htmlTag = document.querySelector('html')
    htmlTag.classList.remove('light','dark')
    htmlTag.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                            <div className="w-full">
                                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                                    <ThemeButton/>
                                </div>

                                <div className="w-full max-w-sm mx-auto">
                                  <Card/>
                                </div>
                            </div>
            </div>
    </ThemeProvider>
  )
}

export default App
