import React from "react";
import './App.css';

class Header extends React.Component {
    render() {
      return (
        <header>
            <div className="App">
          <div className="navBar">
            <div><a href="#">Men</a></div>
            <div><a href="#">Women</a></div>
            <div><a href="#">Kids</a></div>
            <div><a href="#">About Us</a></div>
          </div>
          </div>
        </header>
      );
    }
  }

  export default Header;