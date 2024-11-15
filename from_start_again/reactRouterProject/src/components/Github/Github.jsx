import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='bg-gray-700 text-white text-3xl font-semibold p-4 text-center'>
        <div >Followers :{data.followers}</div>
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const gitHubLoder = async ()=>{
    const response= await fetch("https://api.github.com/users/suryakanta007")
    const data = await response.json();
    console.log(data)
    return data
}