import React from "react";
import ReactDOM from "react-dom";
import Auxcomp from "../src/hoc/auxcomp";
import Adjuster from "../src/container/adjuster";

function App() {
  return (
    <Auxcomp>
      <Adjuster />
    </Auxcomp>
  );
}

export default App;
