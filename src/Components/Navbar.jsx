import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { IoMdLogOut } from 'react-icons/io';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
     const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
                // console.log("SignOut Successfull")
            })
            .catch((error) => {
                console.log("Something went wrong", error)
            });

    }
    return (
        <div className="navbar bg-base-100 shadow-sm px-[7%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img className='w-22' src={logo} alt="" /><h1 className='text-2xl'>Hobby<span className='font-bold'>Hub</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    Home
                    All Groups
                </ul>
            </div>
            <div className="navbar-end">
                <div className={`${user ? " " : "hidden"}`}>
                    <button onClick={handleSignOut} className={' text-blue-700 btn ml-4 rounded-full'}><IoMdLogOut size={30} /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;