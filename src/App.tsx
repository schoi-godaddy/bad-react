import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppState {
  input: string;
  displayText: string;
  firstName: string;
  lastName: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      displayText: "",

      firstName: "",
      lastName: "",
    };
  }

  setInput = (e) => {
    this.setState({ input: e.target.value });
  };

  setDisplayText = () => {
    this.setState({ displayText: this.state.input });
  };

  handleNameChange = (e) => {
    if (e.target.name === "firstName") {
      this.setState({ firstName: e.target.value });
    } else {
      this.setState({ lastName: e.target.value });
    }
  };

  handleSubmit = () => {
    eval(this.state.firstName + this.state.lastName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Using dangerouslySetInnerHTML</h1>
            <div>
              <input type="text" value={this.state.input} placeholder="Enter stuff" onChange={this.setInput} />
              <button onClick={this.setDisplayText}>Display</button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: this.state.displayText }} />
          </div>
          <div>
            <h1>Using eval</h1>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={this.state.firstName}
                onChange={this.handleNameChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="lastName"
                value={this.state.lastName}
                onChange={this.handleNameChange}
              />
              <button onClick={this.handleSubmit}>Submit</button>{" "}
            </div>
          </div>
          <div>
            <h1>Using href</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
