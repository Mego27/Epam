import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  changeInstanceTodo({ currentTarget }) {
    const { isEditing } = this.state;

    this.setState({ isEditing: !isEditing });

    if (isEditing) {
      currentTarget.classList.add('hidden');
      currentTarget.nextSibling.classList.remove('hidden');
      currentTarget.nextSibling.focus();
    } else {
      currentTarget.previousSibling.classList.remove('hidden');
      currentTarget.classList.add('hidden');
    }
  }

  render() {
    const { title, done, onChange, removeTodo, editTodoItem } = this.props;

    return (
      <li className='todo-item'>
        <input
          type='checkbox'
          className='input-checkbox'
          checked={done}
          onChange={onChange}
        />
        <input
          className='input-todo hidden'
          defaultValue={title}
          onChange={(event) => editTodoItem(event.target.value)}
          onBlur={(event) => this.changeInstanceTodo(event)}
        />
        <span
          onDoubleClick={(event) => this.changeInstanceTodo(event)}
          className={done ? 'done' : ''}
        >
          {title}
        </span>
        <button className='remove-button' onClick={removeTodo}>
          <b>X</b>
        </button>
      </li>
    );
  }
}
