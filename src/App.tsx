import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppState {
  input: string;
  displayText: string;
  firstName: string;
  lastName: string;
  link: string;
  displayLink: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      displayText: "",

      firstName: "",
      lastName: "",

      link: "",
      displayLink: "",
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

  handleLinkchange = (e) => {
    this.setState({ link: e.target.value });
  };

  handleLinkShow = () => {
    this.setState({ displayLink: this.state.link });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h2>Using dangerouslySetInnerHTML</h2>
            <p style={{ fontSize: "10px", color: "grey" }}>Hint - {`<img src="" onerror="alert('message');" />`}</p>
            <div>
              <input type="text" value={this.state.input} placeholder="Enter stuff" onChange={this.setInput} />
              <button onClick={this.setDisplayText}>Display</button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: this.state.displayText }} />
          </div>
          <div>
            <h2>Using eval</h2>
            <p style={{ fontSize: "10px", color: "grey" }}>Hint - alert('1')</p>
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
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
          <div>
            <h2>Using href</h2>
            <p style={{ fontSize: "10px", color: "grey" }}>Hint - javascript: alert('1')</p>
            <input
              type="text"
              name="link"
              placeholder="google.com"
              value={this.state.link}
              onChange={this.handleLinkchange}
            />
            <button onClick={this.handleLinkShow}>Show Link</button>
            <div>
              <a href={this.state.displayLink} style={{ color: "white" }}>
                {this.state.displayLink}
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
