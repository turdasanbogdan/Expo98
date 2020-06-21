import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

class MyNavbar extends Component {
    render() { 
        return (    
      <nav className="navbar navbar-expand-lg navbar-dark " id = "navbar-custom" >
      <a className="navbar-brand" href="/">EXPO '98</a>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a className="nav-link" href = "/resume">Resume</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href = "/projects">Projects</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href = "/blogs"> Blogs </a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href = "contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
          );
    }
}
 
export default MyNavbar;