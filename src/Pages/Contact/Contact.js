import React from 'react';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();}

    return (
        <div style={{fontFamily:"Aleo"}} className='min-h-screeen lg:p-10'>
        <div className="lg:hero bg-base-200 lg:p-8 p-2 rounded-lg">
<div className="hero-content flex-col lg:flex-row ">
  <div className="text-center sm:2/6 lg:w-2/6 lg:mx-16 lg:text-left">
    <h1 className="lg:text-5xl font-semibold">Let's Talk</h1>
    <p className="py-6 font-medium  lg:text-justify">My door is always open for a good cup of coffee.</p>
  </div>
  <div className="card sm:mx-auto lg:w-full lg:max-w-sm lg:shadow-2xl bg-base-100">
    <div className="card-body">
      <div className="form-control">
       <form onSubmit={sendEmail}>
       <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input type="text" name="user_name" placeholder="Your Name*" className="input input-bordered w-full" required />
       <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="user_email" placeholder="Your Email*" className="input input-bordered w-full" required />
       
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea required name="message" className='border w-full' placeholder='Write Here...*'  id="" cols="20" rows="5"></textarea>
        <input className='btn btn-primary block w-full' type="submit" value="Submit" />
       </form>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    );
};

export default Contact;