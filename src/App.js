import  Modal  from './Todos/Modal';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Todos/Header';
import Main from './Todos/Main';

export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        arr : [],
        modal: false,
        textSearch:"",
        filterArr:[]
      }
    }

    componentDidMount(){
      let arr1 = JSON.parse(localStorage.getItem("todos"))
      this.setState({arr:arr1})
    }
    componentDidUpdate(){
      localStorage.setItem("todos", JSON.stringify(this.state.arr))
    }
    render() {
      

      const handleSearch = (text)=>{
        if(this.state.arr.length>0){
          console.log(this.state.arr)
          const temparr = this.state.arr.filter(ele=> ele.title.toLowerCase().includes(text.toLowerCase()))
          this.setState({filterArr: temparr});
          this.setState({textSearch:text})
          // console.log(text, temparr)
          
        }
          
      }
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
        <Header handleClick = {handleClick} handleSearch={handleSearch}/> 
        <Main todos = {this.state.textSearch ? this.state.filterArr :this.state.arr}  handleClick={handleClick}  handleDelete={ handleDelete}  
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
