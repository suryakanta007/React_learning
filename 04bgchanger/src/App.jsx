import { useState } from "react"


function App() {
  const [color,setColor] = useState("gray");

  return (
    <>
     <div className="w-full h-screen " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2"><div className=" flex justify-center bg-white gap-3 px-3 py-2 shadow-lg rounded-xl">
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"Green"}} onClick={()=>{setColor("Green")}}>Green</button>
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>pink</button>
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>yellow</button>
        <button className="outline-none px-3 py-1 text-white rounded-md shadow-xl " style={{backgroundColor:"brown"}} onClick={()=>{setColor("brown")}}>brown</button>
     
  
        </div></div>
     </div>

    </>
  )
}

export default App
