import React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  render() {
    return (
      <ul className='todo-list'>
        {this.props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onChange={this.props.onToggle}
            removeTodo={this.props.removeTodo}
          />
        ))}
      </ul>
    );
  }
}
