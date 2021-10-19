import React from 'react'

const TaskForm = () => {
  return (
    <div>
      <form>
        <h2>Add Task</h2>
        <div>
          <input type="text" name="title" placeholder="Write a Title" />
        </div>
        <div>
          <textarea name="descrpition" rows="2" placeholder="Write your description"></textarea>
        </div>

        <button>Create Task</button>
      </form>
    </div>
  )
}

export default TaskForm
