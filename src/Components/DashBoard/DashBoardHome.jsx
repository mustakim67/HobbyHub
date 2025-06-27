import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const stats = [
  { label: 'Total Groups', value: 11, color: 'bg-indigo-600' },
  { label: 'My Groups', value: 3, color: 'bg-orange-500' },
  { label: 'Active Groups', value: 7, color: 'bg-blue-500' },
];

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-8">Welcome Back , {user?.displayName}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-white ${stat.color} shadow-md hover:shadow-lg transition`}
          >
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <p className="text-lg">Here is your personalized HobbyHub dashboard.</p>
    </div>
  );
};

export default DashboardHome;