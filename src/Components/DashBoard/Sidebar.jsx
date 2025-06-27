import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

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
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">🔥 HobbyHub</h1>
            <nav className="flex flex-col space-y-4">
                <Link to="/home" className="hover:text-indigo-500">🏠 Home</Link>
                <Link to="create-group" className="hover:text-indigo-500">➕ Create Group</Link>
                <Link to="my-groups" className="hover:text-indigo-500">👥 My Groups</Link>
                <Link to="all-groups" className="hover:text-indigo-500">👥 All Groups</Link>
                <Link to="support" className="hover:text-indigo-500">🛠️ Support</Link>
                <Link to="about-us" className="hover:text-indigo-500">ℹ️ About Us</Link>

            </nav>

            <div className="absolute bottom-6 w-48">
                <button onClick={handleSignOut} className="w-full text-sm border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700">🚪 Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
