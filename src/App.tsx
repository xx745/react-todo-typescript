import './css/App.css';
import ToDoItem from './components/ToDoItem';
import ToDoNewItem from './components/ToDoNewItem';
import { useState } from 'react';

const allTodos: ToDo[] = [
  {
    id: 1,
    text: 'item 1',
    completed: true,
  },
  {
    id: 2,
    text: 'item 2',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(allTodos);

  const toggleTodo = (selectedTodo: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };


  return (
    <div className="App">
      <ToDoItem todo={todos[0]} toggleTodo={toggleTodo} />
      <ToDoItem todo={todos[1]} toggleTodo={toggleTodo} />
      <ToDoNewItem />
    </div>
  );
}

export default App;
