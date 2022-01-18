import "./App.css";
import WelcomePage from "../WelcomePage";
import Input from "../Input";
import Display from "../Display";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);
  const [name, setName] = useState("Username");

  if (welcome)
    return (
      <div className="main-parent-div">
        <Input />
        <Display />
      </div>
    );

  // useEffect that fetched data using the 'name' to send a GET request for the correct table

  return (
    <div className="main-app">
      <WelcomePage setWelcome={setWelcome} setName={setName} />
      <p>
        Input and display will be hidden until welcome page has been passed.
      </p>
    </div>
  );
}

export default App;
