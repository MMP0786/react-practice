import React from 'react'

function Task(props) {
    // console.log(props)

    const style1 = {
        display:"flex",
        justifyContent: "space-between",
        maxWidth:"400px",
        margin:"auto",
        border:"1px solid",
        marginTop: "10px"
    }

    const MarkComp = ()=>{
        props.handleComplete(props.index)
    }
    
    const MarkRemove = ()=>{
        props.handleRemove(props.index)
    }
    
    const MarkEdit = ()=>{
        props.handleEdit(props.index)
    }
    
  return (
    <div >
        <div  style={style1}>
            <div>{props.task}</div>
            <div>
            {
                props.status ? <button style={{background:"green"}} >Complete</button>:<button onClick={MarkComp}>Mark Complete</button>
                // props.status && <button>Complete</button>
            }
            <button onClick={MarkRemove} style={{background:"red"}}>Remove</button>
            <button onClick={MarkEdit} style={{background:"grey"}}>Edit</button>
            </div>
           </div>
    </div>
  )
}

export default Task