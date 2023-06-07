import React, { useEffect, useState } from 'react'
import Task from './Task'
import CreateTodo from './CreateTodo'
// import { json } from 'react-router-dom'

function Todo() {
    const [val, setVal]= useState("");
    const [todos, setTodos] = useState([
        {
            task: "Todo 1",
            status: true
        },
        {
            task: "Todo 2",
            status: false
        },
        {
            task: "Todo 3",
            status: false
        },
    ])

    useEffect(()=>{
        let a = JSON.parse(localStorage.getItem("item"))
        // console.log("first", a)
        // const newTodos = [...a]
        setTodos(a)
        // console.log(a)
    },[])

    useEffect(()=>{
        localStorage.setItem("item", JSON.stringify(todos))

    }, [todos])
    function addTodo(newTodo){
        // const newT = [...todos]
        setTodos([...todos, newTodo])
    }

    function handleComplete(index){
        setTodos(()=>{
            const newTodo =[...todos]
            newTodo[index].status = true;
            return newTodo;
        })
    }
    function handleRemove(index){
        setTodos(()=>{
            const newTodo =[...todos]
            newTodo.splice(index, 1)
            // newTodo[index].status = true;
            return newTodo;
        })
    }
    function handleEdit(index){
        setVal(()=>{
           let vall = todos[index].task
            // alert(vall)
            return vall;
        })
    }
  return (
    <div>
        <p>All Todos</p>
        <CreateTodo addTodo={addTodo} val={val}/>
        {todos.map((task1, index)=> <Task {...task1}
         handleRemove={handleRemove} key={index} handleEdit={handleEdit} index={index} handleComplete={handleComplete}/>
        )}
        {/* <Task /> */}
    </div>
  )
}

export default Todo