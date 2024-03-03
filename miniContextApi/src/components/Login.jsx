import React,{useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({UserName,Password})
    }
  return (
    <div>
      <h2>Login  Form</h2>
        <input 
        type="text"
        value={UserName}
        onChange={(e)=>setUserName(e.target.value)}
         placeholder='username'/>
        <input 
        type="password" 
        value={Password}
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
