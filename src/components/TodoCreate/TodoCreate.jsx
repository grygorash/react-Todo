import React, { Component } from "react";
import { Col, Button, Container, Input, Form } from "reactstrap";
import "./TodoCreate.css";

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };

  handleCreate(e) {
    e.preventDefault();

    if (this.state.value !== "") {
      this.props.createTask(this.state.value);
      this.setState({
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }

    this.setState({
      value: ""
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCreate}
              className="todo-create row"
        >
          <Col md="6">
            <Input type="text"
                   placeholder="Enter Your Task"
                   value={this.state.value}
                   onChange={this.handleChange}
            />
            <div className="error-message" style={this.state.error ? {display: 'block'} : {display: 'none'}}>Enter Task</div>
          </Col>
          <Col md="6">
            <Button type="submit" color="success">Add task</Button>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default TodoCreate;
