import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    const increamant = ()=>setCount(count+1);
    const decreamant = ()=>setCount(count-1);
    

    useImperativeHandle(ref, ()=>({
        increamant,
        decreamant
    }))
  return (
    <div>Child
        <button onClick={increamant}>child button </button>
        <button onClick={decreamant}>de button </button>
        {count}
    </div>
    
  )
})

export default Child;