import React from "react";
import "./App.css";
import {connect} from 'react-redux';
// console.log(this.props)

class ShoeList extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
    }

    state = {
        visible: false,
        currentShoeIndex: 0
    };

    showModal = () => {
        this.setState({ visible: true });
        // this.setState({ currentShoeIndex:0 });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };

    render() {

        return (
            <div>
                <div>
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
                                <p>This Is Shoe  {this.props.shoesArray[this.state.currentShoeIndex].name}</p>

                                <img  src={this.props.shoesArray[this.state.currentShoeIndex].photo}></img>
                            </div>
                        </div>
                    ) : null}
                </div>
                </div>
                <div className="Shoes">
                    <div className="innerShoe">
                        {/* VISIBLE */}
                        {this.props.shoesArray.map((shoe, index) => {
                            return (
                                <div
                                    key={index.toString()} 
                                    className={shoe} 
                                    onClick={() => {
                                        {this.showModal();
                                            this.setState({ currentShoeIndex: index });
                                        }

                                        
                                    }}
                                >
                                    <img src={this.props.shoesArray[index].photo} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        shoesArray: state.shoesArray,
        
    }

}

export default connect(mapStateToProps) (ShoeList);
