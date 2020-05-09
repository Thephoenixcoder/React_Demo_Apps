import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/dashboard";
import Projectdetail from "./components/projects/Projectdetail";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/projects/Createproject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects/:id" component={Projectdetail} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/createproject" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
