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
          <button className='button'>All</button>
          <button className='button'>Activity</button>
          <button className='button'>Completed</button>
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
