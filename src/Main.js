import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Comp/Home'
import Products from './Comp/Products'
import Contact from './Comp/Contact'
import Error from './Comp/Error'
import Nav from './Nav'
import Shirts from './Comp/Shirts'
import Paints from './Comp/Paints'
import Search from './Comp/Search'
import User from './Comp/User'

function Main() {
  const navigate = useNavigate();
  const handleNavigate = (url)=>{
    navigate(url)
  }
  return (
    <div>
        <Nav/>
        <button onClick={()=>handleNavigate(-1)}>Go Back</button>
        <button onClick={()=>navigate(+1)}>Go Ahead</button>
        <Routes>
            <Route path='/' element={<Home/>} >
              <Route path='user/1' element={<User/>}/>
              <Route path='user/2' element={<User/>}/>
            </Route>
            <Route path='/Products' element={<Products/>}>
              <Route path='shirts' element={<Shirts/>}></Route>
              <Route path='paints' element={<Paints/>}></Route>
              <Route index element={<Shirts/>} />
            </Route>
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error/>} />
            <Route path='search' element={<Search/>} />
        </Routes>
    </div>
  )
}

export default Main