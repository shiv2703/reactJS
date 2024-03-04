import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  

  return (
    <>
     <h1>Hi there, learning Redux Toolkit</h1>
     <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
