import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const ref = useRef()
    console.log(ref)
  return (
    <div>Parent
        <Child ref={ref}/>
        <div>
            <button onClick={()=>ref.current.increament()}>this is button</button>
            <button onClick={()=>ref.current.decreament}>this is button</button>
            {/* <button onClick=>this is button</button> */}
        </div>
    </div>
  )
}

export default Parent