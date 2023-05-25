import React, { useState } from 'react'

function CreateTodo(props) {
    const [value, setValue]= useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addTodo({
            task: value,
            status: false
        })
        setValue(" ")
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Text here ....' name="" id="" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <input type="submit" value="Add Todo" />
        </form>
    </div>
  )
}

export default CreateTodo