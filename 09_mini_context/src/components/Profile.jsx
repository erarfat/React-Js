import React ,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {data} = useContext(UserContext)
    return(
        <>
        <h1>The User Name is : {data.username}</h1>
        </>
    )
}

export default Profile