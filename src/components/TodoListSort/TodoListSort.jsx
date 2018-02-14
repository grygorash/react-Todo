import React, { Component } from "react";
import { Button } from "reactstrap";
import "./TodoListSort.css";

class TodoListSort extends Component {
  constructor(props) {
    super(props);
    this.onSortClick = this.onSortClick.bind(this);
  };

  onSortClick() {

    this.props.sortTask(this.props.id);
  }

  render() {
    return (
      <div>
        <Button className="sort-btn"
                color="primary"
                onClick={this.onSortClick}
        >Sort Tasks</Button>
      </div>
    );
  }
}

export default TodoListSort;
