import React from "react";
import Hello from "./Hello";

const baseURL = "http://127.0.0.1:5000";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(`${baseURL}/users`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          users: json
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="header-contents">
        <Hello name="Ryan" />
      </div>
    );
  }
}

export default App;
