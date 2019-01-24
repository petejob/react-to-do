import React from "react";

class TaskAdder extends React.Component {
  state = {
    newTask: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.newTask} />
        <button type="submit">Add new task now</button>
      </form>
    );
  }

  handleChange = event => {
    const updatedTask = event.target.value;
    this.setState({
      newTask: updatedTask
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: ""
    });
  };
}
export default TaskAdder;
