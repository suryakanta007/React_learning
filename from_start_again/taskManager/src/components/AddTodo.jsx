import React from 'react'
import { useState } from 'react'

function AddTodo({ taskList, setTaskList }) {
    const [taskValue, setTaskValue] = useState("")
    function addTask() {
        if (taskValue == "") {
            return
        }
        const isPresent = taskList.map((task) => {
            if (task.taskName.toLowerCase() === taskValue.toLowerCase()) {
                return true
            } else {
                return false
            }
        })
        if(isPresent.includes(true)){
            return
        }

        setTaskList((currTasks) => {

            return [...currTasks, { id: crypto.randomUUID(), taskName: taskValue }]
        })
    }
    return (
        <>
            <input type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
            <button onClick={addTask}>Add</button>

        </>
    )
}

export default AddTodo