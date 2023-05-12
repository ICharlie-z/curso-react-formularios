import { useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialTodos = [
  {
    id: 1,
    title: 'Todo #01',
    description: 'Descripción #01',
    state: true,
    priority: true
  },
  {
    id: 2,
    title: 'Todo #02',
    description: 'Descripción #02',
    state: false,
    priority: false
  },
  {
    id: 3,
    title: 'Todo #03',
    description: 'Descripción #03',
    state: false,
    priority: true
  }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos)

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