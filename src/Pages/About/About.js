import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faFaceMehBlank, faGraduationCap, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div style={{fontFamily:"Aleo"}} className='min-h-screen lg:p-10 p-4'>
            <div>
            <div className="lg:hero lg:p-12 p-5 bg-base-200 rounded-lg">
        <div className="lg:hero-content lg:mx-0 mx-auto  lg:gap-x-20 flex-col lg:flex-row-reverse">
            <img src="https://ashrafur-rahman-portfolio.netlify.app/static/media/OPU%20PIC.7ff55765a87e24c11225.jpg" className="max-w-sm lg:mx-0 mx-auto rounded-lg shadow-2xl" />
            <div>
                <div className='lg:text-left text-center'>
                <h1 className="lg:text-5xl text-2xl font-semibold">Ashrafur Rahman</h1>
                <h3 className="py-6 lg:text-3xl text-xl font-medium">
                     Junior Front-End Web Developer
                 </h3>
                </div>

                 <p className='text-justify mb-5'>Hard-working web developer with a flair for creating elegant solutions in the least
amount of time. With a proven ability to adapt to both self-starting and collaborative
environments while staying focused on achieving high-quality results under strict
deadlines. Eager to obtain a challenging position at a prestigious company that will
expand my learning and build upon my developer skills.</p>

                 <div className=' bg-base-200  border-2 rounded-xl p-10'>
                     <p className='text-center text-2xl text-secondary font-semibold uppercase'>info</p>
                    <div>
                     <p className="text-xl ml-2 text-secondary font-semibold">Education:</p>
                  <div className="lg:flex items-center border rounded-xl mb-3 gap-2">
                      
                 <FontAwesomeIcon className='w-10 text-red-700 py-3' icon={faGraduationCap} />
                  <p>B.B.A. (Management) under National University</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-2 text-secondary font-semibold">Address:</p>
                  <div className="lg:flex  items-center mb-3 gap-2 border rounded-xl">
                 <FontAwesomeIcon className='w-10 text-red-700 py-3' icon={faLocationDot} />
                  <p>Chittagong, Bangladesh</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-1 text-secondary font-semibold">Email:</p>
                  <div className="lg:flex border rounded-xl items-center gap-2 mb-3">
                  
                 <FontAwesomeIcon className='w-10 text-red-700 py-3' icon={faEnvelope} />
                  <p className='break-words'>ashrafurrahman22@gmail.com</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-1 text-secondary font-semibold">Phone:</p>
                  <div className="lg:flex border rounded-xl items-center mb-3 gap-2">
                  
                  
                 <FontAwesomeIcon className='w-10 text-red-700 py-3' icon={faPhone} />
                  <p>+8801721778884</p>
                  </div>
                  </div>

                  {/* <div className="flex justify-center mt-7">
                        <div className='mr-7'>
                        <a target='blank' href="https://github.com/ashrafurrahman22">
                 <img className='w-9' src={github} alt="" />
                 </a>
                        </div>

                        <div className='mr-3.5'>
                 <a target='blank' href="https://www.linkedin.com/in/ashrafur-rahman-503694218/">
                 <img className='w-10 rounded-xl' src={linkedin} alt="" />
                 </a>
                 </div>
                        <div>
                 <a target='blank' href="https://www.facebook.com/profile.php?id=100008326211230">
                 <img className='w-16 rounded-xl' src={facebook} alt="" />
                 </a>
                 </div> */}

                 </div>
                  </div>
                 <div>
                 </div>
            </div>
        </div>
            
        
    </div>
        </div>
        // </div>
    );
};

export default About;