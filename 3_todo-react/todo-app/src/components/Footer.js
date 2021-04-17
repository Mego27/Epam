import React from 'react';
import { FilterButton } from './FilterButton';

export class Footer extends React.Component {
  render() {
    const { todos, filterTodos, filterTypes, currentFilterType, removeCompletedTodos } = this.props;
    const remainingTodos = todos.filter(({ done }) => !done)
      .length;
    const completedTodos = todos.filter(({ done }) => done)
      .length;

    return (
      <div className="footer">
        <div>{remainingTodos} items left</div>
        <div className="filter-buttons">
          {filterTypes.map(({value, text}) => 
            <FilterButton
              key={value}
              filterType={value}
              text={text}
              filterTodos={filterTodos}
              isDefaultCheckedButton={currentFilterType === value}
            />
          )}
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
