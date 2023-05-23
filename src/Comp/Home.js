import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const navStyle = {
  margin:"15px",
  textDecoration:"none",
}
const nav = {
  height: "30px",
  // background:"grey",
  padding:"20px"

}

function Home() {
  return (

<div style={nav}>
  <Link style={navStyle} to={"user1"}>User1</Link>
  <Link style={navStyle} to={"/user2"}>User2</Link>

      <div>It is Page of Home</div>
      
      <Outlet/>
    </div>
  )
}

export default Home