import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="d-flex justify-content-between w-100">
          <li className="nav-item1">Clicky Game</li>
          <li className="nav-item2">Clicky an image to begin!</li>
          <li className="nav-item3">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
