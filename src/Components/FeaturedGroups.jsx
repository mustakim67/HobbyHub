import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FeaturedGroups = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/groups/featured')
            .then(res => res.json())
            .then(data => {
                setGroups(data.slice(0, 6));
            });
    }, []);

    return (
        <div className='px-[5%]'>
            <h1 className='text-3xl font-bold text-center mt-15'>Featured <span className='text-blue-700'>Groups</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {groups.map(group => (
                    <div key={group._id} className="rounded-xl shadow p-4">
                        <img src={group.photoURL} alt={group.groupName} className="w-full h-40 object-cover rounded-xl" />
                        <h2 className="text-xl font-bold mt-2 text-blue-500">{group.groupName}</h2>
                        <p >{group.category}</p>
                        <p className="text-sm">Location: {group.location}</p>
                        <p className="text-sm">Ends In: {group.endDate}</p>
                        <Link to={`/group-details/${group._id}`}><button className="btn w-full bg-blue-500 text-white rounded-xl mt-2">View Details</button> </Link>
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default FeaturedGroups;