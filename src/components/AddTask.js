import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    important: false,
    date: this.minDate
  };

  handleChangeInput = e => {
    if (e.target.type === "text" || e.target.type === "date") {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    if (e.target.type === "checkbox") {
      this.setState({
        important: !this.state.important
      });
    }
  };

  handleClick = () => {
    const { text, important, date } = this.state;
    if (text.length >= 2) {
      const obj = {
        id: Date.now().toString(32),
        text,
        important,
        date,
        active: true,
        finishDate: null
      };
      this.props.addTask(obj);
      this.setState({
        text: "",
        important: false,
        date: this.minDate
      });
    } else {
      alert("At least 2 characters are required");
    }
  };

  render() {
    const maxDate = Number(this.minDate.slice(0, 4)) + 1 + "-12-31";
    return (
      <div className="form">
        <h2>What's the Plan for Today?</h2>
        <label htmlFor="text">Task: </label>
        <input
          type="text"
          name="text"
          placeholder="e.g. make the bed"
          id="task-text"
          value={this.state.text}
          onChange={this.handleChangeInput}
        />

        <label className="priority-checkbox">
          Priority:
          <input
            type="checkbox"
            name="important"
            id="important"
            checked={this.state.important}
            onChange={this.handleChangeInput}
          />
        </label>

        <label htmlFor="date">Deadline: </label>
        <input
          type="date"
          name="date"
          id="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleChangeInput}
        />

        <button onClick={this.handleClick}>Add ToDo</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
