import React from 'react';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  submitHandler(event) {
    event.preventDefault();

    if (this.state.value.trim()) {
      this.props.onCreate(this.state.value);
    }
  }

  render() {
    return (
      <form
        className='form-add-todo'
        onSubmit={(event) => this.submitHandler(event)}
      >
        <input
          className='input-title-todo'
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
          placeholder='Whats need to be done?'
        />
        <button className='add-todo-button' type='submit'>
          <svg width='25' viewBox='0 0 448 512'>
            <path d='M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z' />
          </svg>
        </button>
      </form>
    );
  }
}
