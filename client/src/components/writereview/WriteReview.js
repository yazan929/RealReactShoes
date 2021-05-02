import React from "react";
import "./WriteReview.css";
import SelectShoe from "./selectShoe/SelectShoe.js";
import axios from "axios";

class writeReview extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.shoeName = React.createRef();
        this.sendInfo = this.sendInfo.bind(this);
        this.setReviewsLength = this.setReviewsLength.bind(this);
        this.checkInfo = this.checkInfo.bind(this);
        this.axiosTest = this.axiosTest.bind(this);

        // this.state = {
        //     id: 0,
        // };
    }
    //   async axiosTest() {
    //     const response = await axios.get("http://localhost:6039/all_reviews")
    //     return response.data.length

    // }

    async axiosTest() {
        const response = await axios.get("http://localhost:6039/all_reviews")
        console.log(response.data)
        return response.data
    } // didn't work



    setReviewsLength() {
        axios
            .get("http://localhost:6039/all_reviews")
            .then(function (response) {
                console.log(response.data);
                return response.data.length;
            });
    } // didn't work


    checkInfo(){
        if( (this.inputRef.current.value==="") || (this.emailRef.current.value==="") ||(this.nameRef.current.value==="") ){
            alert("Please fill up everything");
        }else (this.sendInfo())
    }


    sendInfo() {
        const review = {
            //id: setReviwsLength(),
            //didn't work ^^
            id: 0,
            text: this.inputRef.current.value,
            email: this.emailRef.current.value,
            name: this.nameRef.current.value,
            shoeName: "shoe1",
            stars: 5

        };

        axios
            .post("http://localhost:6039/create_review", review)
            .then((response) => {
                if (response.data != null) {
                    alert("worked");
                }
            });

        console.log(this.axiosTest());
    }

    render() {
        return (
            <div className="All">
                <div className="TopText">
                    Hello, Thank you for helping us by writing a review
                </div>
                <div className="Form">
                    <div className="Border">
                        <div className="InsideForm">
                            <div>
                                <div className="Element">Name</div>

                                <input ref={this.nameRef} type="text" className="Input"></input>
                            </div>

                            <div>
                                <div className="Element">Email</div>

                                <input ref={this.emailRef} type="text" className="Input"></input>
                            </div>
                            <div className="Element">Select Shoe</div>
                            <div>
                                <SelectShoe />
                            </div>

                            <div>
                                <div className="Element">Review</div>

                                <textarea
                                    ref={this.inputRef}
                                    cols="40"
                                    rows="5"
                                    type="text"
                                    className="Review"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    onClick={this.checkInfo}
                                    className="Submit"
                                >
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default writeReview;
