import { TextField } from '@mui/material'
import React, { Component } from 'react'
import AddIcon from '@mui/icons-material/Add';
const style = {
    display:"flex",
    justifyContent:"space-around",
    alignItem: "center",
    padding:"30px",
    background:"rgb(203, 209, 204)"
}
export default class Header extends Component {
  render() {
    const modalStatus =()=>{
      this.props.handleClick(true)
    }
    return (
       
      <div style={style}>
         <TextField id="outlined-basic" onChange={(e)=>{this.props.handleSearch(e.target.value)}} label="Search Todo" variant="outlined" />
         <div style={{marginTop:"13px",color:'rgb(235, 89, 155)', cursor:"pointer"}}><AddIcon onClick= {modalStatus}/></div>
    </div>
    )
  }
}
