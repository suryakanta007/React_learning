import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] =useState(15)
const addValue = ()=>{
  if(count=== 20){
    return 
  }
  count++
  setCount(count)
}
const removeValue = ()=>{
  if(count===0){
    return
  }
  count--;
  setCount(count)
}
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter : {count}</h2>
    <button onClick={addValue}> Add {count}</button><br/>
    <button onClick={removeValue}> Remove  {count}</button>
    </>
  )
}

export default App
