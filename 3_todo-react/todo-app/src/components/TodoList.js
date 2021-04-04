import React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  render() {
    const { onToggle, removeTodo, editTodoItem } = this.props;
    return (
      <ul className='todo-list'>
        {this.props.todos.map(({ id, title, done }) => (
          <TodoItem
            key={id}
            title={title}
            done={done}
            onChange={() => onToggle(id)}
            removeTodo={() => removeTodo(id)}
            editTodoItem={(title) => editTodoItem(id, title)}
          />
        ))}
      </ul>
    );
  }
}
