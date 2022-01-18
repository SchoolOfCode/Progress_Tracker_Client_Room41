import "./App.css";
import WelcomePage from "../WelcomePage";
import Input from "../Input";
import Display from "../Display";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, password);

  if (welcome)
    return (
      <div className="main-parent-div">
        <Input name={name} />
        <Display name={name} />
      </div>
    );

  // useEffect that fetched data using the 'name' to send a GET request for the correct table

  return (
    <div className="main-app">
      <WelcomePage
        setWelcome={setWelcome}
        setName={setName}
        setPassword={setPassword}
      />
      <p>Input and display hidden until welcome page passed.</p>
    </div>
  );
}

export default App;
