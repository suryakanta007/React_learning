import { useState,useEffect } from 'react'
import Hello from './Hello.jsx';

function App() {
  const [show,setShow] = useState(true);
  const childComoponent = show ? <Hello/>:null

  //! useEffect:-
  //? 1. mount - when a component render.
  //? 2. update - when a component gets updated.
  //? 3. unmount - when a component removed. 
  useEffect(()=>{
    console.log("Mounted");

    return ()=>{
      console.log("unmounted");
    }
  })


  return (
    <>
      <button onClick={()=>{
      
        setShow((boll)=>!boll)}}>Click</button><br ></br>
      {childComoponent}
    </>
  )
}

export default App
