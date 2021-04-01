import React from 'react';
import TodoList from './todo-components/TodoList';
import AddTodo from './todo-components/AddTodo';
import { ChangeAllTodos } from './todo-components/ChangeAllTodo';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'Create react app', done: false },
    { id: 2, title: 'Push to Git', done: true },
    { id: 3, title: 'Meeting in Microsoft Teams at 19:00', done: false },
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

  function changeAllTodos() {
    setTodos(todos.map(({ done }) => (done = !done)));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='todo'>
        <h1>Todo app</h1>
        <div className='top-panel'>
          <ChangeAllTodos changeAllTodos={changeAllTodos} />
          <AddTodo onCreate={addTodo} />
        </div>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
