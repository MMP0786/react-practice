import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const navStyle = {
  margin:"15px",
  textDecoration:"none",
}
const nav = {
  height: "20px",
  background:"orange",
  padding:"20px",
  width:"50%",
  margin:"auto"

}

function Home() {
  
  return (
<>
<div style={nav}>
  <Link style={navStyle} to={"user/1"}>User1</Link>
  {/* <Link style={navStyle} to={"user/2"}>User2</Link> */}

    </div>
      <div>It is Page of Home</div>
      
      <Outlet/>
</>
  )
}

export default Home