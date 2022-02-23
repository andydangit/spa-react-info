import React from "react";
import "./Main.css";

function Main() {
  return (
    <main>
      <h1 className="mainHeading">Facts about React</h1>
      <ul className="reactFacts">
        <li> React is not a framework </li>
        <li> Has a strong community </li>
        <li> Was first released in 2013</li>
        <li> Has well over 100k stars on GitHub</li>
        <li> virtual DOM is faster than real DOM</li>
        <li> React development and SEO go together</li>
      </ul>
    </main>
  );
}

export default Main;
