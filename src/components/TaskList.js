import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

import { FaTrashAlt, FaEdit } from "react-icons/fa"
import "../App.css"


const TaskList = () => {

  const { tasks, deleteTask } = useContext(GlobalContext)

  return (
    <div className="TaskListContainer">
      <button onClick={() => deleteTask()}>Delete ALL</button>
      <div className="TaskList">
        {tasks.map((task) => (
          <div className="TaskContainer" key={task.id}>
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
            </div>
            <div>
              <button><FaEdit /></button>
              <button><FaTrashAlt /></button>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default TaskList
