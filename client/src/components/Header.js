import React from "react";
import "./Header.css";

var sentence = "YAZAN929 SHOES"


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="yazan929"><a href="/buyshoes">{sentence}</a></div>

                <nav className="navv">
                    <ul>
                        <li>
                            {" "}
                            <a href="/buyshoes">Buy Shoes </a>
                        </li>
                        <li>
                            {" "}
                            <a href="/aboutus">About Us </a>
                        </li>
                        <li>
                            {" "}
                            <a href="/review">Write A Review</a>
                        </li>
                        <li>
                            {" "}
                            <a href="/addshoe">Add Shoes </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
