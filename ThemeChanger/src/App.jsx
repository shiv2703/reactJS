import { useState,useEffect } from 'react'

import './App.css'
import AppUI from './Components/AppUI'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const lightTheme = ()=>{
    setthemeMode("light")
  }
  const darkTheme = ()=>{
    setthemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  


  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <AppUI/>
    </ThemeProvider>
    </>
  )
}

export default App
