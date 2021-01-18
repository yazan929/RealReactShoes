import React from "react";
import "./App.css";

class ShoeInfoComponent extends React.Component {
    state = {
        visible: true,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                
                {this.state.visible ? (
                    <div className="Modal">
                        <div className="InsideModal">
                            <button
                                aria-label="Close"
                                onClick={this.hideModal}
                            >
                                X
                            </button>
                            <p>I'm A Pop Up!!!</p>
                            <img src={"photos/Men1.jpg"}></img>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default ShoeInfoComponent;
