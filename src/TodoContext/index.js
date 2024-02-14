import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}) {

    // Estados

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', [])

  const completedTodos = todos.filter(
                          todo => !!todo.completed).length

  //console.log('valor de completedTodos' + completedTodos)

  const [searchValue,setSearchValue] = React.useState('')
  //console.log('Los usuarios buscan todos de ' + searchValue)

  const totalTodos = todos.length

  const [openModal,setOpenModal] = React.useState(false)

 
  // Estados derivados

  const searchedTodos = todos.filter ( (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                addTodo,
                openModal,
                setOpenModal,
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}