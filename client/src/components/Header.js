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
            <div><a href="#">Bar1</a></div>
            <div><a href="#">Bar2</a></div>
            <div><a href="#">Bar3</a></div>
            <div><a href="#">About Us</a></div>
          </div>
          </div>
        </header>
      );
    }
  }

  export default Header;