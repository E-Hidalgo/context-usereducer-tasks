/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useReducer } from "react"
import appReducer from "./AppReducer"

const initialState = {
  tasks: [
    {
      id: 1,
      title: "title one",
      description: "some description",
      done: false
    },
    {
      id: 2,
      title: "title two",
      description: "some description two",
      done: false
    }
  ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => {

    dispatch({ type: "ADD_TASK", payload: task })
  }


  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK" })
  }

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  )
}

