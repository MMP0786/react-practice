// import { Translate, WidthFull } from '@mui/icons-material'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import React, { Component } from 'react'

const style1 = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  alignItem:"center",
  margin:'auto',
  marginTop:"20px",
  maxWidth:"50%",
  height:"300px",
  background:"rgb(245, 243, 240)",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  right:"25%"
}
export default class Modal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:this.props.currentTodo?this.props.currentTodo.title:"",
       status:this.props.currentTodo?this.props.currentTodo.status:false,
       description:this.props.currentTodo?this.props.currentTodo.description:""
    }
  }
  // modalStatus =()=>{
  //     console.log(this.state.title)
  //   }
  

  render() {
    // const modalStatus =()=>{
    //     this.props.handleAddTodo(this.state.title, this.state.description, this.state.status);
    //     console.log(this.state);
    //     }
      const modalStatus1 =()=>{
        this.props.handleClick(false);
      }
      const createUpdate=()=>{
        if(this.props.currentTodo){
          this.props.update(this.props.currentTodo.id, this.state.title, this.state.description, this.state.status)
          
          console.log("first")
        }else{
          this.props.handleAddTodo(this.state.title, this.state.description, this.state.status)
          console.log("second")
        }
        this.props.handleClick(false);
      }
      

      console.log(this.props.currentTodo)
    return (
      <div style={style1}>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={6}
          fullWidth
          value={this.state.title}
          onChange={(e)=>this.setState({title: e.target.value})}
        />
        </div>
        <div><TextField
          id="filled-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          fullWidth
          variant="filled"
          value={this.state.description}
          onChange={(e)=>this.setState({description: e.target.value})}
        /></div>
         
         <div>
          <div>Status</div>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Status"
            fullWidth
            value={this.state.status}
            onChange={(e)=>this.setState({status: e.target.value})}
    
          >
            <MenuItem value={true}>Done</MenuItem>
            <MenuItem value={false}>Pending</MenuItem>
            {/* <MenuItem value={"Final"}>Final</MenuItem> */}
          </Select>

          <div>
          <Button type='submit' onClick={createUpdate} variant="contained">Submit</Button>

          <Button onClick={modalStatus1} style={{margin:"20px"}} variant="outlined"> Cancel</Button>
          </div>
   
   </div>
  </div>
    )
  }
}
