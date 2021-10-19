import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const TaskList = () => {

  const context = useContext(GlobalContext)
  console.log(context)
  return (
    <div>
      TaskList
    </div>
  )
}

export default TaskList
