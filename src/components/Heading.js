import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

const Heading = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h5>Task App</h5>
        </Link>
        <div>
          <Link to="/add">
            <button><FaPlus /></button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Heading
