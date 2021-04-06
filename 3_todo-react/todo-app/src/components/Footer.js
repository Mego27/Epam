import React from 'react';

export class Footer extends React.Component {
  render() {
    const remainingTodos = this.props.todos.filter(({ done }) => done === false)
      .length;
    const completedTodos = this.props.todos.filter(({ done }) => done === true)
      .length;

    let isDisabledClearButton = false;

    if (completedTodos === 0) {
      isDisabledClearButton = true;
    }

    return (
      <div className='footer'>
        <div>{remainingTodos} items left</div>
        <div className='filter-buttons'>
          <label>
            <input
              type='radio'
              name='filter-todo'
              value='all'
              className='button'
              onChange={(event) => this.props.filterTodos(event.target.value)}
              defaultChecked
            />
            <span>All</span>
          </label>
          <label>
            <input
              type='radio'
              name='filter-todo'
              value='activity'
              className='button'
              onChange={(event) => this.props.filterTodos(event.target.value)}
            />
            <span>Activity</span>
          </label>
          <label>
            <input
              type='radio'
              name='filter-todo'
              value='completed'
              className='button'
              onChange={(event) => this.props.filterTodos(event.target.value)}
            />
            <span>Completed</span>
          </label>
        </div>
        <button
          className='button'
          onClick={this.props.removeCompletedTodos}
          disabled={isDisabledClearButton}
        >
          Clear completed
        </button>
      </div>
    );
  }
}
