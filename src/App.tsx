import React from 'react';
import './css/App.css';
import ToDoItem from './components/ToDoItem';
import ToDoNewItem from './components/ToDoNewItem';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const initialTodos: ToDo[] = [
  {
    id: 'sdjhdfasdf',
    text: 'item 1',
    completed: true
  },
  {
    id: 'ooamanetey',
    text: 'item 2',
    completed: false
  }
];

function App() {
  const [allTodos, setTodos] = useState(initialTodos);

  function toggleTodo(selectedTodo: ToDo): void {
    const newTodos = allTodos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  function addTodo(text: string) {
    if (!text.length || !text.trim().length) {
      alert('Text cannot be empty!');

      return;
    }

    const newTodo: ToDo = {
      id: nanoid(),
      text,
      completed: false
    };

    setTodos([...allTodos, newTodo]);
  }

  return (
    <div className="App">
      {allTodos.map(todo => (
        <ToDoItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo} />
      ))}
      <ToDoNewItem addTodo={addTodo} />
    </div>
  );
}

export default App;
