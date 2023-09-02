import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdMenu,MdReviews,MdEmail} from 'react-icons/md';
import useCarts from '../../Hooks/UseCarts';

const Dashboard = () => {
  const [cart]  = useCarts()


  //TODO:  laod data from server dynamic is admin
  const isAdmin = true

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
          <ul className="menu  p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            <li>< NavLink  to='/dashboard/userhome'><FaHome />User Home</ NavLink></li>
            <li>< NavLink  to='/dashborad/reservations'><FaCalendar />Reservation</ NavLink></li>
            <li>< NavLink   to='/dashboard/history'><FaWallet />Payment History </ NavLink></li>

            <li><NavLink  to='/dashboard/mycart'>
                <FaShoppingCart/> My Cart
                <span className="badge   badge-secondary">{cart?.length || 0}</span></NavLink></li>
            <li>< NavLink  to='/dashboard/review'><MdReviews />Add Review
            </ NavLink></li>
             
             <div className="divider"></div>
             <li>< NavLink   to='/'><FaHome />Home</ NavLink></li>
             <li>< NavLink   to='/dashboard/menu'><MdMenu />Menu</ NavLink></li>
             <li>< NavLink   to='/dashboard/shop'><FaShoppingBag/>Shop</ NavLink></li>
             <li>< NavLink   to='/dashboard/contact'><MdEmail/>Contact</ NavLink></li>
          
  
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;