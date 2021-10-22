/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useHistory, useParams } from "react-router-dom"

import "../App.css"


const TaskForm = () => {

  const { addTask, tasks, updateTask } = useContext(GlobalContext) // tasks: [1,2,3]
  const history = useHistory()
  const params = useParams()

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: ""

  })

  const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (task.id) {
      updateTask(task)
    } else {
      addTask(task)

    }

    history.push("/tasks")
  }

  useEffect(() => {

    const taskFound = tasks.find(task => task.id === params.id)

    if (taskFound) {
      setTask(taskFound)
    }

  }, [params.id, tasks]);

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{task.id ? "Editing Task" : "Creating Task"}</h2>
        <div>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Write a Title"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div>
          <textarea
            className="input"
            name="description"
            rows="2"
            placeholder="Write your description"
            onChange={handleChange}
            value={task.description}
          ></textarea>
        </div>

        <button className="formButton">{task.id ? "Finish editing" : "Create Task"}</button>
      </form>
    </div>
  )
}

export default TaskForm
