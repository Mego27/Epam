import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul className='todo-list'>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
      ))}
    </ul>
  );
}
