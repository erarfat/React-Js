import React, {useContext} from 'react'
import Childone from './Childone'
import Childtwo from './Childtwo'
import UserContext from '../context/UserContext';


function Parrent() {
    const {data} = useContext(UserContext)
    return(
        <>
            <h2>Parrent {data}  </h2>
            <Childone />
            <Childtwo />
        </>
    )
}

export default Parrent