import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/digipplus-logo-70x70.38a25d5cef0d.png'

const Navbar = () => {

    const [isClicked, setClicked] = useState("home")

    const handleClick = (value) =>{
          setClicked(value)
    }

    return (
        <div className="navbar bg-base-200 py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='w-12' src={logo} alt="" />
        <div>
            <span style={{
                color: "#e7b42c"
            }}>BLOG</span>
            <span style={{
                color: "#e95c17"
            }}>PPLUS</span>
        </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-medium text-gray-500">
      <li 
      onClick={()=>handleClick('home')}
      ><Link
      className={`${(isClicked==="home") ? "border-b-2 border-green-600 text-green-700" : "" }`} 
      to='/'
      // className='border-b-2 border-green-600'
      >Home</Link></li>
      <li onClick={()=>handleClick('post')}><Link className={`${(isClicked==="post") ? "border-b-2 text-green-700 border-green-600" : "" }`}  to='/post'>My Posts</Link></li>
      <li onClick={()=>handleClick('about')}><Link className={`${(isClicked==="about") ? "border-b-2 text-green-700 border-green-600" : "" }`}  to='/about'>About Us</Link></li>
      <li onClick={()=>handleClick('contact')}><Link className={`${(isClicked==="contact") ? "border-b-2 text-green-700 border-green-600" : "" }`}  to='/contact'>Contact</Link></li>
     
      
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Change Password</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;