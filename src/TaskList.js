import React from "react";

const TaskList = ({ tasks, removeTask }) => {
  const handleClick = task => {
    removeTask(task);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task} onClick={() => handleClick(task)}>
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
