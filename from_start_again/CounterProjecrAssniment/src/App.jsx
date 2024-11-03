import { useState } from 'react'


function App() {
  const [value,setValue]= useState(0)
  function increage(){
    setValue(value+2)
  }

  return (
    <>
    <h1>Hello</h1>
    <h2>Counter Value: {value}</h2>
    <button onClick={increage}>Click</button>
    </>
  )
}

export default App
