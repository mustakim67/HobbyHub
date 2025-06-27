import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { IoMdLogOut } from 'react-icons/io';

const Sidebar = () => {
     const {logOut} = useContext(AuthContext)
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
        <div className="space-y-6 ">
            <nav className="flex flex-col space-y-4">
                <NavLink to="/dashBoard" className='text-xl font-bold'>DashBoard</NavLink>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>🏠 Home</NavLink>
                <NavLink to="create-group" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>➕ Create Group</NavLink>
                <NavLink to="my-groups" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>👥 My Groups</NavLink>
                <NavLink to="all-groups" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>👥 All Groups</NavLink>
                <NavLink to="support" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>🛠️ Support</NavLink>
                <NavLink to="about-us" className={({ isActive }) => isActive ? 'font-bold bg-blue-700 p-3 rounded-xl text-white' : ''}>ℹ️ About Us</NavLink>

            </nav>

            <div className="absolute bottom-6 w-60 rounded-xl">
                <button onClick={handleSignOut} className="w-full text-sm border btn btm-sm border-blue-700 bg-blue-700 text-white py-2 rounded "><IoMdLogOut size={18}/>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
