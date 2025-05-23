import React from 'react';
import error from '../assets/error.jpg'
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <>

            <Navbar></Navbar>
            <div className=' mt-30 place-items-center'>
                <img className=' mx-auto h-[400px]' src={error} alt="" />
                <NavLink to={'/home'} className='bg-green-500 text-white btn text-center rounded-lg mt-4'>Back to Home</NavLink>
            </div>
        </>
    );
};

export default Error;