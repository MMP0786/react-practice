import  Modal  from './Todos/Modal';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Todos/Header';
import Main from './Todos/Main';

export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        arr : [
            {
                id: uuidv4(),
                title: "Todo 1",
                status: true,
                description: "This is todo1 description"
            },
            {
                id: uuidv4(),
                title: "Todo 2",
                status: true,
                description: "This is todo1 description"
            },
            {
                id: uuidv4(),
                title: "Todo 3",
                status: true,
                description: "This is todo1 description"
            }
        ],
        modal: false
      }
    }

    
    render() {
      const handleClick =(status)=>{
        this.setState({modal:status})
      }

      const handleDelete = (id)=>{
        this.setState({
          arr:this.state.arr.filter((ele)=>ele.id !==id)
        })
      }

      const handleAddTodo = (title, des, st)=>{
        this.setState({
          arr: [...this.state.arr, 
          {
            id:uuidv4(),
            title: title,
            description: des,
            status: st
          }],
          modal:false,
          currentTodo1:{}
        })
      }

      
      const handleEdit =(id)=>{
        let currentTodo1 = this.state.arr.filter(ele=> ele.id===id)[0];
        this.setState({
          currentTodo1:this.state.arr.filter(ele=> ele.id===id)[0]
        });
        this.setState({modal: true});
        console.log("this", currentTodo1)
        console.log("this", this.state.currentTodo1)
        }
        
        const update = (id, title, description, status)=>{
        // const temparr = this.state.arr.map(a=>{a.id===id});
        const temparr = this.state.arr.map(ele=>{
          if(ele.id ===id){
            return{
              id,
              title,
              description,
              status
            }
          }
          
          return ele;
        })
        this.setState({
          arr:temparr
        })
      }
      // console.log(this.state.currentTodo1)
      return (
      <div>
        <Header handleClick = {handleClick}/> 
        <Main todos = {this.state.arr}  handleClick={handleClick}  handleDelete={ handleDelete}  
        handleEdit ={handleEdit}
      />

        {this.state.modal && <Modal handleAddTodo={handleAddTodo}  handleClick= {handleClick} update={update} currentTodo={this.state.currentTodo1}/>}
      </div>
    )
  }
}



// import logo from './logo.svg';
// import './App.css';
// import React, {useEffect, useState} from 'react'
// import Parent from './Parent';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   // const [count, setCount] = useState(30);

//   // useEffect(()=>{
    
//   //     setInterval(()=>{
//   //       setCount((count) => {
//   //         return count-1;
//   //       }, 1000);
//   //     })
    
    
//   // },[]);
  
//   return (
//     <div className="App">
//       {/* {count}
//       <button >Start</button> */}
//       {/* <Parent/> */}
//       <BrowserRouter>
//       <App/>
      
//       </BrowserRouter>


//     </div>
//   );
// }

// export default App;
