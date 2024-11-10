import { useState,useEffect,useRef,useCallback } from 'react'
import Counter from './components/Counter.jsx'

function App() {
  // ***************useRef()***************
  // const [value,setValue] = useState("gefef");
  // const [count,SetCount] = useState(0);
  // const inputValue = useRef(null);

  // useEffect(()=>{
  //   console.log("Render")
  //   inputValue.current.select()
  //   // inputValue.current.focus()
  // },[inputValue])
  // function change(){
  //   SetCount((curr)=>curr+1)
  // }
  // // console.log(count)
  // // console.log(value)
  // // (console.log(inputValue.current.value))\
  // ****************************************************************************************************************************
  // ***********************useMemo()***********************************
  // ************************************************************
  // *************useCallBack()********************************************************
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);

  const print = useCallback(()=>{
    console.log(`Name : ${name}`)
  },[name])

  useEffect(()=>{
    console.log("in Effect");
    print();
  },[print])


  // **********************************************************************************

  
  return (
    <>
    {/*UseRef()  */}
    {/* <input ref={inputValue} type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
    <button onClick={change}>Change</button>
    {count} */}




    {/* useMemo */}
    {/* <Counter/> */}



    {/* useCallBack */}

    <div>
      <label htmlFor="">Name :</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="">Age :</label>
      <input type="number" value={age} onChange={(e)=>{
        age<0?setAge(0):setAge(e.target.value)
        }}  />
    </div>
    
    

    </>
  )
}

export default App
