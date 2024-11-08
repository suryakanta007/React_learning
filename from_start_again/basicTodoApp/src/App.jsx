import { useState } from 'react'




function App() {

  const [newTodo,setNewTodo] = useState("")
  const [todos,setTodos] = useState([])
  function addTodo(){
    setTodos((currArr)=>{
      return [...currArr,{todoName:newTodo,id:crypto.randomUUID()}]
    })
  }
  function removeTodo(todoId){
    setTodos((todo)=>{
      return todo.filter((currTodo)=>currTodo.id!==todoId)
    })
  }

  return (
    <>
      <div>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {
            todos.map((currTodo)=>{
              return(
                <li key={currTodo.id}>
                  {currTodo.todoName}
                  <button onClick={()=>removeTodo(currTodo.id)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
