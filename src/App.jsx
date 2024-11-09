import React from "react"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "./hooks/useTodo"
import { Descargar } from "./components/Descargar"
import "./App.css"
import { Helmet } from "react-helmet"


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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219 Lista de tareas",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "25 de Mayo 123",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816671884",
            "description":
              "Lista de tareas o todo app. Hecho por CanepaDev en 219Labs.",
            "url": "https://219-todo-app.vercel.app/",
          })}
        </script>
      </Helmet>
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
