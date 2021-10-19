import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TaskForm = () => {

  const { addTask } = useContext(GlobalContext) // tasks: [1,2,3]

  const [task, setTask] = useState({
    title: "",
    description: ""

  })

  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(task)
    addTask(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Write a Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="description"
            rows="2"
            placeholder="Write your description"
            onChange={handleChange}
          ></textarea>
        </div>

        <button>Create Task</button>
      </form>
    </div>
  )
}

export default TaskForm
