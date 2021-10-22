import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"


import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

import "../App.css"

const Heading = () => {
  const { loggedIn } = useContext(GlobalContext)
  console.log(loggedIn)



  return (
    <div className="headerContainer">
      <div className="header">

        <Link className="Link" to="/">
          <img className="appTitle" src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRFt6BgRlASemMPFTCCUIyJHXzUyMD7cfpxIuuaPf1VQHxmqRigGM3S_yM0bYjcTifqJ4JTkebvXqNAPQdVR-zLPJPZSXYr35fz1.png?r=044" alt="" width={200} />
        </Link>
        <div className="--flex">
          <Link className="Link" to="/add">
            <button className="button --flex">
              <FaPlus />
              Add Task
            </button>
          </Link>
          <Link className="Link" to="/tasks">
            <button className="button --flex">
              Tasks
            </button>
          </Link>
          <Link className="Link" to="/">
            <button className="button --flex">
              GIFS
            </button>
          </Link>

        </div>


      </div>

    </div>
  )
}

export default Heading
