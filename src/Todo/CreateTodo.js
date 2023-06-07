import React, { useEffect, useState } from 'react'

const style1 = {
    display:"flex",
    justifyContent: "space-between",
    flexDirection: "row",
    maxWidth:"400px",
    margin:"auto",
    border:"1px solid",
    marginTop: "10px"
}

function CreateTodo(props) {
    const [value, setValue]= useState(props.val)

    
    console.log("props in : ", props,'jff', value)
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addTodo({
            task: value,
            status: false
        })
        console.log("inside add fn")
        setValue("")
    }
    useEffect(()=>{
        if(props.val !== value){
            console.log("inside use")
            setValue(props.val)
            if(props.val !== value){
                console.log("inside use")
                setValue("")
            }
        }else{

            setValue("")
            console.log("inside use11")
        }
        
    },[props])
    
  return (
    <div >
        <form onSubmit={handleSubmit} style={style1}>
            <div style={{width:"350px", height:"100%", outline:"none", display:"flex"}}>

                <input style={{outline:"none", border:"none"}}  type="text" placeholder='Enter Text here ....' name="" id="" value={value} onChange={(e)=>setValue( e.target.value)}/>
                
                </div>
            <div><input type="submit" value="Add Todo" /></div>
        </form>
    </div>
  )
}

export default CreateTodo