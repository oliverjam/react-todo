import React, { Fragment } from "react";
import Component from "@reactions/component";

import AddTodo from "./AddTodo";

const initialState = {
  newTodo: "",
  todos: [
    {
      title: "Do a thing",
      description: "Plz do the thing",
      date: new Date(),
      owner: "Oliver",
      done: false
    }
  ],
  username: "Oliver"
};
const updateTodos = setState => newTodo =>
  setState(state => ({ todos: [...state.todos, newTodo] }));

const App = () => (
  <Component initialState={initialState}>
    {({ setState, state: { todos, username } }) => (
      <Fragment>
        <header className="header">
          <span className="header__title">
            To-do{" "}
            <span role="img" aria-label="Checkmark logo">
              ☑️
            </span>
          </span>
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
          <AddTodo updateTodos={updateTodos(setState)} username={username} />
          <section className="todos">
            <h2>Your to-dos</h2>
            <ul className="todos__grid">
              {todos.map(todo => (
                <li
                  key={todo.date}
                  className={`todo${todo.done ? " todo--done" : ""}`}
                >
                  <div className="todo__body">
                    <header className="todo__header">
                      <h3 className="todo__title">{todo.title}</h3>
                      <div className="todo__btns">
                        <button
                          onClick={() =>
                            setState(state => ({
                              todos: state.todos.map(
                                x =>
                                  x.date === todo.date
                                    ? { ...x, done: !x.done }
                                    : x
                              )
                            }))
                          }
                          className="todo__btn todo__btn--done"
                          aria-label="Mark to-do as done"
                        >
                          ✔︎
                        </button>
                        <button
                          onClick={() =>
                            setState(state => ({
                              todos: state.todos.filter(
                                x => x.date !== todo.date
                              )
                            }))
                          }
                          className="todo__btn todo__btn--delete"
                          aria-label="Delete to-do"
                        >
                          ✖
                        </button>
                      </div>
                    </header>
                    <p className="todo__description">{todo.description}</p>
                  </div>
                  <footer className="todo__footer">
                    <time className="todo__date" dateTime={todo.date}>
                      {todo.date.toLocaleDateString("en-gb", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
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
    )}
  </Component>
);

export default App;
