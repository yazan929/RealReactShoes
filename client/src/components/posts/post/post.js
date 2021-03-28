import React from "react";
import "./post.css"
const Post = ({ post }) => {
    return (
        <div className="insideNewShoes">


            {/* <div>{post.name}</div> */}
            <img src={post.photo} />

        </div>
    );
};

export default Post;
