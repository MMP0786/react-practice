import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default class Main extends Component {
 
  render() {
   
    return (
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", minMargin:"20px"}}>
        
          {this.props.todos.map((todos, index)=>{
            return (
              <div style={{border:"1px solid", width:"150px", height:"200px", textAlign:"center", marginTop:"20px" }} key={index}>
              <h3>{todos.title}</h3>
              <p>{todos.description}</p>
              <span>{todos.status? "Complete": " Not Complete"}</span>
              <div style={{margin:"10px", marginRight:"20px"}}>

              <DeleteIcon style={{ marginRight:"20px", cursor:"pointer" }} onClick={()=>this.props.handleDelete(todos.id)}/>

              <ModeEditOutlineIcon style={{cursor:"pointer"}} onClick={()=>this.props.handleEdit(todos.id)}/>
              </div>
              </div>
            )
          })}
      </div>
    )
  }
}
