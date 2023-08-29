import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
            <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
        </div> 
        <div className="drawer-side bg-[#D1A056]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            <li>< NavLink to=''><FaHome/>User Home</ NavLink></li>
            <li>< NavLink to=''><FaCalendar/>Reservation</ NavLink></li>
            <li>< NavLink to=''><FaWallet/>Payment History</ NavLink></li>
            <li>< NavLink to='/dashboard/mycart'><FaShoppingCart/>My Cart</ NavLink></li>
             
             <div className="divider"></div>
             <li>< NavLink to='/'><FaHome/>Home</ NavLink></li>
             <li>< NavLink to=''><HiMenu/>Menu</ NavLink></li>
             <li>< NavLink to=''><FaHome/>Home</ NavLink></li>
             <li>< NavLink to=''><FaHome/>Home</ NavLink></li>
  
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;