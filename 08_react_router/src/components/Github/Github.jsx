import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>(res.json()))
    //     .then((res) => (setData(res)))
    // },[])

    return(
        <>
        <h1 className="text-center p-4 ">The Follower is {data.followers} </h1>
        </>
    )
}

export default GitHub

export const githubInfo = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}