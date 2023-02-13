import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskComponent = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();

  const taskContext = useContext(TaskContext);
  const addTask = (e) => {
    e.preventDefault();

    if (title && date) {
      taskContext.addTask(uuidv4, title, date);
    } else {
      alert('Please complete all the fields!');
    }
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your task title..."
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <input type="submit" value="Add Task" />
      </form>
    </>
  );
};

export default AddTaskComponent;
