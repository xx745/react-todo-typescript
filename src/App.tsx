import React, { useState, useEffect } from 'react';
import './css/App.css';
import ToDoItem from './components/ToDoItem';
import ToDoNewItem from './components/ToDoNewItem';
import StorageApi from './services/StorageApi';

const storage = new StorageApi();

const initialTodos: ToDo[] = [];

function App() {
  const [allTodos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const savedToDos: ToDo[] = storage.loadTodos();

    if (savedToDos.length) {
      setTodos(savedToDos);
    }
  }, []); // called on mounted

  function saveTodos(todosToSave: ToDo[]): void {
    setTodos(todosToSave);
    storage.saveTodos(todosToSave);
  }

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

    saveTodos(newTodos);
  }

  function addTodo(text: string): void {
    if (!text.length || !text.trim().length) {
      alert('Text cannot be empty!');

      return;
    }

    const newTodo: ToDo = {
      id: new Date().getTime(),
      text,
      completed: false
    };

    saveTodos([...allTodos, newTodo]);
  }

  function removeAllTodos(): void {
    setTodos([]);
    storage.removeTodos();
  }

  function removeTodo(todoToRemove: ToDo): void {
    const newToDosArray: ToDo[] = allTodos.filter(todo => todo.id !== todoToRemove.id);

    saveTodos(newToDosArray);
  }

  return (
    <div className="App">
      {allTodos.map(todo => (
        <ToDoItem
          key={`${todo.text}-${todo.id}`}
          todo={todo}
          toggleTodo={toggleTodo}
          initRemoveTodo={removeTodo} />
      ))}
      <ToDoNewItem addTodo={addTodo} />
      <button
        className='ToDoClearAll__btn'
        onClick={removeAllTodos}>
        Remove all
      </button>
    </div>
  );
}

export default App;
