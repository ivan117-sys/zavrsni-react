import { useState } from "react";
import "./Input.css";

function Input({ usernameHandler }) {
  const [username, setUsername] = useState("");

  function userHandler(e) {
    setUsername(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault("");
    usernameHandler(username);
    setUsername("");
  }

  return (
    <div className="input__container">
      <form onSubmit={formHandler}>
        <label>Github username:</label>
        <input value={username} onChange={userHandler}></input>
        <button>Go!</button>
      </form>
    </div>
  );
}

export default Input;
