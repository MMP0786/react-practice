import React, { useState } from 'react'
import Task from './Task'
import CreateTodo from './CreateTodo'

function Todo() {
    const [todos, setTodos] = useState([
        {
            task: "Todo 1",
            status: false
        },
        {
            task: "Todo 2",
            status: true
        },
        {
            task: "Todo 3",
            status: false
        },
    ])
    function addTodo(newTodo){
        // const newT = [...todos]
        setTodos([...todos, newTodo])
    }
    console.log(todos)
  return (
    <div>
        <p>All Todos</p>
        <CreateTodo addTodo={addTodo}/>
        {todos.map(a=> <Task a={a}/>
        )}
        {/* <Task /> */}
    </div>
  )
}

export default Todo