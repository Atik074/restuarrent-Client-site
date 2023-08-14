import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => { 
 
    const navOptions = <> 
        
          <li className='text-white font-medium'><Link to='/'>HOME</Link></li>
       
       <li className='text-white font-medium'><Link to='/dashboard'>DASHBOARD</Link></li>
       <li className='text-white font-medium'><Link to='/menu'>OUR MENU</Link></li>
       <li className='text-white font-medium'><Link to='/contact'>CONTACT US</Link></li>
       <li className='text-white font-medium'><Link to='/ourshop'>OUR SHOP</Link></li> 

    
     </>

    return (     
 <div className="navbar fixed z-10 px-6  bg-opacity-50  bg-[#F97316]  max-w-screen-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52  ">
          {navOptions}
      </ul>
    </div>

    <div>
      <h1 className="normal-case text-[22px] font-bold text-white ">BISTRO BOSS</h1>
      <p className='tracking-[5px]  font-serif text-white '>RESTAURANT</p>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

    );
};

export default NavBar;