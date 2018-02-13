import React, { Component } from "react";
import { Row, Col, Button, Input } from "reactstrap";
import "./TodoListItem.css";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: this.props.isComplete,
      task: this.props.task,
      prevTask: ""
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onDoneClick = this.onDoneClick.bind(this);
  };

  onEditClick() {
    this.setState({
      isEditing: true,
      prevTask: this.state.task
    });
  }

  onSaveClick() {
    this.setState({
      isEditing: false
    });
  }

  onCancelClick() {
    this.setState({
      isEditing: false,
      task: this.state.prevTask
    });
  }

  handleDelete() {
    this.props.deleteTask(this.props.id);
  }

  onDoneClick() {
    this.setState({
      isComplete: !this.state.isComplete
    });
  }

  handleChangeInput(e) {
    this.setState({
      task: e.target.value
    });
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <div>
          <Button color="success"
                  onClick={this.onSaveClick}
          > Save Task </Button>
          <Button color="warning"
                  onClick={this.onCancelClick}
          > Cancel Editing </Button>
        </div>
      );
    }
    return (
      <div>
        <Button color="primary"
                onClick={this.onEditClick}
                style={this.state.isComplete ? {display: "none"} : {display: "inline-block"}}
        > Edit Task
        </Button>
        <Button color="danger"
                onClick={this.handleDelete}
        > Delete Task
        </Button>
        <Button color={this.state.isComplete ? "warning" : "success"}
                onClick={this.onDoneClick}
        > {this.state.isComplete ? "Not Done Task" : "Done Task"}
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Row className="todo-list-item">
        <Col md="6" className={this.state.isComplete ? "done-task" : "not-done-task"}>{this.state.isEditing ?
          <Input value={this.state.task}
                 onChange={this.handleChangeInput}
          /> :
          <p>{this.state.isEditing ? this.props.task : this.state.task}</p>}
        </Col>
        <Col md="6">
          {this.renderActionSection()}
        </Col>
      </Row>
    );
  }
}

export default TodoListItem;
