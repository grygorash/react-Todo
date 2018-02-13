import React from "react";
import { Row, Col } from "reactstrap";

import './TodoListHeader.css'

function TodoListHeader() {
  return (
    <Row className="todo-list-header">
      <Col md="6">
        Task
      </Col>
      <Col md="6">
        Action
      </Col>
    </Row>
  );
}

export default TodoListHeader;
