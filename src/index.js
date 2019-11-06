import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./create_sigle_todo";

import "./styles.css";

let ids = 0;

class App extends Component {
  state = {
    todos: [],
    value: ""
  };
  handleInput = event => {
    this.setState({ value: event.target.value });
  };

  toggleCheckbox = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  };

  onAddTodo = singleTodo => {
    if (singleTodo === "") {
      const text = prompt("Please add some task first");
      return this.setState({
        todos: [
          ...this.state.todos,
          { id: `${text}${ids++}`, text: text, checked: false }
        ]
      });
    }
    this.setState({
      todos: [
        ...this.state.todos,
        { id: `${this.sigleTodo}${ids++}`, text: singleTodo, checked: false }
      ]
    });
  };

  removeTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <div> To do task: {this.state.todos.length}</div>
        <div>Done: {this.state.todos.filter(todo => todo.checked).length}</div>
        <input
          onChange={this.handleInput}
          type="text"
          placeholder="Write some task"
        />
        {console.log(this.state.todos)}
        <button onClick={_ => this.onAddTodo(this.state.value)}>
          Add todo
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              isChecked={() => {
                this.toggleCheckbox(todo.id);
              }}
              removeTodo={() => this.removeTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
