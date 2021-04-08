import React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  getFilteredTodos(filterType, todos) {
    switch (filterType) {
      case 'activity':
        return todos.filter((todo) => todo.done === false);

      case 'completed':
        return todos.filter((todo) => todo.done === true);

      default:
        return todos;
    }
  }

  render() {
    const { todos, filterType, onToggle, removeTodo, editTodoItem } = this.props;
    const filteredTodos = this.getFilteredTodos(filterType, todos);

    return (
      <ul className="todo-list">
        {filteredTodos.map(({ id, title, done }) => (
          <TodoItem
            key={id}
            title={title}
            done={done}
            onChange={() => onToggle(id)}
            removeTodo={() => removeTodo(id)}
            onEdit={(title) => editTodoItem(id, title)}
          />
        ))}
      </ul>
    );
  }
}
