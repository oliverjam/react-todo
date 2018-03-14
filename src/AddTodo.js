import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
    description: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const newTodo = {
      title,
      description,
      date: new Date(),
      owner: this.props.username,
      done: false,
    };
    this.props.updateTodos(newTodo);
    this.setState({ title: '', description: '' });
  };
  render() {
    return (
      <section className="add-todos">
        <h1 className="page-title">
          To-do App{' '}
          <span role="img" aria-label="Checkmark logo">
            ✅
          </span>
        </h1>
        <h2>Add to-do</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="todo-title" className="form__label">
            Title
            <input
              id="todo-title"
              name="title"
              type="text"
              className="form__input"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <label htmlFor="todo-description" className="form__label">
            Description
            <input
              id="todo-description"
              name="description"
              type="text"
              className="form__input"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </label>
          <button type="submit" className="form__btn">
            Add to-do +
          </button>
        </form>
      </section>
    );
  }
}

export default AddTodo;
