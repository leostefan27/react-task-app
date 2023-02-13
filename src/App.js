import { useContext } from "react";
import AddTaskComponent from "./components/AddTaskComponent";
import TasksComponent from "./components/TasksComponent";
import { TaskContext } from "./contexts/TaskContext";

function App() {
  const taskContext = useContext(TaskContext);

  return (
    <section className="main-app">
      <div className="header">
        <h1>Your tasks...</h1>
      </div>

      <div className="container">
        <div className="add-task">
          <AddTaskComponent />
        </div>

        <div className="all-tasks">
          <TasksComponent />
        </div>
      </div>
    </section>
  );
}

export default App;
