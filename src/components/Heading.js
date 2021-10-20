import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

import "../App.css"

const Heading = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <Link className="Link" to="/">
          <h5 className="appTitle">PicAppPiedra</h5>
        </Link>
        <div className="--flex">
          <Link className="Link" to="/add">
            <button className="button --flex">
              <FaPlus />
              Add Task
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Heading
