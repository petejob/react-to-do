import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskAdder from "./TaskAdder";

class App extends Component {
  state = {
    tasks: [
      "listen to johnny",
      "type out the program",
      "learn more about react"
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My tasks</h1>
        <TaskAdder addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }

  addTask = newTask => {
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  removeTask = taskToRemove => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task !== taskToRemove)
      };
    });
    console.log(this.state.tasks);
  };
}

export default App;
