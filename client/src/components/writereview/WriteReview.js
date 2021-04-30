import React from "react";
import "./WriteReview.css";
import SelectShoe from "./selectShoe/SelectShoe.js"


function writeReview() {
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

                            <input type="text" className="Input"></input>
                        </div>

                        <div>
                            <div className="Element">Email</div>

                            <input type="text" className="Input"></input>
                        </div>
                        <div className="Element">Select Shoe</div>
                        <div>
                            <SelectShoe />
                            
                        </div>

                        <div>
                            <div className="Element">Review</div>

                            <textarea
                                cols="40"
                                rows="5"
                                type="text"
                                className="Review"
                            ></textarea>
                        </div>
                        <div>
                            <button className="Submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default writeReview;
