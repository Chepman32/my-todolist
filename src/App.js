import React from 'react';
import Context from "./Context"
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Купить масло"},
    {id: 2, completed: true, title: "Купить хлеб"},
    {id: 3, completed: false, title: "Купить молоко"}
  ])
  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    )
  }
  const removeTodo = id => {
    setTodos.filter(todo => todo.id !== id)
  }
  return (
  <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
    </Context.Provider>
  );
}

export default App;
