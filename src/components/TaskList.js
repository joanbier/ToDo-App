import React from "react";
import Task from "./Task";

const TaskList = props => {
  const activeTasks = props.tasks.filter(item => item.active);
  const doneTasks = props.tasks.filter(item => !item.active);

  doneTasks.sort((a, b) => b.finishDate - a.finishDate);
  activeTasks.sort((a, b) => a.text.localeCompare(b.text));
  activeTasks.sort((a, b) => b.important - a.important);

  const activeTaskList = activeTasks.map(item => (
    <Task
      delete={props.delete}
      change={props.change}
      key={item.id}
      task={item}
    ></Task>
  ));

  const doneTaskList = doneTasks.map(item => (
    <Task
      delete={props.delete}
      change={props.change}
      key={item.id}
      task={item}
    ></Task>
  ));
  return (
    <div className="tasks-wrapper">
      <div>
        <h2>Tasks ToDo</h2>
        <div>
          {activeTaskList.length > 0 ? (
            activeTaskList
          ) : (
            <span className="nothing">There is nothing to do &#128526;</span>
          )}
        </div>
      </div>

      <hr />

      <div className="done">
        {doneTaskList.length > 0 && (
          <h2>Well done! ({doneTaskList.length}) </h2>
        )}
        {doneTaskList.length >= 5 && <span>The latest 5 tasks:</span>}
        <h3>{doneTaskList.slice(0, 5)}</h3>
      </div>
    </div>
  );
};

export default TaskList;
