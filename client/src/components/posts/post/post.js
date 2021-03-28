import React from "react";
import "./post.css"
const Post = ({ post }) => {
    return (
        <div className="insideNewShoes">
            <img scr={post.im} />
            <div>{post.name}</div>
        </div>
    );
};

export default Post;
