import React from "react";
import AppUI from "./AppUI";

// const to_do = [
//   {text: "cortar papas", completed: true },
//   {text: "cocinar papas", completed: false},
//   {text: "aplastar papas ", completed: false},
//   {text: "revolver verduras y salchichas con papas", completed: false}
// ]
function useLocalStorage(itemNAme) {
  //Traemos nuestros TODOs almacenados
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {
    //Si el usuario es nuevo no exixte un item en localStorage,
    //por lo tanto guardamos uno con un array vacio.
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  }else{
    //Si exixten TODOs en el localStorage los regresmos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos)
  }

    //Guardamos nuestros TODOS del localStorage en nuestro estado
  // Estado inicial de nuestros TODOS
  const [todos, setTodos] = React.useState(parsedTodos);

    //Creamos la funcióm en la que actualizaremos nuestro localStorage
    const saveTodos = (newTodos) => {
      // Convertimos a String nuestros TODOs
      const stringifiedTodos = JSON.stringify(newTodos);
      //los guardamos en el localStorage
      localStorage.setItem("TODOS_V1", stringifiedTodos);
      //Actualizamos nuestro estado
      setTodos(newTodos);
    }
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage();

  //El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState("");
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => todo.completed).length;
  // Cantidad total de todos
  const totalTodos = todos.length;
  // Creamos una variable en las que guardamos las coincidencias con la búsqueda.
  let searchedTodos= [];
  //Lógica para filtrar.
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    //Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);

  }

  return (
   <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos} 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue} 
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}

   />
  );
}

export default App;
