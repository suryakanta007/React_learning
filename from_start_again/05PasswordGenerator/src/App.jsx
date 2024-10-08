import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length,setLength] = useState(8)
  const [number , setNumber]= useState(true)
  const [charter, setCharter] = useState(false)
// useRef hook
  const passwordRef =useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
    if(number){
      str = str+"0123456789"
    }
    if(charter){
      str = str+"!@#$%^&*(){}[]"
    }
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str[char];
      setPassword(pass)
    }
  },[length,number,charter,setPassword]);

  const copyPasswordToClipbord = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password);
  },[password])

useEffect(()=>{
  passwordGenerator()
},[charter,number,length,passwordGenerator])
  
  
  let pass =  "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return (
    <>
     <div className='w-full h-lvh flex flex-col justify-center items-center bg-gray-400 '>
     
      <div className=' max-w-md mx-auto flex flex-wrap  px-3 py-2 my-2 w-full rounded-md justify-center text-orange-500'>
      <h1 className='text-2xl text-center font-semibold text-slate-800'>Password Generator</h1>
          <input type="text"
          className='w-4/5  outline-none px-3 py-3 rounded-md text-orange-500 text-lg'
          value={password}
          readOnly 
          ref={passwordRef}/>
          <button
           className='w-1/5 text-white bg-blue-600 rounded-md'
           onClick={copyPasswordToClipbord}
          >Copy</button>
      </div>
      <div className='max-w-md mx-auto flex w-full'>
        <div>
          <input type="range"
          max={100}
          min={6} 
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label> length{length}</label>
        </div>
        <div>
          <input type="checkbox" 
          className=''
          value={number} 
          onChange={()=>{
            setNumber((prev)=> !prev)
          }}/>
          <label >Number</label>
        </div>
        <div>
          <input type="checkbox" 
          className=''
          value={charter} 
          onChange={()=>{
            setCharter((prev)=> !prev)
          }}/>
          <label >Charter</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
