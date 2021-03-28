import React from "react";
import "./modal.css"
const Modal = ({ post }) => {
    return (
        <div className="insideNewShoes">


            <div>{post.name}</div>
            <img src={post.photo} />

        </div>
    );
};

export default Modal;
