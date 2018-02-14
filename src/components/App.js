import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreate from "./TodoCreate/TodoCreate";
import TodoListSort from "./TodoListSort/TodoListSort";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      sort: false
    };
  }

  createTask = task => {
    let newTodosCreate = [
      ...this.state.todos,
      {
        id: +new Date(),
        task,
        isComplete: false
      }
    ];
    this.setState({
      todos: newTodosCreate
    });
  };

  deleteTask = id => {
    let newTodosDelete = this.state.todos.filter((task) => {
      return task.id !== id;
    });
    this.setState({
      todos: newTodosDelete
    });
  };

  doneTask = id => {
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
  };

  sortTask = () => {
    let newTodosSortTask = [...this.state.todos]
      .sort((a, b) => {
        if (this.state.sort === false) {
          return a.task > b.task;
        } else {
          return a.task < b.task;
        }
      }).map(task => {
        return {
          id: task.id,
          task: task.task,
          isComplete: task.isComplete
        };
      });
    this.setState({
      todos: newTodosSortTask,
      sort: !this.state.sort
    });
  };

  sortAction = () => {
    let newTodosSortAction = [...this.state.todos]
      .sort((a, b) => {
        if (this.state.sort === false) {
          return a.isComplete > b.isComplete;
        } else {
          return a.isComplete < b.isComplete;
        }
      }).map(task => {
        return {
          id: task.id,
          task: task.task,
          isComplete: task.isComplete
        };
      });
    this.setState({
      todos: newTodosSortAction,
      sort: !this.state.sort
    });
  };


  render() {
    const todos = this.state.todos;
    return (
      <div>
        <h3>React ToDo App</h3>
        <TodoCreate createTask={this.createTask} />
        <TodoList
          todos={todos}
          deleteTask={this.deleteTask}
          doneTask={this.doneTask}
        />
        {todos.length > 1 &&
        <TodoListSort
          sortAction={this.sortAction}
          sortTask={this.sortTask}
          todos={todos}
        />}
      </div>
    );
  }
}

export default App;
