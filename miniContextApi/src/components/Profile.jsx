import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {User} = useContext(UserContext)
  if(!User) return <div>Please Login!!</div>
    
   

  return <div>
    Welcome {User.UserName}
  </div>
}

export default Profile
