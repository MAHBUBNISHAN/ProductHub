import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-red-200 shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/'>Home</Link>
        <Link to='/all'>All Product</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">ProductHub</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-4 text-teal-800 ">
   
        <Link className=' hover:bg-pink-300 p-2 ' to='/'>Home</Link>
        <Link to='/all' className=' hover:bg-pink-300 p-2 '>All Product</Link>
        <Link to='/about'className=' hover:bg-pink-300 p-2 '>About</Link>
        <Link to='/blog' className=' hover:bg-pink-300 p-2 '>Blog</Link>
     
   
  </div>
  <div className="navbar-end">
   <Link className='btn' to='/login'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;