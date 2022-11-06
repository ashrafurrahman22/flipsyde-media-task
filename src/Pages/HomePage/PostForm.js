import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const PostForm = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/posts', data)
    .then(response =>{
      const {data} = response;
      console.log(response);
        if(data.insertedId){
        reset();
        toast.success('Successfully Posted');
        }
    });
  };

    return (
        <div className="mt-10 text-center">
      <h1 className="text-3xl font-semibold">
        Let us handle your <br />
        post, professionally.
      </h1>

      <div className="py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col items-center">
          
          <div className="flex gap-5">
          <input className="bg-base-300 px-8 py-3 rounded" placeholder="First Name" {...register("firstName")} />
          <input placeholder="Last Name" className="bg-base-300 px-8 py-3 rounded" {...register("lastName", { required: true })} />
          </div>
          <div className="flex gap-5 py-3">
          <input type='email' className="bg-base-300 px-8 py-3 rounded" placeholder="Email Address" {...register("email")} />
          <input placeholder="Phone" className="bg-base-300 px-8 py-3 rounded" {...register("phone", { required: true })} />
          </div>

          <textarea placeholder="Your Message" className="bg-base-300 p-4 mb-3 rounded" name="message" id="" cols="64" rows="6" {...register("message", { required: true })}></textarea>


          {errors.email && <span>This field is required</span>}

          <input type="submit" value="Post" className="btn bg-blue-900 w-32 border-none normal-case font-normal" />
        </form>
      </div>
    </div>
    );
};

export default PostForm;