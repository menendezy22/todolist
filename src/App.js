import React,{useState,useEffect} from "react";
import "./app.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  //state stuff
  const [inputText,setInputText] = useState("") ;
  const[todos,setTodos] = useState([]);
  const[status,setStatus] = useState("All"); 
  const[filteredTodos,setFilteredTodos] = useState([]);

  //useEffect
useEffect(() => {
  
  filteredHandler() ;
  saveLocalTodos() ;
},[todos,status])

useEffect(() =>{
  getLocalTodos();
}, [])
  //functions
  const filteredHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed == true)) ;
        break;
      case'uncomplted' :
      setFilteredTodos(todos.filter(todo => todo.completed == false)) ;
      break;
      default:
        setFilteredTodos(todos);
        break;       
    }
  }

  const saveLocalTodos = () =>{
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      localStorage.getItem("todos" , JSON.stringify(todos))
    }
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      localStorage.getItem("todos" , JSON.stringify(todos))
    }
  } 


  return (
    <div className="App">
      <header>
        <h1>My todo  list </h1>
        
        
      </header>
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
