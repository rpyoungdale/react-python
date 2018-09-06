import React from "react";
// var $ = require("jquery");

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: `Hello ${this.props.name}`,
      language: "",
      word: ""
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

  handleChange = e => {
    // debugger;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    fetch("http://127.0.0.1:5000/create", {
      method: "POST",
      body: JSON.stringify({
        language: this.state.language,
        word: this.state.word
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res));
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <hr />
        <button onClick={this.getPythonHello}>Say Hello!</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="language"
            placeholder="language"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="word"
            placeholder="word"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Hello;
