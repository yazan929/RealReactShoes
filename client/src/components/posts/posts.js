import React, { useEffect, useState } from "react";
import Post from "./post/post";
import { fetchPosts } from "../../api/index";
import "./posts.css"

const Posts = () => {
    //const posts = useSelector((state) => state.posts);
    let [posts, setPosts] = useState([]);
    let ctr = 1;
    // console.log(posts);

    useEffect(async () => {
        var fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.data);


    }, []);

    return posts.length === 0 || !posts ? (

        <div>No Shoes Found </div>
    ) : (
        <div className="newShoes">
            {posts.map((post) => (
    
                <div key={post.id,ctr++}>
                    
                     <Post post={post} />

                    {/* {ctr%3===0 && <div className="MakeSpace"></div>} */}

                </div>



       


            ))}
        </div>
    );
};

export default Posts;
