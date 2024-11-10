import { useState,useEffect,useRef } from 'react'

function App() {
  const [value,setValue] = useState("gefef");
  const [count,SetCount] = useState(0);
  const inputValue = useRef(null);

  useEffect(()=>{
    console.log("Render")
    inputValue.current.select()
    // inputValue.current.focus()
  },[inputValue])
  function change(){
    SetCount((curr)=>curr+1)
  }
  // console.log(count)
  // console.log(value)
  // (console.log(inputValue.current.value))
  
  return (
    <>
    <input ref={inputValue} type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
    <button onClick={change}>Change</button>
    {count}
    </>
  )
}

export default App
