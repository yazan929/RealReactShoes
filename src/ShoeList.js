import React from "react";
import "./App.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import ShoeInfoComponent from "./ShoeInfoComponent";

const useStyles = (theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.success.light,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});

class ShoeList extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //     };

    // }

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };
    shoesArray = [
        {
            photo: "photos/Men1.jpg",
            class: "Mshoes",
            name: "shoe1",
        },
        {
            photo: "photos/Men2.jpg",
            class: "Mshoes",
            name: "shoe2",
        },
        {
            photo: "photos/Men3.jpg",
            class: "Mshoes",
            name: "shoe3",
        },
        {
            photo: "photos/Men4.jpg",
            class: "Mshoes",
            name: "shoe4",
        },
        {
            photo: "photos/Men5.jpg",
            class: "Mshoes",
            name: "shoe5",
        },
        {
            photo: "photos/Men6.jpg",
            class: "Mshoes",
            name: "shoe6",
        },
        {
            photo: "photos/women1.jpg",
            class: "WShoes",
            name: "shoe7",
        },
        {
            photo: "photos/women2.jpg",
            class: "WShoes",
            name: "shoe8",
        },
        {
            photo: "photos/women3.jpg",
            class: "WShoes",
            name: "shoe9",
        },
        {
            photo: "photos/women4.jpg",
            class: "WShoes",
            name: "shoe10",
        },
        {
            photo: "photos/women5.jpg",
            class: "WShoes",
            name: "shoe11",
        },
        {
            photo: "photos/women6.jpg",
            class: "WShoes",
            name: "shoe12",
        },
        {
            photo: "photos/Kids1.jpg",
            class: "KShoes",
            name: "shoe13",
        },
        {
            photo: "photos/Kids2.jpg",
            class: "KShoes",
            name: "shoe14",
        },
        {
            photo: "photos/Kids3.jpg",
            class: "KShoes",
            name: "shoe15",
        },
        {
            photo: "photos/Kids4.jpg",
            class: "KShoes",
            name: "shoe16",
        },
        {
            photo: "photos/Kids5.jpg",
            class: "KShoes",
            name: "shoe17",
        },
        {
            photo: "photos/Kids6.jpg",
            class: "KShoes",
            name: "shoe18",
        },
    ];

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.state.visible ? (
                    <div className="Modal">
                        <div className="InsideModal">
                            <button aria-label="Close" onClick={this.hideModal}>
                                X
                            </button>
                            <p>I'm A Pop Up!!!</p>
                            <img src={shoe.photo} />
                        </div>
                    </div>
                ) : null}
                <div className="Shoes">
                <div className="innerShoe">
                    {this.shoesArray.map((shoe, index) => {
                        return (
                            <div
                                key={index.toString()}
                                className={shoe.class}
                                onClick={() => {
                                    this.showModal({

                                    });
                                }}
                            >
                                <img src={shoe.photo} />
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(ShoeList);
