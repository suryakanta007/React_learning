import React,{useState,useMemo} from 'react'


function Counter() {

    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const check = useMemo(()=>{
        let i = 0
        while(0<20)i++
        return counterOne%2==0
    },[counterOne])
  return (
    <>
    <div>
        <button onClick={()=>{setCounterOne(counterOne+1)}}>CounteOne {counterOne} {check?"Even":"Odd"}</button>
    </div>
    <div>
    <button onClick={()=>{setCounterTwo(counterTwo+1)}}>CountTwo {counterTwo}</button>
    </div>
    </>
  )
}

export default Counter