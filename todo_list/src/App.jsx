import { useEffect, useState } from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  
const [todos, setTodos] = useState([])
const [todoValue, settodoValue] = useState([])


function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({
    todos: newList
  }))

}

function handleAddTodos(newTodo){
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDelete(index){ 
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index

  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEdit(index){
  const valueTobeEdited = todos[index]
 
  settodoValue(valueTobeEdited)
  handleDelete(index)

}

useEffect(() => {
  if(!localStorage){
    return
  }

  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)

}, [])



  
  return (

    <>
      <TodoInput todoValue = {todoValue} settodoValue ={settodoValue} handleAddTodos= {handleAddTodos}/>
      <TodoList handleEdit= {handleEdit} handleDelete= {handleDelete} todos={todos}/>

    
    </>
  )
}

export default App
