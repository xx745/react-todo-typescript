import './css/App.css';
import ToDoItem from './components/ToDoItem';
import ToDoNewItem from './components/ToDoNewItem';
import { useState } from 'react';

const initialTodos: ToDo[] = [
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
  const [allTodos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: ToDo) => {
    const newTodos = allTodos.map((todo) => {
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
      {allTodos.map(todo => (
        <ToDoItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo} />
      ))}
      <ToDoNewItem />
    </div>
  );
}

export default App;
