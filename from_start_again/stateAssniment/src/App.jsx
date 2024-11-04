import { useState } from 'react'


function App() {
  const [item,setItem] = useState("");
  const [price,setPrice] = useState("");
  const [product,setProduct]  = useState(0);
  function inecriment(){
    setProduct(product+1);
  }
  function decriment(){
    if(!product<=0){
      setProduct(product-1)
    }
    
  }

  return (
    <>
     <h1>Hello</h1>
     <div className='container'>
      <p>Item : {item}</p>
      <p>Price : {price}</p>
      <p>Product Left :{product}</p>
     </div>
     <div className='inputBox'> <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} /></div>
     <div className='inputBox'> <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/></div>
     <div><button onClick={inecriment}>+</button>{product} <button onClick={decriment}>-</button></div>
    </>
  )
}

export default App
