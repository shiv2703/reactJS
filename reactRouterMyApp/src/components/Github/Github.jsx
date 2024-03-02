import React from 'react'
import {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/shiv2703')
    //   .then((res)=>res.json())
    //   .then((data)=>setData(data))
    // }, [])
    
  return (
    <>
    <div className='bg-black flex items-center'>
        <div className='w-1/2  bg-gray-300 flex justify-center '>
    <img className=' rounded-full object-contain h-40 w-40  p-4' src={data.avatar_url} alt="Github Logo" />
    </div>
    <div className='w-1/2 text-center m-4 text-white p-4 text-3xl font-bold'>Github followers: {data.followers}</div>
    </div>
    </>
  )
}

export default Github

export const gitHubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/shiv2703')
    return res.json()
} 
