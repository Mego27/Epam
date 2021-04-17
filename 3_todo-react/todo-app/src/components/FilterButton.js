import React from 'react';

export class FilterButton extends React.Component {
  render() {
    const {filterType, text, isDefaultCheckedButton, filterTodos} = this.props;

    return (
      <label>
        <input
            type="radio"
            name="filter-todo"
            value={filterType}
            className="button"
            onChange={({ target }) => filterTodos(target.value)}
            defaultChecked={isDefaultCheckedButton}
        />
        <span>{text}</span>
      </label>
    )
  }
}