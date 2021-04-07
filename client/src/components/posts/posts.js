import React, { useEffect, useState } from "react";
import Post from "./post/post";
import { fetchPosts } from "../../api/index";
import "./posts.css"

const Posts = () => {
    //const posts = useSelector((state) => state.posts);
    let [posts, setPosts] = useState([]);

    // console.log(posts);

    useEffect(async () => {
        var fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.data);


    }, []);

    return posts.length === 0 || !posts ? (
        <div>empty</div>
    ) : (
        <div className="newShoes">
            {posts.map((post) => (
                <div key={post.id}>
                    <Post post={post} />
                </div>
            ))}
        </div>
    );
};

export default Posts;
