import { createContext } from "react"


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

  const addTask = (task) => {
    console.log(task)
  }
  return (
    <GlobalContext.Provider value={{ ...initialState, addTask }}>
      {children}
    </GlobalContext.Provider>
  )
}

