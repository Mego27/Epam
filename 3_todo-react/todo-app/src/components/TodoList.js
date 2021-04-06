import React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  render() {
    const { todos, filter, onToggle, removeTodo, editTodoItem } = this.props;
    let filteredTodos;

    switch (filter) {
      case 'activity':
        filteredTodos = todos.filter((todo) => todo.done === false);
        break;

      case 'completed':
        filteredTodos = todos.filter((todo) => todo.done === true);
        break;

      default:
        filteredTodos = todos;
        break;
    }

    return (
      <ul className='todo-list'>
        {filteredTodos.map(({ id, title, done }) => (
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
