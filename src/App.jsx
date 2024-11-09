import React from "react"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "./hooks/useTodo"
import { Descargar } from "./components/Descargar"
import "./App.css"


function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <Descargar />
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>N° de Tareas: <span>{todosCount}</span></h3>
          <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  )
}

export default App
