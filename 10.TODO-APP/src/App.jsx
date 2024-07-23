import React, { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== updatedTodo.id) {
        return todo;
      }
      return updatedTodo;
    })
    setTodos([...updatedTodos]) // Burada '...' spread operatörüne gerek yok
  }

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App


// import React, { useState } from 'react'
// import './App.css'
// import TodoCreate from './components/TodoCreate'
// import TodoList from './components/TodoList'

// function App() {
//   const [todos, setTodos] = useState([])

//   const createTodo = (newTodo) => {
//     setTodos([...todos, newTodo])
//   }
//   const removeTodo = (todoId) => {
//     setTodos([...todos.filter((todo) => todo.id !== todoId)])
//   }
//   const updateTodo = (newTodo) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id !== newTodo) {
//         return todo;
//       }
//       return newTodo;
//     })
//     setTodos([...updatedTodos])
//   }

//   return (
//     <div className='App'>
//       <div className='main'>
//         <TodoCreate onCreateTodo={createTodo} />
//         <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
//       </div>

//     </div>
//   )
// }

// export default App
