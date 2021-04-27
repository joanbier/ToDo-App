import React from "react";
import "./Task.css";

const Task = props => {
  const { text, date, important, id, active, finishDate } = props.task;
  if (active) {
    return (
      <div className="task-wrapper">
        <strong style={important ? { color: "gold" } : null}>{text} </strong>{" "}
        <span className="date">until: {date}</span>{" "}
        <button onClick={() => props.change(id)}>
          <i className="fas fa-check-circle"></i>
        </button>
        <button onClick={() => props.delete(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  } else {
    const time = new Date(finishDate).toLocaleString();
    return (
      <div className="task-wrapper">
        <strong>{text} </strong>
        <span className="date">when: {time}</span>{" "}
        <button onClick={() => props.delete(id)}>
          <i className="fas fa-times-circle"></i>
        </button>
      </div>
    );
  }
};

export default Task;
