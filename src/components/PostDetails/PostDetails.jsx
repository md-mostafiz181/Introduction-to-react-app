import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData()
    return (
        <div>
            <h1>Dynamic post details : {post.id}</h1>
        </div>
    );
};

export default PostDetails;