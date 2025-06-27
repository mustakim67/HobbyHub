import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const FeaturedGroups = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/groups/featured')
            .then(res => res.json())
            .then(data => {
                setGroups(data.slice(0, 6));
            });
    }, []);

   const handleType = (count) => {
  console.log(count); // access word count number
};

    const handleDone = () => {
        console.log('Done after 5 loops!');
    };

    return (
        <div className="px-[6%]">
            <div className='text-center text-3xl font-semibold mt-15 mb-5 text-blue-500'>
                 <Typewriter
                words={['Featured Ongoing Groups']}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
            />
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {groups.map(group => (
                    <div key={group._id} className="rounded-xl shadow p-4">
                        <img
                            src={group.photoURL}
                            alt={group.groupName}
                            className="w-full h-40 object-cover rounded-xl"
                        />
                        <h2 className="text-xl font-bold mt-2 text-blue-500">
                            {group.groupName}
                        </h2>
                        <p>{group.category}</p>
                        <p className="text-sm">Location: {group.location}</p>
                        <p className="text-sm">Ends In: {group.endDate}</p>
                        <Link to={`/group-details/${group._id}`}>
                            <button className="btn w-full bg-blue-500 text-white rounded-xl mt-2">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGroups;
