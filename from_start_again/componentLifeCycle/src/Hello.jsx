import React from 'react'
import { useState } from 'react'

function Hello() {
    const [item,setItem] = useState("");
  return (
    <>
    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
    <div>Hello ,{item}</div>
    <div>Hye</div>
    </>
  )
}

export default Hello