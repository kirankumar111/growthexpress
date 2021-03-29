import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Route";

// import login from "./config/api";
// import axios from "axios";

// const HOST = "https://localhost:8080";

class App extends React.Component {
  state = { patients: [] };
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false
    };
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };
  handleLogout = event => {
    this.userHasAuthenticated(false);
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("wrapper")
);
