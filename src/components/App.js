import React, { Component } from "react";
import "./styles/App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasks from "../constants/initialTasks";

class App extends Component {
  state = {
    tasks
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks]; // lub Aray.from(this.state.tasks)
    tasks = tasks.filter(item => item.id !== id);
    // lub const index = tasks.findIndex(item => item.id === id);
    // tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(item => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = obj => {
    this.setState({
      tasks: this.state.tasks.concat(obj)
    });
  };

  render() {
    return (
      <div className="App">
        <AddTask addTask={this.addTask} />
        <TaskList
          delete={this.deleteTask}
          change={this.changeTaskStatus}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
