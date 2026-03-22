import React from 'react';
import { MdLogout } from "react-icons/md";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1">
                        <li><button className='btn btn-primary btn-active justify-start'><AiOutlineDashboard /> Dashboard</button></li>
                        <li><button className='btn btn-ghost justify-start'><IoSettingsOutline /> Setting</button></li>
                        <li><a className="btn btn-primary btn-outline">Logout <MdLogout /></a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Store Inventory</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;