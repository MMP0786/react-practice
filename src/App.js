import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Parent from './Parent';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(30);

  // useEffect(()=>{
    
  //     setInterval(()=>{
  //       setCount((count) => {
  //         return count-1;
  //       }, 1000);
  //     })
    
    
  // },[]);
  
  return (
    <div className="App">
      {/* {count}
      <button >Start</button> */}
      {/* <Parent/> */}
      <BrowserRouter>
      <Main/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
