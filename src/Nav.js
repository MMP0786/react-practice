import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        margin:"15px",
        textDecoration:"none",
    }
    const nav = {
        height: "30px",
        background:"grey",
        padding:"20px"

    }
  return (
    <div style={nav}>
        <Link style={navStyle} to={"/"}>Home</Link>
        <Link style={navStyle} to={"/products"}>Products</Link>
        <Link style={navStyle} to={"/contact"}>Contact</Link>
        <Link style={navStyle} to={"/search"}>Search</Link>
    </div>
  )
}

export default Nav