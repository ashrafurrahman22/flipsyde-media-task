import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {

    const {phone, email, message} = post;
    // console.log(post)
    const navigate = useNavigate();

   const navigateToPostDetails = id =>{
       navigate(`/posts/${id}`);
   }

    return (
        <div className="card w-96 bg-base-200 shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-sm">{email}</h2>
    <h2 className="card-title text-sm">{phone}</h2>
    <p>{message}</p>
    <div className="card-actions justify-end">
      <button onClick={() => navigateToPostDetails(post._id)}  className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default SinglePost;