import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

//<h2>Childone : {username}</h2> parrent ke pass hai username fhir bhi error le raha hai because har bar child ke ke pass bhi usernae pass kare nahoga
/// is liye context api use karte hai value global ho jaye in this case user name

function Childone() {
    const {data} = useContext(UserContext)
    return(
        <>
            <h2>Childone {data} </h2>
        </>
    )
}

export default Childone