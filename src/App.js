import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routing from './components/routing';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">EXPO '98</a>
 
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
          <a class="nav-link" href = "/aboutMe">About Me</a>
          </li>
          <li className="nav-item">
          <a class="nav-link" href = "/resume">Resume</a>
          </li>
          <li className="nav-item">
          <a class="nav-link" href = "/projects">Projects</a>
          </li>
          <li className="nav-item">
          <a class="nav-link" href = "/blogs"> Blogs </a>
          </li>
          <li className="nav-item">
          <a class="nav-link" href = "contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <Routing/>
    </Router>
     );
  }
}
 
export default App;
