import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) {
    const [data,setData] = React.useState("ARfat")
    return(
        <UserContext.Provider value={{data,setData}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

