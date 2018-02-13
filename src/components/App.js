import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";

import "./App.css";

const todos = [
  {
    id: 0,
    task: "learn React",
    isComplete: false
  },
  {
    id: 1,
    task: "eat dinner",
    isComplete: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      nextKey: 2
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  createTask(task) {
    let nKey = this.state.nextKey;
    this.setState({
      nextKey: ++nKey
    });

    let newTodos = [
      ...this.state.todos,
      {
        id: this.state.nextKey,
        task,
        isComplete: false
      }
    ];
    this.setState({
      todos: newTodos
    });
  }

  deleteTask(id) {
    let newTodos = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <h3>React App</h3>
        <TodoCreate createTask={this.createTask} />
        <TodoList todos={this.state.todos} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
