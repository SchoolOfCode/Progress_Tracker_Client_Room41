import * as React from "react";
import "./styles.css";

function LinksByTopics() {
  return (
    <div className="Links-list">
      <h1>List of useful links</h1>
      <li1>
        <Link href="https://agilemanifesto.org/">Agile</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          JavaScript
        </Link>
        <Link href="reactjs.org">React</Link>
        <Link href="https://nodejs.org/en/">Node.js</Link>
        <Link href="https://developer.mozilla.org/en-US/">
          Developers Docs MDN
        </Link>
        <Link href="https://www.codewars.com/">Problem Solving</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Glossary/REST">
          RESTful APIs
        </Link>
        <Link href="https://www.w3schools.com/sql/sql_intro.asp">SQL</Link>
        <Link href="https://www.freecodecamp.org/">FreeCodeCamp</Link>
        <Link href="https://github.com/">GitHub</Link>
      </li1>
    </div>
  );
}

export default LinksByTopics;
