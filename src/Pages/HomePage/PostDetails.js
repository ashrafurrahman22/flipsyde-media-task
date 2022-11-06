import React from 'react';
import { useParams } from 'react-router-dom';
import usePostDetails from '../../Hooks/usePostDetails';

const PostDetails = () => {

    const {postId} = useParams();

    const [data] = usePostDetails(postId);
    console.log(data)

    return (
        <div className="card w-2/4 my-10 mx-auto lg:card-side bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{data.firstName + " " + data.lastName}</h2>
    <p className='font-medium'>Email: {data.email}</p>
    <p className='font-medium'>Phone: {data.phone}</p>
    <p>{data.message}</p>
  </div>
</div>
    );
};

export default PostDetails;