/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useReducer, useEffect, useLocalStorage } from "react"
import appReducer from "./AppReducer"
import { v4 } from "uuid"
import Axios from "axios"
// import { AUTH_TOKEN } from "../API/axiosAuth"


const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasksSaved")) || [],
  gifs: []
}


export const GlobalContext = createContext(initialState)


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)




  const APIcall = async () => {

    const APIresult =
      await Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=dBvFvLLl1LEJoFCa8LHBkbcyBqSPmz36&limit=25&rating=g`,)
    const data = APIresult.data.data
    return data
  }

  useEffect(() => {
    localStorage.setItem("tasksSaved", JSON.stringify(state.tasks))
  }, [state]);






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
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, taskDone, APIcall }}>
      {children}
    </GlobalContext.Provider>
  )
}

