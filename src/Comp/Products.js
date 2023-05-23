import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  const navStyle = {
    margin:"15px",
    textDecoration:"none",
    color:"white"
}
const nav = {
    height: "15px",
    background:"red",
    padding:"20px",
    margin: "20px"

}
  return (
    <>
    <div>It is Page of Products</div>
    <div style={nav}>

    <Link style={navStyle} to="shirts">Shirts</Link>
    
    <Link style={navStyle} to="paints">Paints</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Products