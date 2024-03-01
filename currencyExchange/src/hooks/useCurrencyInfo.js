import {useState,useEffect} from 'react'

function useCurrencyInfo(currency){
const [data, setdata] = useState({})

    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-03-01/currencies/${currency}.json`)
      .then((res)=>res.json())
      .then((res)=> setdata(res[currency]))
    }, [currency])
    console.log(data);
    return data;
}


export default useCurrencyInfo;