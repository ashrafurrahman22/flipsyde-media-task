import React from 'react';
import usePosts from '../../Hooks/usePosts';
import SinglePost from './SinglePost';

const Post = () => {

    const [posts] = usePosts();

    return (
        <div className='py-10'>
            <div className='card w-64 bg-base-100 rounded shadow-xl mx-auto mb-5'>
                <div className='card-body bg-primary rounded-xl'>
                    <h2 className="text-center text-4xl font-bold text-white tracking-widest">Posts</h2> <hr />
                </div>

            </div>
            <div className='gap-5 grid grid-cols-3 px-4'>
            {
            posts.map(post => <SinglePost 
            post={post}
            /> )
            }
        </div>
        </div>
    );
};

export default Post;