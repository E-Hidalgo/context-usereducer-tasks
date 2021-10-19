import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

import "../App.css"

const Heading = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <Link className="Link" to="/">
          <h5 className="appTitle">Los PicAppPiedra</h5>
          <p>YABADABADUUUUUUUUUUUUU</p>
        </Link>
        <div>
          <Link to="/add">
            <button className="button"><FaPlus /></button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Heading
