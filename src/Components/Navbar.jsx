import React, { useContext, } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { IoMdLogOut } from 'react-icons/io';

const Navbar = () => {
    const { user, logOut, status, setStatus } = useContext(AuthContext)
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
        <div className="navbar shadow-sm px-[4%] md:px-[7%] sticky top-0 z-50 bg-white/10 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg">
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}>Home</NavLink>
                        <NavLink to="/all-groups" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}>All Groups</NavLink>
                        {
                            user &&
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>DashBoard</span></NavLink>
                        }
                        <NavLink to="/support" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}>Support</NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}>About Us</NavLink>

                    </ul>
                </div>
                <Link to={'/home'}><img className='w-16 md:w-22' src={logo} alt="" /><h1 className='text-xl md:text-2xl'>Hobby<span className='font-bold'>Hub</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 mr-5 text-lg gap-4">
                    <NavLink to="/home" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>Home</span> </NavLink>
                    <NavLink to="/all-groups" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>All Groups</span></NavLink>
                    {
                        user &&
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>DashBoard</span></NavLink>
                    }
                    <NavLink to="/support" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>Support</span></NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? 'font-bold text-blue-700' : ''}><span className='mr-5'>About Us</span></NavLink>

                </ul>
            </div>

            <div className="navbar-end">
                <div className={`${user ? "hidden" : ""}`}>
                    <Link to={status ? "/login" : "/register"}>
                        <button
                            onClick={() => setStatus(!status)}
                            className="bg-blue-700 rounded-xl text-white btn mr-3"
                        >
                            {status ? "Login" : "Register"}
                        </button>
                    </Link>
                </div>

                <div className={`${user ? " " : "hidden"}`}>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="w-12 md:w-18 rounded-full py-2 mr-4">
                            <img src={user?.photoURL} alt="User Image" className="rounded-full w-12 h-12 md:w-18 md:h-18 object-cover" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm -translate-x-20">
                            <li><a className='mx-auto'>{user?.displayName || "User Name"}</a></li>
                            <li><button onClick={() => {
                                handleSignOut();
                            }} className='btn btn-sm mt-1 rounded-full'>Logout <IoMdLogOut size={18} /></button></li>
                        </ul>
                    </div>
                </div>
                <div className='flex'>
                    <label className="swap swap-rotate ml-1">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;