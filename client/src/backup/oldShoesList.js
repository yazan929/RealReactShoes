import React from "react";
import '../App.css'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectShoe } from "../redux/actions/index";
import { bindActionCreators } from "redux";




class ShoeList extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
        this.state = { title: "Show More Information" };
    }


    
    state = {
        visible: false,
        currentShoeIndex: 0,
        // title: "Show More Information",
    };

    showModal = () => {
        this.setState({ visible: true });
        // this.setState({ currentShoeIndex:0 });

    };

    hideModal = () => {
        this.setState({ visible: false });
        // this.state = { title: "Show More Information" };
        // this.setState = { title: "Show More Information" };
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
                                        // onClick={this.state.title = "Show More Information"}

                                        onClick={this.hideModal}
                                    >
                                        X
                                    </button>
                                    <p>
                                        This Is Shoe{" "}
                                        {
                                            this.props.shoesArray[
                                                this.state.currentShoeIndex
                                            ].name
                                        }
                                    </p>

                                    <img
                                        src={
                                            this.props.shoesArray[
                                                this.state.currentShoeIndex
                                            ].photo
                                        }
                                    ></img>

                                    {/* {this.props.shoesArray[
                                        this.state.currentShoeIndex
                                    ].showMore ? (
                                        <div>
                                            {
                                                this.props.shoesArray[
                                                    this.state.currentShoeIndex
                                                ].msg
                                            }
                                        </div>
                                    ) : ( */}
                                        <p>
                                            {/* <a
                                                href="#"
                                                onClick={() =>
                                                    this.props.selectShoe(
                                                        this.props.shoesArray[
                                                            this.state
                                                                .currentShoeIndex
                                                        ].showMore
                                                    )
                                                }
                                            >
                                            More Information..
                                            </a> */}

                                            <div
                                                onClick={() =>
                                                    this.setState({
                                                        title: this.props
                                                            .shoesArray[
                                                            this.state
                                                                .currentShoeIndex
                                                        ].msg,
                                                    })
                                                }
                                            >
                                                {this.state.title}
                                            </div>
                                        </p>
                                    {/* )} */}
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
                                        {
                                            this.showModal();
                                            this.setState({
                                                currentShoeIndex: index,
                                                title: "Show More Information",
                                            });
                                        }
                                    }}
                                >
                                    <img
                                        src={this.props.shoesArray[index].photo}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoesArray: state.shoesArray,
        // selectedShoe: state.selectedShoe
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectShoe: selectShoe }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ShoeList);
