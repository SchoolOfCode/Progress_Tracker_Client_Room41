import "./App.css";
import WelcomePage from "../WelcomePage";
import Input from "../Input";
import Display from "../Display";

function App() {
  //
  return (
    <div className="App">
      <WelcomePage />
      <h1>
        Input and display will be hidden until welcome page has been passed.
      </h1>
      <Input />
      <Display />
    </div>
  );
}

export default App;
