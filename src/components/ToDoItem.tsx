import React from 'react';

function ToDoItem({ todo, toggleTodo }: ToDoItemProps): JSX.Element {
  return (
    <div className='ToDoItem'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => { toggleTodo(todo) }} />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
        className='ToDoItem__label'>
        {todo.text}
      </span>
    </div>
  )
};

export default ToDoItem;
