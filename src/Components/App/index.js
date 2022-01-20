import { useEffect, useState } from "react";
import Display from "../Display";
import Input from "../Input";
import WelcomePage from "../WelcomePage";

import "./App.css";
const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

//! check deployment branch is upstream

function App() {
  const [welcome, setWelcome] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userTable, setUsertable] = useState({});
  console.log(name, password);

  useEffect(() => {
    async function fetchUserTable() {
      try {
        const response = await fetch(`${url}/user`);
        const data = await response.json();
        console.log("user table data: ", data);
        setUsertable(data);
        // console.log('userTable from APP: ', userTable)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUserTable();
  }, []);

  // async function getAllStats() {
  // 	const response = await fetch(`${url}/progress`)
  // 	const data = await response.json()
  // 	console.log('allstats: ', data)
  // }
  // getAllStats()
  if (welcome)
    return (
      <div className="main-parent-div">
        <Input userTable={userTable} name={name} />
        <Display userTable={userTable} name={name} />
      </div>
    );

  // useEffect that fetched data using the 'name' to send a GET request for the correct table

  return (
    <div className="main-app">
      <h1 className="welcome-header">Hey there, Camper!</h1>
      <WelcomePage
        setWelcome={setWelcome}
        setName={setName}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
