// note custom are always in pure js
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({}) // suppose if user provide nothing then 
    useEffect(()=>{
        // we have use useEffect because it page loaded then load api or change is currency happend
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).
        then((res) => (res.json())).
        then((res)=>(setData(res[currency]))) // res.usd we cannot use . .'. we use [] i have forgoten the setData i have write res[currency] which will not update the data

    },[currency])
    return data
}
// JSON.parse(res) gives error
export default useCurrencyInfo;