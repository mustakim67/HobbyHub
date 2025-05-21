import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
             <ToastContainer />
        </div>
    );
};

export default Mainlayout;