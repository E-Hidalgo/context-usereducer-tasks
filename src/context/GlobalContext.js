/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useReducer, useEffect, useLocalStorage } from "react"
import appReducer from "./AppReducer"
import { v4 } from "uuid"
import { axios } from "axios"
import { AUTH_TOKEN } from "../API/axiosAuth"


const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasksSaved")) || []
}


export const GlobalContext = createContext(initialState)


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    localStorage.setItem("tasksSaved", JSON.stringify(state.tasks))
    // state.tasks = JSON.parse(localStorage.getItem("tasksSaved"))
  }, [state]);

  useEffect(() => {
    const lat = 58.7984;
    const lng = 17.8081;
    const params = 'waveHeight,airTemperature';

    const API = () => {
      const APIcall = fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
          'Authorization': `${AUTH_TOKEN}`
        }
      }).then((response) => response.json().then((jsonData) => {
        console.log(jsonData)
      }))

      API()
      console.log(APIcall)
    }


  }, []);




  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(), done: false } })

  }

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id })
  }

  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task })
  }

  const taskDone = (id) => {
    dispatch({ type: "TASK_DONE", payload: id })

  }



  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, taskDone }}>
      {children}
    </GlobalContext.Provider>
  )
}

