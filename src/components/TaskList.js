import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const TaskList = () => {

  const context = useContext(GlobalContext)
  return (

    <div>
      <div>
        {context.tasks.map((task) => (
          <div>
            <h1>{task.title}</h1>
            <h6>{task.id}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
