import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  changeInstanceTodo(title) {
    const { isEditing } = this.state;
    const inputTodo = document.querySelectorAll('.input-todo')[0];
    const spanTodo = document.querySelectorAll('li span')[0];

    this.setState({ isEditing: !isEditing });

    if (isEditing) {
      spanTodo.classList.add('hidden');
      inputTodo.classList.remove('hidden');
      inputTodo.focus();
    } else {
      spanTodo.classList.remove('hidden');
      inputTodo.classList.add('hidden');
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
          onBlur={(title) => this.changeInstanceTodo(title)}
        />
        <span
          onDoubleClick={(title) => this.changeInstanceTodo(title)}
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
