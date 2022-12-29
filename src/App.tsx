import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppState {
  input: string;
  displayText: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      displayText: "",
    };
  }

  setInput = (e) => {
    this.setState({ input: e.target.value });
  };

  setDisplayText = () => {
    this.setState({ displayText: this.state.input });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input type="text" value={this.state.input} placeholder="Enter stuff" onChange={this.setInput} />
            <button onClick={this.setDisplayText}>Display</button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.state.displayText }} />
        </header>
      </div>
    );
  }
}

export default App;
