import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Childtwo() {
    const {data} = useContext(UserContext)
    

    return(
        <>
            <h2>Childtwo {data}  </h2>
        </> 
    )
}

export default Childtwo