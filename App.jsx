import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filters from './components/Filters'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React components', completed: true },
    { id: 2, text: 'Understand props', completed: false },
    { id: 3, text: 'Build something awesome', completed: false },
  ])
  const [filter, setFilter] = useState('All')

  const addTodo = (text) => {
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const filtered = todos.filter((t) => {
    if (filter === 'Active') return !t.completed
    if (filter === 'Completed') return t.completed
    return true
  })

  const doneCount = todos.filter((t) => t.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <p>Stay organized, get things done</p>
      </header>

      <AddTodo onAdd={addTodo} />
      <Filters current={filter} onChange={setFilter} />

      <div className="stats">
        <span>{todos.length} total</span>
        <span>{doneCount} completed</span>
      </div>

      <TodoList
        todos={filtered}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
