import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";
import TodoListSort from "./TodoListSort/TodoListSort";

import "./App.css";

const todos = [
  // {
  //   id: 0,
  //   task: "learn React",
  //   isComplete: false
  // },
  // {
  //   id: 1,
  //   task: "eat dinner",
  //   isComplete: true
  // }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      nextKey: 0,
      // isComplete: false,
      sort: false
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.sortTask = this.sortTask.bind(this);
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

  sortTask() {
    if (this.state.sort === false) {
      let newTodosSort = [].concat(this.state.todos)
        .sort((a, b) => a.task > b.task)
        .map(task => {
          return {
            id: task.id,
            task: task.task,
            isComplete: task.isComplete
          };
        });
      this.setState({
        todos: newTodosSort,
        sort: !this.state.sort
      });
    } else {
      let newTodosSort = [].concat(this.state.todos)
        .sort((a, b) => a.task < b.task)
        .map(task => {
          return {
            id: task.id,
            task: task.task,
            isComplete: task.isComplete
          };
        });
      this.setState({
        todos: newTodosSort,
        sort: !this.state.sort
      });
    }
  }

  renderEmpty() {
    if (this.state.todos.length > 1)
      return <TodoListSort
        sortTask={this.sortTask}
        todos={this.state.todos}
      />;
  }

  render() {
    return (
      <div>
        <h3>React ToDo App</h3>
        <TodoCreate createTask={this.createTask} />
        <TodoList
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          doneTask={this.doneTask}
        />
        {this.renderEmpty()}
      </div>
    );
  }
}

export default App;
