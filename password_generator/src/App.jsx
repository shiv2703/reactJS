import { useState } from 'react'
import './App.css'
import PasswordGen from './components/passwordGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PasswordGen/>
    </>
  )
}

export default App
