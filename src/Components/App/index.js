import "./App.css";
import WelcomePage from "../WelcomePage";
import Input from "../Input";
import Display from "../Display";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);

  if (welcome)
    return (
      <div className="main-parent-div">
        <Input />
        <Display />
      </div>
    );

  return (
    <div className="main-app">
      <WelcomePage setWelcome={setWelcome} />
      <p>
        Input and display will be hidden until welcome page has been passed.
      </p>
    </div>
  );
}

export default App;
