import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const TaskComponent = (props) => {
  const task = props.task;
  const deleteTask = () => {
    props.delete(task.id);
  } 

  return (
    <div className="task">
      <span>
        <FontAwesomeIcon icon={faXmark} onClick={deleteTask}/>
      </span>
      <h3>{task.title}</h3>
      <p>{`for ${task.date}`}</p>
    </div>
  );
};

export default TaskComponent;
