import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
   const [search, setSearch]= useSearchParams()
   const [value, setValue]= useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(search.get("q"))
        setSearch("")
    }
  return (
    <>
    <div></div>
    {/* <span>Search : </span> */}
    <form onSubmit={handleSubmit}>
    <input type="search" onChange={(e)=>setSearch({q:e.target.value})} name="" id="" placeholder='Search here ...' />
    <input type="submit" value="Search" />
    <div>All Shirts Available here.....Search</div>
    </form>
    </>
  )
}

export default Search