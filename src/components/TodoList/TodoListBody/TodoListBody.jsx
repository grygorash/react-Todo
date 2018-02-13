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
      tasks.map((todo) => <TodoListItem key={todo.id}
                                        id={todo.id}
                                        {...todo}
                                        todos={this.props.todos}
                                        deleteTask={this.props.deleteTask}
        />
      )
    );
  }


  render() {
    return (
      <Row className="todo-list-body">
        <Col md="12">
          {this.renderItems()}
        </Col>
      </Row>
    );
  }
}

export default TodoListBody;
