import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialTodos = (localStorage.getItem('todos'))? JSON.parse(localStorage.getItem('todos')) : [];

const App = () => {
  const [todos, setTodos] = useState(initialTodos)
  useEffect(() => { 
    localStorage.setItem('todos', JSON.stringify(todos)
  )}, [todos])
  const addTodo = (todo)=>{
    setTodos([...todos,todo]);
  }
  const deleteTodo = (id)=>{
    const newArray = todos.filter( t => t.id !== id)
    setTodos(newArray)
  }
  const updateTodo = (id) => {
    const newArray = todos.map(t => {
      if(t.id === id){
        t.state = !t.state
      }
      return t;
    });
    setTodos(newArray)
    
  }
  const ordenarArray = (arrayTodos) =>{
    return arrayTodos.sort((a,b) => b.priority - a.priority)
  }
  return (
    <div className="container">
      <h1>Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={ordenarArray(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App;