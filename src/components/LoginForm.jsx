import React, { useState } from "react";

const LoginForm = ({ handleSubmit }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ userName, userPassword });
    setUserName("");
    setUserPassword("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username: </label>
          <input
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            value={userPassword}
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
