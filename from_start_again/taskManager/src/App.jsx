import { useState } from 'react'
import { Header,Show,AddTodo } from './components'
function App() {
  
const [taskList,setTaskList] = useState([])
  return (
    <>
      <Header/>
      <AddTodo taskList={taskList} setTaskList={setTaskList} />
      <Show taskList={taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
