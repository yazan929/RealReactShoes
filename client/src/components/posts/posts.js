import React from 'react';
import Post from './post/post';
import {useSelector} from 'react-redux';

const Posts= ()=> {

    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return(
        !posts.length ? <div>empty</div> :(
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                            <Post post={post}/>
                    </div>
                )
                )}
                
            </div>
        )
    );

}

export default Posts;