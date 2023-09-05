import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import { FaUtensils, FaHome, FaShoppingBag, FaShoppingCart, FaWallet, FaUsers, FaBook } from 'react-icons/fa';
import { MdMenu,MdReviews,MdEmail} from 'react-icons/md';
import { AiOutlineBars} from 'react-icons/ai';
import useCarts from '../../Hooks/useCarts';
import useAdmin from '../../Hooks/useAdmin';



const Dashboard = () => {
  const [cart]  = useCarts()
     console.log(cart)

  //TODO:  laod data from server dynamic is admin
      // const isAdmin = false
    const [isAdmin] = useAdmin()
    console.log(isAdmin)

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
           
           { isAdmin ?
             <>
               <li>< NavLink  to='/dashboard/Adminhome'><FaHome />Admin Home</ NavLink></li>
            <li>< NavLink  to='/dashborad/additems'><FaUtensils />Add Items</ NavLink></li>
            <li>< NavLink   to='/dashboard/Manageitems'><AiOutlineBars/>Manage Items </ NavLink></li>

            <li><NavLink  to='/dashboard/bookings'>
                <FaBook/> Manage Bookings
               </NavLink></li>
            <li>< NavLink  to='/dashboard/allusers'><FaUsers/>All Users
            </ NavLink></li>
             </> 
             :
              <>
            <li>< NavLink  to='/dashboard/userhome'><FaHome />User Home</ NavLink></li>
            <li>< NavLink  to='/dashborad/reservations'><FaUtensils />Reservation</ NavLink></li>
            <li>< NavLink   to='/dashboard/history'><FaWallet />Payment History </ NavLink></li>
            <li><NavLink  to='/dashboard/mycart'>
                <FaShoppingCart/> My Cart
                <span className="badge   badge-secondary">{cart?.length || 0}</span></NavLink></li>
            <li>< NavLink  to='/dashboard/review'><MdReviews />Add Review
            </ NavLink></li>
             </>
             
           }

            {/* Sidebar content here */}
           
             
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