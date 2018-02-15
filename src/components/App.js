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
      sortTask: false,
      sortAction: false
    };
  }

  createTask = task => {
    const newTodosCreate = [
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
    const newTodosDelete = this.state.todos.filter((task) => {
      return task.id !== id;
    });
    this.setState({
      todos: newTodosDelete
    });
  };

  doneTask = id => {
    const newTodosDone = this.state.todos.map((task) => {
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
    const newTodosSortTask = [...this.state.todos]
      .sort((a, b) => {
        if (this.state.sortTask === false) {
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
      sortTask: !this.state.sortTask
    });
  };

  sortAction = () => {
    const newTodosSortAction = [...this.state.todos]
      .sort((a, b) => {
        if (this.state.sortAction === false) {
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
      sortAction: !this.state.sortAction
    });
  };

  render() {
    const todos = this.state.todos;
    return (
      <div>
        <h3>React ToDo App</h3>
        <TodoCreate createTask={this.createTask} value={this.value} error={this.error} />
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
        />
        }
      </div>
    );
  }
}

export default App;
