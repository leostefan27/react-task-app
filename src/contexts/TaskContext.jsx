import { createContext, useState } from "react";

export const TaskContext = createContext({
  tasks: null,
  addTask: {},
  removeTask: {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: "123",
      title: "Do the dishes",
      date: "2022-02-12",
    },
  ]);

  const addTask = (id, title, date) => {
    return setTasks((prev) => [...prev, { id, title, date }]);
  };

  const removeTask = (id) => {
    setTasks((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const contextValue = {
    tasks: tasks,
    addTask,
    removeTask,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
