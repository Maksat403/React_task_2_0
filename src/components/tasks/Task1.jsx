import React, { useState } from "react";

const Task1 = () => {
  const [task1, setTask1] = useState("");
  return (
    <div>
      <br />
      <br />
      <label>Task #1</label>
      <h1>Text: {task1}</h1>
      <input
        placeholder="Enter your text"
        type="text"
        onChange={(e) => setTask1(e.target.value)}
      />
    </div>
  );
};

export default Task1;
