import React from 'react';
import { TodoList } from './todo-components/TodoList';
import { AddTodo } from './todo-components/AddTodo';
import { ChangeAllTodos } from './todo-components/ChangeAllTodo';
import { Footer } from './todo-components/Footer';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'Create react app', done: false },
    { id: 2, title: 'Push to Git', done: true },
    { id: 3, title: 'Meeting in Microsoft Teams at 18:00', done: false },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }

        return todo;
      })
    );
  }

  function getMaxIdTodo() {
    if (todos.length > 0) {
      return Math.max.apply(
        null,
        todos.map((todo) => todo.id)
      );
    }

    return 0;
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: getMaxIdTodo() + 1,
          done: false,
        },
      ])
    );
  }

  function removeTodo(todoId) {
    setTodos(todos.filter(({ id }) => id !== todoId));
  }

  function removeCompletedTodos() {
    setTodos(todos.filter(({ done }) => done === false));
  }

  function changeAllTodos() {
    setTodos(() => {
      let doneValue = true;

      if (todos.every(({ done }) => done === true)) {
        doneValue = false;
      }

      return todos.map((todo) => {
        todo.done = doneValue;

        return todo;
      });
    });
  }

  return (
    <div className='todo'>
      <h1>Todo app</h1>
      <div className='top-panel'>
        <ChangeAllTodos changeAllTodos={changeAllTodos} />
        <AddTodo onCreate={addTodo} />
      </div>
      {todos.length ? (
        <div className='content'>
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            removeTodo={removeTodo}
          />
          <Footer todos={todos} removeCompletedTodos={removeCompletedTodos} />
        </div>
      ) : (
        <p>No todos!</p>
      )}
    </div>
  );
}

export default App;
