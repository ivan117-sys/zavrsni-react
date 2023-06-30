import "./App.css";
import Input from "./components/Input";
import Ispis from "./components/Ispis";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const usernameHandler = function (username) {
    setUsername(username);
  };

  return (
    <div className="App">
      <Input usernameHandler={usernameHandler} />
      <Ispis username={username} />
    </div>
  );
}

export default App;
