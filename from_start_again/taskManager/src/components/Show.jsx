import React from 'react'

function Show({taskList,setTaskList}) {
    function removeTask(e){
        console.log("clicked")
        setTaskList((currTasks)=>{
            return taskList.filter((task)=>task.id!==e)
        })
    }
    function clearList(){
        setTaskList([])
    }
    return (<>
        <p>Todo {taskList.length}</p>
        <button onClick={clearList}>Clear All</button>
        <ul>
            {taskList.map((task) => (

                <>
                    <li key={task.id}>
                        <p>{task.taskName}</p>
                        <p><button>Edit</button> <button onClick={()=>{removeTask(task.id)}}>Delete</button></p>
                    </li>
                </>

            ))}

        </ul>
        </>
    )
}

export default Show