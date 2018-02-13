import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import TodoListItem from "./TodoListItem/TodoListItem";

import "./TodoListBody.css";

class TodoListBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  renderItems() {
    let tasks = this.props.todos;
    return (
      tasks.map((todo) => <TodoListItem
          key={todo.id}
          id={todo.id}
          {...todo}
          todos={this.props.todos}
          deleteTask={this.props.deleteTask}
          doneTask={this.props.doneTask}
        />
      )
    );
  }

  renderEmpty() {
    if (this.props.todos.length === 0) return <div>There Is No Task Here</div>;
  }


  render() {
    return (
      <Row className="todo-list-body">
        <Col md="12">
          {this.renderItems()}
          {this.renderEmpty()}
        </Col>
      </Row>
    );
  }
}

export default TodoListBody;
