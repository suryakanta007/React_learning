import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setCounter] = useState(6)

 let addValue = ()=>{
  counter++;
  setCounter(counter);
  
 };
 let removeValue = ()=>{
  if(!counter<=0){
    counter--;
  }
  setCounter(counter);
 }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>incriment</button><br/>
    <button onClick={removeValue}>decriment</button>
    </>
  )
}

export default App
