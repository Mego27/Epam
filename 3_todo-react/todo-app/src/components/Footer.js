import React from 'react';

export class Footer extends React.Component {
  render() {
    const { todos, filterTodos, removeCompletedTodos } = this.props;
    const remainingTodos = todos.filter(({ done }) => !done)
      .length;
    const completedTodos = todos.filter(({ done }) => done)
      .length;

    return (
      <div className="footer">
        <div>{remainingTodos} items left</div>
        <div className="filter-buttons">
          <label>
            <input
              type="radio"
              name="filter-todo"
              value="all"
              className="button"
              onChange={({ target }) => filterTodos(target.value)}
              defaultChecked
            />
            <span>All</span>
          </label>
          <label>
            <input
              type="radio"
              name="filter-todo"
              value="activity"
              className="button"
              onChange={({ target }) => filterTodos(target.value)}
            />
            <span>Activity</span>
          </label>
          <label>
            <input
              type="radio"
              name="filter-todo"
              value="completed"
              className="button"
              onChange={({ target }) => filterTodos(target.value)}
            />
            <span>Completed</span>
          </label>
        </div>
        <button
          className="button"
          onClick={removeCompletedTodos}
          disabled={completedTodos === 0}
        >
          Clear completed
        </button>
      </div>
    );
  }
}
