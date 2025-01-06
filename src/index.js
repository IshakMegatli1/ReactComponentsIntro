import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//<Heading></Heading> : better to use a self closing tag : <Heading/>

ReactDOM.render(<App />, document.getElementById("root"));

//does not have html components, use "App" custom component
/*<div>
    <Heading />
    <List />
  </div>,*/
