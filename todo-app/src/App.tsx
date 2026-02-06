import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'
import { FilterButton } from './components/FilterButton'

function App() {
  


  return (
        <div className="app-container">
         <h1 className="app-title">📝 Мои задачи</h1> 
     <FilterButton/> 
      <TodoForm />
      <TodoItem />
    </div>
  )
}

export default App
