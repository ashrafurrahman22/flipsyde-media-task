import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

const Home = () => {
    return (
        <div className='px-6'>
            <PostForm/>
            
            <Post/>
        </div>
    );
};

export default Home;