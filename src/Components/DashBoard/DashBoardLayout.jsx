import { Outlet } from 'react-router';
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashNav from './DashNav';
import Footer from '../Footer';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen">

            <div>

            </div>
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <h1 className="text-2xl py-4 font-bold text-white md:text-gray-800">Dashboard</h1>
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-2xl font-bold text-white md:text-gray-800 "
                >
                    ⋮
                </button>
            </div>


            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${sidebarOpen ? 'bg-black/50 visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => setSidebarOpen(false)}
            >
                <div
                    className={`w-72 h-full  dark:bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Sidebar />
                </div>
            </div>


            <div className="md:flex">

                <aside className="hidden md:block fixed top-0 left-0 w-80 h-screen border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 z-40">
                    <Sidebar />
                </aside>


                <div className="flex-1">
                    {/* <div className="hidden md:block">
                        <DashNav />
                    </div> */}

                    <div className="py-6 md:pl-[15%] px-[7%]">
                        <Outlet />
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
