import React from 'react';

function ToDoItem({ todo, toggleTodo, initRemoveTodo }: ToDoItemProps): JSX.Element {
  return (
    <div className='ToDoItem'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo)} />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
        className='ToDoItem__label'>
        {todo.text}
      </span>
      <button
        className='RemoveToDo__btn'
        onClick={() => initRemoveTodo(todo)}>❌</button>
    </div>
  );
}

export default ToDoItem;
