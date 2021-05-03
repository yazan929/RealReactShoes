import React from "react";
import "./WriteReview.css";
import SelectShoe from "./selectShoe/SelectShoe.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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

        this.state = {
            id: 0
        }


        // this.state = {
        //     id: 0,
        // };
    }
    //   async axiosTest() {
    //     const response = await axios.get("http://localhost:6039/all_reviews")
    //     return response.data.length

    // }
    async axiosTest() {
        const { data: test }  = await axios.get("http://localhost:6039/all_reviews"),
                  id = test.filter(test => test.id).length;

        this.setState({ id});
        console.log("the id is = " + id)
    }

    
    // async axiosTest() {
    //     const response = await axios.get("http://localhost:6039/all_reviews");
    //     console.log(response.data);
    //     return response.data;
    // }
    // didn't work

    setReviewsLength() {
        axios
            .get("http://localhost:6039/all_reviews")
            .then(function (response) {
                console.log(response.data.length);
                const longeur = response.data.length;
                console.log(longeur);
                return response.data.length;
            })
            .catch((err) => console.error(err)); // promise
    } // didn't work

    checkInfo() {
        // var letters = /^[A-Za-z]+$/;
        let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
            this.inputRef.current.value === "" ||
            this.emailRef.current.value === "" ||
            this.nameRef.current.value === ""
        ) {
            alert("Please fill up everything");
            // }else if(this.nameRef.current.value.includes("yazan")){
            // }else if(this.nameRef.current.value.match(letters)){
        } else if (!/^[a-zA-Z]+$/.test(this.nameRef.current.value)) {
            alert("Please enter a name without symbols or numbers ");
        } else if (!mail.test(this.emailRef.current.value)) {
            alert("Please enter a real email ");
        } else {
            this.sendInfo();
        }
    }

    sendInfo() {
        let num = this.axiosTest();
        console.log("num is " + num);
        const review = {
            id: num,
            text: this.inputRef.current.value,
            email: this.emailRef.current.value,
            name: this.nameRef.current.value,
            shoeName: "shoe1",
            stars: 5,
        };

        axios
            .post("http://localhost:6039/create_review", review)
            .then((response) => {
                if (response.data != null) {
                    alert("worked");
                }
            });

        // console.log(this.axiosTest());
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

                                <input
                                    ref={this.nameRef}
                                    type="text"
                                    className="Input"
                                ></input>
                            </div>

                            <div>
                                <div className="Element">Email</div>

                                <input
                                    ref={this.emailRef}
                                    type="text"
                                    className="Input"
                                ></input>
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
