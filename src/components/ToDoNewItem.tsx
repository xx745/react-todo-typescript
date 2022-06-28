import React from 'react';

function ToDoNewItem(): JSX.Element {
    return (
        <div className='ToDoNewItem'>
            <textarea className='ToDoNewItem__input'/>
            <button className='ToDoNewItem__btn'>Add ToDo</button>
        </div>
    )
};

export default ToDoNewItem;
