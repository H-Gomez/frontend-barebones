import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>App rendered correctly.</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));

