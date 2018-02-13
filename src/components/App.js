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
      nextKey: 2,
      isComplete: false
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  createTask(task) {
    let nKey = this.state.nextKey;
    this.setState({
      nextKey: ++nKey
    });

    let newTodosCreate = [
      ...this.state.todos,
      {
        id: this.state.nextKey,
        task,
        isComplete: false
      }
    ];
    this.setState({
      todos: newTodosCreate
    });
  }

  deleteTask(id) {
    let newTodosDelete = this.state.todos.filter((task) => {
      return task.id !== id;
    });
    this.setState({
      todos: newTodosDelete
    });
  }

  doneTask(id) {
    let newTodosDone = this.state.todos.map((task) => {
      if (id !== task.id) {
        return task;
      } else {
        return {
          id: task.id,
          task: task.task,
          isComplete: !task.isComplete
        };
      }
    });
    this.setState({
      todos: newTodosDone
    });
  }

  render() {
    return (
      <div>
        <h3>React App</h3>
        <TodoCreate createTask={this.createTask} />
        <TodoList todos={this.state.todos} deleteTask={this.deleteTask} doneTask={this.doneTask} />
      </div>
    );
  }
}

export default App;
