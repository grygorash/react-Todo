import React from "react";
import { Container } from "reactstrap";
import TodoListBody from "./TodoListBody/TodoListBody";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList(props) {
  return (
    <Container>
      <TodoListHeader />
      <TodoListBody todos={props.todos}
                    deleteTask={props.deleteTask}
                    doneTask={props.doneTask}
      />
    </Container>
  );
}

export default TodoList;
