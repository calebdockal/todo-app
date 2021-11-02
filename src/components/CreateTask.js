import React, { useState } from "react";
import "./Todo.css";

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreateTask;
