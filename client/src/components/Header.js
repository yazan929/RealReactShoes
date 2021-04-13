import React from 'react';
// import '../App.css';
// import '../App.css'
import './Header.css'
class Header extends React.Component {
    render() {
      return (
        <header>
            <div className="App">
          <div className="navBar">
            <div><a href="#"> Buy Shoes</a></div>
            <div><a href="#">About Us</a></div>
            <div><a href="#">Write A Review</a></div>
            <div><a href="#">Add Shoes</a></div>
          </div>
          </div>
        </header>
      );
    }
  }

  export default Header;