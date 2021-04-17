

import React, { useEffect } from "react";
import POSTS from "./posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";

const ShoeList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <POSTS />
        </div>
    );
};

export default ShoeList;
