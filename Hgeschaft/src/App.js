import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Topheader from './components/layout/Topheader/Topheader'
import Centerheader from './components/layout/Centerheader/Centerheader'
import Bottomheader from './components/layout/Bottomheader/Bottomheader'
import Homelayout  from './components//HomeLayout/Home'
import './styles/main.css';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Topheader />
        <Centerheader />
        <Bottomheader/>
        <Switch>
          <Route exact path="/" component={Homelayout} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Posts} /> */}
        </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
