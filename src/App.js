import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routing from './components/routing';
import MyNavbar from './components/navbar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
     <Router>
      <MyNavbar/>
      <Routing/>
    </Router>
     );
  }
}
 
export default App;
