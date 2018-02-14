import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import "./TodoListSort.css";

class TodoListSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortIconTask: false,
      sortIconAction: false
    };
    this.onSortTask = this.onSortTask.bind(this);
    this.onSortAction = this.onSortAction.bind(this);
  };

  onSortTask() {
    this.setState({
      sortIconTask: !this.state.sortIconTask
    });
    this.props.sortTask(this.props.id);
  }

  onSortAction() {
    this.setState({
      sortIconAction: !this.state.sortIconAction
    });
    this.props.sortAction(this.props.id);
  }

  render() {
    return (
      <Container>
        <Row className="todo-list-sort">
          <Col md="6">
            <Button className="sort-btn"
                    color="primary"
                    onClick={this.onSortTask}
            >Sort By Task {this.state.sortIconTask ? "↑" : "↓"}
            </Button>
          </Col>

          <Col md="6">
            <Button className="sort-btn"
                    color="primary"
                    onClick={this.onSortAction}
            >Sort By Action {this.state.sortIconAction ? "↑" : "↓"}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoListSort;
