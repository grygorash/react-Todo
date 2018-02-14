import React, { Component } from "react";
import { Row, Col, Button, Input } from "reactstrap";
import "./TodoListItem.css";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isComplete: this.props.isComplete,
      task: this.props.task,
      prevTask: "",
      taskError: false
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
    if (this.state.isComplete === false) {
      this.setState({
        taskError: true
      });
    } else {
      this.props.deleteTask(this.props.id);
    }
  }

  onDoneClick() {
    this.props.doneTask(this.props.id);
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
        <Button color={this.state.isComplete ? "warning" : "success"}
                onClick={this.onDoneClick}
        > {this.state.isComplete ? "Not Done Task" : "Done Task"}
        </Button>
        <Button color="danger"
                onClick={this.handleDelete}
                style={this.state.taskError ? {display: "none"} : {display: "inline-block"}}
        > Delete Task
        </Button>
      </div>
    );
  }


  render() {
    return (
      <Row className="todo-list-item">
        <Col md="6" className={this.state.isComplete ? "done-task" : "not-done-task"}>
          {this.state.isEditing ?
            <Input value={this.state.task}
                   onChange={this.handleChangeInput}
            /> :
            <p><span>{this.state.date}</span>{this.state.isEditing ? this.props.task : this.state.task}</p>}
        </Col>
        <Col md="6">
          {this.renderActionSection()}
        </Col>
        <Col md="12"
             className="task-list-error"
             style={this.state.taskError ? {display: "inline-block"} : {display: "none"}}
        >
          <p>This Task Hasn't Complete Yet... Are You Sure Want To Delete It?</p>
          <Button color="warning"
                  onClick={() => {
                    this.props.deleteTask(this.props.id);
                  }}
          >Yes</Button>
          <Button color="success"
                  onClick={() => {
                    this.setState({taskError: false});
                  }}
          >No</Button>
        </Col>
      </Row>
    );
  }
}

export default TodoListItem;
