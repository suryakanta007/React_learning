import React from "react"
import { useState } from "react";
//! Some  Pratice questions.
// Add a Letter to beging of the array.
// Add a letter at end of the array.
//  clear a array
// Reset a array
// Replace a element of array with another element.
// Delete a element from the array.
// Delele last element of the array.
// Delete First element of the array.

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
