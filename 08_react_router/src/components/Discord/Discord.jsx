import React,{ useEffect } from "react";



function Discord() {
    useEffect(()=>{
        const link = document.getElementById('myClick')
        if (link) {
            link.click()
        }
    },[])
    return (
        <>
        <a href="https://google.com" id="myClick"></a>
        </>
    )
}

export default Discord
