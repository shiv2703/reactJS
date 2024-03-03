import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {


  return (
    <>
      <UserContextProvider>
        <h1>Hi there context api</h1>
        <Login/>
        <Profile/>

      </UserContextProvider>
    </>
  )
}

export default App
