import React from "react";
var $ = require("jquery");

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: `Hello ${this.props.name}`
    };
  }

  randomGreeting = greeting => {
    this.setState({
      greeting: `${greeting} ${this.props.name}!`
    });
  };

  getPythonHello = () => {
    fetch("http://127.0.0.1:5000/hello")
      .then(res => res.json())
      .then(json => this.randomGreeting(json));
  };

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <hr />
        <button onClick={this.getPythonHello}>Say Hello!</button>
      </div>
    );
  }
}

export default Hello;
