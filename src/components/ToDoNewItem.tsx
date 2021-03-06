import React, { useState } from 'react';

function ToDoNewItem({ addTodo }: ToDoNewItemProps): JSX.Element {
  const [newToDoText, setNewToDoText] = useState('');

  function handleNewTodo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    addTodo(newToDoText);
    setNewToDoText('');
  }

  return (
    <div className='ToDoNewItem'>
      <textarea
        className='ToDoNewItem__input'
        value={newToDoText}
        onChange={event => {
          setNewToDoText(event.target.value);
        }}
        data-testid="ToDoNewItemInput-test"/>
      <button
        className='ToDoNewItem__btn'
        onClick={event => { handleNewTodo(event); }}
        data-testid="ToDoNewItemBtn-test">
        Add ToDo
      </button>
    </div>
  );
}

export default ToDoNewItem;
