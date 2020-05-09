import React from 'react';
import './App.css';
import Home from '../Home';
import Artists from '../Artists'
import { Navbar, Nav } from "react-bootstrap";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
const App = (props) => {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Dezeer</Navbar.Brand>
        <Nav className="mr-auto">

          <Link className="nav-link" to="/">Home</Link>

        </Nav>

      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/artists/:id' name="artists" component={Artists} />
      </Switch>
    </div>
  );
}

export default App;
