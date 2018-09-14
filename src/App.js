import React from "react";
import Hello from "./Hello";
import SelectUser from "./SelectUser";

const baseURL = "http://127.0.0.1:5000";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenUser: false,
      currentUser: "",
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

  updateUser = e => {
    this.setState({
      currentUser: e.target.innerText,
      chosenUser: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="header-contents">
        {this.state.chosenUser ? (
          <Hello name={this.state.currentUser} />
        ) : (
          <SelectUser users={this.state.users} updateUser={this.updateUser} />
        )}
      </div>
    );
  }
}

export default App;
