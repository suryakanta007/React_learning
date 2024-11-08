import { useState,useEffect } from 'react'

function App() {
  const [content,setContent] = useState([]);
  const [searchQuery,setSearchQuery] = useState("");
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=1")
    .then(res=>res.json())
    .then(res=>setContent(res.data))
    
  },[])
console.log(content)
//? doubt :why the "console.log(content)" run when i make any change in input box..
//? 
const filterData = content.filter((user)=>{
  let fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
  return fullName.includes(searchQuery.toLowerCase())
})

  return (
    <>
    <input type="text" value={searchQuery} onChange={(e)=>{
      setSearchQuery(e.target.value)
    }}  />
      <h1>Featch data from api</h1> 
      {
        filterData.map(user=>(
          <div key={user?.id}>
            <img src={user?.avatar} alt="" />
            <p>{user?.first_name} {user?.last_name}</p>
          </div>
        ) )
      }
    </>
  )
}

export default App
