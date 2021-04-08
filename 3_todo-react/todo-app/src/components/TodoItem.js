import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  changeInstanceTodo() {
    const { isEditing } = this.state;

    this.setState({ isEditing: !isEditing });
  }

  render() {
    const { title, done, onChange, removeTodo, onEdit } = this.props;
    const { isEditing } = this.state;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          className="todo-done"
          checked={done}
          onChange={onChange}
        />
        {isEditing ? (
          <input
            className="todo-editing-title"
            defaultValue={title}
            onChange={(event) => onEdit(event.target.value)}
            onBlur={() => this.changeInstanceTodo()}
          />
        ) : (
          <span
            onDoubleClick={() => this.changeInstanceTodo()}
            className={done ? "done" : ""}
          >
            {title}
          </span>
        )}
        <button className="remove-button" onClick={removeTodo}>
          <b>X</b>
        </button>
      </li>
    );
  }
}
