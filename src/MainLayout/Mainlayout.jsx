import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer';

const Mainlayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (

        <div>
            {isLoading && (
                <div className="fixed inset-0 bg-white/60 z-[9999] flex items-center justify-center">
                    <span className="loading loading-spinner text-blue-600 w-14 h-14"></span>
                </div>
            )}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-15'>
                <Footer></Footer>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Mainlayout;