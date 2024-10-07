import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor]  = useState("black")

  return (
    
      <div className='h-screen w-full' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 text-white px-4 inset-x-0'>
          <div className='flex flex-wrap bg-white px-3 py-3 rounded-lg '>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "Red"}} onClick={()=>{setColor("red")}}> Red</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "green"}} onClick={()=>{setColor("Green")}}> Green</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "blue"}} onClick={()=>{setColor("blue")}}> blue</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "Olive"}} onClick={()=>{setColor("Olive")}}> Olive</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "gray"}} onClick={()=>{setColor("gray")}}> gray</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "Yellow"}} onClick={()=>{setColor("Yellow")}}> Yellow</button>
            <button className='text-white px-3 py-1 rounded-full mx-3' style={{backgroundColor: "pink"}} onClick={()=>{setColor("pink")}}> pink</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
