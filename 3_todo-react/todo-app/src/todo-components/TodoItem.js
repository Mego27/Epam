import React, { useContext } from 'react';
import Context from '../context';

export default function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);

  return (
    <li className='todo-item'>
      <input
        type='checkbox'
        className='input-checkbox'
        checked={todo.done}
        onChange={() => onChange(todo.id)}
      />
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button
        className='remove-button'
        onClick={removeTodo.bind(null, todo.id)}
      >
        <b>X</b>
      </button>
    </li>
  );
}
