import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

import { FaTrashAlt, FaEdit } from "react-icons/fa"
import "../App.css"

import { Link } from "react-router-dom"
// import GifList from './GifList'


const TaskList = () => {

  const { tasks, deleteTask, taskDone } = useContext(GlobalContext)
  console.log(tasks)
  return (
    <div className="TaskListContainer">
      {/* <button onClick={() => deleteTask()}>Delete ALL</button> */}
      <div>
        {tasks.map((task) => (
          <div className="TaskList" key={task.id}>
            <div className="TaskContainer --flex--justify-between">
              <div className="">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => taskDone(task.id)}>{task.done ? "unDone" : "Done"}</button>
              </div>
              <div>
                <Link className="editButton Link" to={`/edit/${task.id}`}><FaEdit /></Link>
                <button className="deleteButton" onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default TaskList
