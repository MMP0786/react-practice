import React, { useEffect, useRef, useState } from 'react'

function AutoCounter() {
    const [count, setCount]= useState(0)
    const ref =useRef()

   useEffect(()=>{
    //    setInterval(() => {
           
    //        setCount(count+1)
    //     }, 1000);
        
        // ref.current=  ref.current+1
        
    },);
    
   function counter(){
    setInterval(() => {
        setCount(count=> count+1)
    }, 1000);
   }
   console.log(ref.current)
// ref.current.align = "right"

  return (
    <div>
        {count}
        {/* {ref.current} */}
        <button onClick={counter}>Start</button>
        <div ref={ref}>It is situation of the ref</div>
    </div>
  )
}

export default AutoCounter