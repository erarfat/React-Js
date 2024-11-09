import React from "react";
import { useParams } from "react-router-dom";


function User() {
    const {userid} = useParams()
    return(
        <>
        <h1 className="text-center text-opacity-55">The User Name is {userid}</h1>
        </>
    )
}

export default User