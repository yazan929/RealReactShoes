import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import { fetchReviews } from "../../api/index";




function Aboutus() {
    let [reviews, setReviews] = useState([]);
    useEffect(async () => {
        var fetchedReviews = await fetchReviews();
        setReviews(fetchedReviews.data);
    }, []);
    //
    return (
        <div className="AboutUs">
            <div className="Page">
                <div className="Title">About Us</div>
                <div className="Text">
                    This WebApp was created by Yazan Qawasmeh to practice full
                    stack development, During the creation of this project I
                    have practiced HTML, CSS, Javascript, React, Redux, NodeJS,
                    Express, MongoDB and Java Springboot.
                    {/* {console.log(reviews.length)} */}
                </div>
                <div class="space"></div>
                <div className="Title">Other Projects</div>
                <div className="Projects">
                    <a>Project1</a>
                    <a>Project2</a>
                    <a>Project3</a>
                    <a>Project4</a>
                </div>
            </div>

            <div className="Title">
                Here are some of the reviews that we got!!!
            </div>

            <div className="ListOfReviews">
                {reviews.map((review) => (
                    <div>
                        <div>{reviews.length}</div>
                        <div className="revStyle">{review.name}</div>
                        <div className="revStyle">Stars: {review.stars}</div>
                        <div className="revStyle">{review.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutus;
