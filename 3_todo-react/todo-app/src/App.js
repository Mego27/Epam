import React from 'react';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { ChangeAllTodos } from './components/ChangeAllTodo';
import { Footer } from './components/Footer';

export class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: 'Create react app', done: false },
      { id: 2, title: 'Push to Git', done: true },
      { id: 3, title: 'Meeting in Microsoft Teams at 18:00', done: false },
    ],
  };

  toggleTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    });
    this.setState({ todos: newTodos });
  }

  getMaxIdTodo() {
    const { todos } = this.state;

    if (todos.length > 0) {
      return Math.max.apply(
        null,
        todos.map(({ id }) => id)
      );
    }

    return 0;
  }

  addTodo = (title) => {
    const newTodos = [
      ...this.state.todos,
      {
        title,
        id: this.getMaxIdTodo() + 1,
        done: false,
      },
    ];

    this.setState({ todos: newTodos });
  };

  removeTodo = (todoId) => {
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

  render() {
    const { todos } = this.state;

    return (
      <div className='todo'>
        <h1>Todo app</h1>
        <div className='top-panel'>
          <ChangeAllTodos changeAllTodos={() => this.changeAllTodos()} />
          <AddTodo onCreate={this.addTodo} />
        </div>
        {todos.length ? (
          <div className='content'>
            <TodoList
              todos={todos}
              onToggle={(id) => this.toggleTodo(id)}
              removeTodo={this.removeTodo}
              editTodoItem={(id, title) => this.editTodoItem(id, title)}
            />
            <Footer
              todos={todos}
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
