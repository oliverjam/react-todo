import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    newTodo: '',
    todos: [
      {
        title: 'Do a thing',
        description: 'Plz do the thing',
        date: new Date(),
        owner: 'Oliver',
      },
      {
        title: 'Do a thing',
        description: 'Plz do the thing',
        date: new Date(),
        owner: 'Oliver',
      },
      {
        title: 'Do a thing',
        description: 'Plz do the thing',
        date: new Date(),
        owner: 'Oliver',
      },
      {
        title: 'Do a thing',
        description: 'Plz do the thing',
        date: new Date(),
        owner: 'Oliver',
      },
    ],
    loggedIn: false,
    username: 'Oliver',
  };
  updateTodos = newTodo =>
    this.setState({ todos: [...this.state.todos, newTodo] });
  removeTodo = id => () => {
    const todos = this.state.todos.filter(todo => todo.date !== id);
    this.setState({ todos });
  };
  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <header className="header">
          <span className="header__title">To-do</span>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a className="header__link" href="#home">
                  Home
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#todos">
                  Todos
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#login">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <h1 className="page-title">Your to-dos</h1> */}
        <main className="main">
          <AddTodo
            updateTodos={this.updateTodos}
            username={this.state.username}
          />
          <section className="todos">
            <h2>Your to-dos</h2>
            <ul className="todos__grid">
              {todos.map(todo => (
                <li key={todo.date} className="todo">
                  <div className="todo__body">
                    <header className="todo__header">
                      <h2 className="todo__title">{todo.title}</h2>
                      <button
                        onClick={this.removeTodo(todo.date)}
                        className="todo__btn"
                        aria-label="Delete to-do"
                      >
                        ✖
                      </button>
                    </header>
                    <p className="todo__description">{todo.description}</p>
                  </div>
                  <footer className="todo__footer">
                    <time className="todo__date" dateTime={todo.date}>
                      {todo.date.toLocaleDateString('en-gb', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </time>
                    <span className="todo__owner">{todo.owner}</span>
                  </footer>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
