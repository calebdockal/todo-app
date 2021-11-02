import React from "react";
import CreateTask from "./CreateTask";
import "./Todo.css";
import { useEffect, useState } from "react";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{
        textDecoration: task.completed ? "line-through" : "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {task.title}

      <button className="complete-btn" onClick={() => completeTask(index)}>
        Complete
      </button>
      <button
        style={{
          background: "red",
          border: "none",
          width: "50px",
        }}
        onClick={() => removeTask(index)}
      >
        X
      </button>
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);
  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-main">
      <div className="todo-header">Pending tasks ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}
export default Todo;
