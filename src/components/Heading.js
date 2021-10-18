import React from 'react'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h5>Task App</h5>
        </Link>
        <div>
          <Link to="/add">
            <button>Add Employee</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Heading
