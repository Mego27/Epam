import React from 'react';
import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';
import { Footer } from './components/Footer';

export class App extends React.Component {
  state = {
    todos: [],
    filterType: 'all',
  };
  counterId = 0;

  toggleTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    });
    this.setState({ todos: newTodos });
  }

  getLastIdTodo() {
    return this.counterId++;
  }

  addTodo = (title) => {
    const newTodos = [
      ...this.state.todos,
      {
        title,
        id: this.getLastIdTodo() + 1,
        done: false,
      },
    ];

    this.setState({ todos: newTodos });
  };

  removeTodo(todoId) {
    const newTodos = this.state.todos.filter(({ id }) => id !== todoId);

    this.setState({ todos: newTodos });
  };

  removeCompletedTodos() {
    const newTodos = this.state.todos.filter(({ done }) => !done);

    this.setState({ todos: newTodos });
  }

  changeAllTodos() {
    const { todos } = this.state;
    const doneValue = todos.some(({ done }) => !done);
    const newTodos = todos.map((todo) => {
      todo.done = doneValue;

      return todo;
    });

    this.setState({ todos: newTodos });
  }

  editTodoItem(id, title) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  }

  filterTodos(type) {
    this.setState({ filterType: type });
  }

  render() {
    const { todos, filterType } = this.state;

    return (
      <div className="todo">
        <h1>Todo app</h1>
        <div className="top-panel">
          <button
            className="change-all-todo-button"
            onClick={() => this.changeAllTodos()}
          >
            <svg width="25" viewBox="0 0 512 512">
              <path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z" />
            </svg>
          </button>
          <NewTodo onCreate={this.addTodo} />
        </div>
        {todos.length ? (
          <div className="content">
            <TodoList
              todos={todos}
              filterType={filterType}
              onToggle={(id) => this.toggleTodo(id)}
              removeTodo={(id) => this.removeTodo(id)}
              editTodoItem={(id, title) => this.editTodoItem(id, title)}
            />
            <Footer
              todos={todos}
              filterTodos={(type) => this.filterTodos(type)}
              removeCompletedTodos={() => this.removeCompletedTodos()}
            />
          </div>
        ) : (
          <p>No todos!</p>
        )}
      </div>
    );
  }
}
