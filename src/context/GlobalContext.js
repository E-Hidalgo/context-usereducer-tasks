/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useReducer, useEffect, useLocalStorage } from "react"
import appReducer from "./AppReducer"
import { v4 } from "uuid"


const initialState = {
  tasks: []
}


export const GlobalContext = createContext(initialState)


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    localStorage.setItem("tasksSaved", JSON.stringify(state.tasks))
    const alfredo = JSON.parse(localStorage.getItem("tasksSaved"))
    state.tasks = alfredo
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
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, taskDone }}>
      {children}
    </GlobalContext.Provider>
  )
}

