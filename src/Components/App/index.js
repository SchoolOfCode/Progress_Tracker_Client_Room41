import "./App.css";
import WelcomePage from "../WelcomePage";
import Input from "../Input";
import Display from "../Display";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);

  if (welcome)
    return (
      <div className="parent-div">
        <Input />
        <Display />
      </div>
    );

  return (
    <div className="App">
      <WelcomePage setWelcome={setWelcome} />
      <h1>
        Input and display will be hidden until welcome page has been passed.
      </h1>
    </div>
  );
}

export default App;
