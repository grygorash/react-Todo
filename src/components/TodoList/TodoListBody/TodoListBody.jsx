import React from "react";
import { Row, Col } from "reactstrap";

import TodoListItem from "./TodoListItem/TodoListItem";

import "./TodoListBody.css";

function TodoListBody(props) {

  return (
    <Row className="todo-list-body">
      <Col md="12">
        {props.todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            {...todo}
            deleteTask={props.deleteTask}
            doneTask={props.doneTask}
          />
        ))}
        {props.todos.length === 0 && <div>There Is No Task Here</div>}
      </Col>
    </Row>
  );
}

export default TodoListBody;

