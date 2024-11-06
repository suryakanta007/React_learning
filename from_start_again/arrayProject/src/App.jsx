import React from "react"
import { useState } from "react";

function App() {
 
  const [arr,setArr] = useState(["A","B","C"]);
  function modifiy(){
    console.log("clicked")
    setArr((currArr)=>currArr.slice(1))
  }


  return (
    <>
    <button onClick={modifiy}>Remove</button>
    <br/> <br />
     <div>{arr.join(", ")}</div>
    </>
  )
}

export default App
