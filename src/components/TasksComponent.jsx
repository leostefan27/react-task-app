import React from "react";
import TaskComponent from "./TaskComponent";
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from "react";

const TasksComponent = (props) => {
  const taskContext = useContext(TaskContext);
  const tasks = taskContext.tasks;
  return (
    <>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => {
            return (
              <TaskComponent
                key={task.id}
                task={task}
                delete={taskContext.removeTask}
              />
            );
          })}
        </>
      ) : <h2>You don't have any tasks yet!</h2>}
    </>
  );
};

export default TasksComponent;
