import React, { useContext } from 'react';
import Context from '../context';

export class TodoItem extends React.Component {
  // constructor({ todo, onChange }) {
  //   super();
  //   this.state.todo = todo;
  //   this.state.onChange = onChange;
  // }
  render() {
    // const { removeTodo } = useContext(Context);

    return (
      <li className='todo-item'>
        <input
          type='checkbox'
          className='input-checkbox'
          checked={this.props.todo.done}
          onChange={() => this.props.onChange(this.props.todo.id)}
        />
        <span className={this.props.todo.done ? 'done' : ''}>
          {this.props.todo.title}
        </span>
        <button
          className='remove-button'
          onClick={this.props.removeTodo.bind(null, this.props.todo.id)}
        >
          <b>X</b>
        </button>
      </li>
    );
  }
}
