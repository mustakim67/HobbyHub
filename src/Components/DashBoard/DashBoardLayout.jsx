import { Outlet } from 'react-router';
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashNav from './DashNav';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex px-[3%]">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:block w-80 border-r border-gray-200 dark:border-gray-700 fixed h-full z-40 p-6">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded shadow"
      >
        ☰
      </button>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="w-80 h-full p-6" onClick={e => e.stopPropagation()}>
            <Sidebar></Sidebar>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-80">
        <DashNav></DashNav>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;