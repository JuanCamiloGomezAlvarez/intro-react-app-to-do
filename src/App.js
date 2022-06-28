import React from "react";
import {TodoCounter} from "./TodoCounter.js";
import {TodoSearch} from "./TodoSearch.js";
import {TodoList} from "./TodoList.js";
import { TodoItem} from "./TodoItem.js";
import { CreateTodoButton} from "./CreateTodoButton.js";
//import './App.css';

const to_do = [
  {text: "cortar papas", completed: true},
  {text: "cocinar papas", completed: false},
  {text: "aplastar papas ", completed: false},
  {text: "revolver verduras y salchichas con papas", completed: false}
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
        {to_do.map(todo => 
          (<TodoItem 
          key={todo.text} 
          text={todo.text}
          completed = {todo.completed}/>))}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
