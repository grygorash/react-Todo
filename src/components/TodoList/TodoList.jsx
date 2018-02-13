import React, { Component } from "react";
import { Container } from "reactstrap";
import TodoListBody from "./TodoListBody/TodoListBody";

import TodoListHeader from "./TodoListHeader/TodoListHeader";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <Container>
        <TodoListHeader />
        <TodoListBody todos={this.props.todos}
                      deleteTask={this.props.deleteTask}
                      doneTask={this.props.doneTask}
        />
      </Container>
    );
  }
}

export default TodoList;
