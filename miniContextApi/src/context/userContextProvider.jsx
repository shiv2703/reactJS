import React from "react";
import userContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children})=>{
    const [User, setUser] = useState(null)
    return(
        <userContext.Provider value={{User, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider