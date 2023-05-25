import React from 'react'

function Task({a}) {
    // console.log(props)

    const style1 = {
        display:"flex",
        justifyContent: "space-between",
        maxWidth:"400px",
        margin:"auto",
        border:"1px solid",
        marginTop: "10px"
    }

    const btn = {
        outline:"none",
        border:"none",
        background: a.status ? "green": "red",
        hight:"100%"

    }
  return (
    <div>
        {/* <p>this is p</p> */}
        <div style={style1}>
            <div>{a.task}</div>
           <div>
                {a.status && <button style={btn}>Completed</button>}
                {a.status && <button style={btn}>Remove</button>}
            </div>
            {!(a.status) && <button style={btn}>Mark Complete</button>}
         </div>
        {/* {props.map(a=> {
            return(
                <>
                <span>{a.task}</span>
                
                </>
            )
        })} */}
    </div>
  )
}

export default Task