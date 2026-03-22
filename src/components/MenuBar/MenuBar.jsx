import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const MenuBar = () => {
    return (
        <ul className="menu menu-lg bg-base-200 rounded-e-lg w-full h-screen space-y-3">
            <li><button className='btn btn-primary btn-active justify-start'><AiOutlineDashboard /> Dashboard</button></li>
            <li><button className='btn btn-ghost justify-start'><IoSettingsOutline /> Setting</button></li>
        </ul>
    );
};

export default MenuBar;