import React from "react";

const Post = ({ post }) => {
    return (
        <div className="innerShoe" >
            <img scr={post.selectedFile} />
            <div>{post.name}</div>
        </div>
    );
};

export default Post;
