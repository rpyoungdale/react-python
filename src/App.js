import React from "react";
import Hello from "./Hello";

class App extends React.Component {
  render() {
    return (
      <div className="header-contents">
        <Hello name="Ryan" />
      </div>
    );
  }
}

export default App;
