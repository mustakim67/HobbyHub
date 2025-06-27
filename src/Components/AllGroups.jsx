import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const AllGroups = () => {
    const [groups, setGroups] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('asc'); 

    const fetchGroups = async () => {
        try {
            const res = await axios.get('http://localhost:3000/sorted-groups', {
                params: { search, sort },
            });

            console.log('Fetched groups:', res.data);

            if (Array.isArray(res.data)) {
                setGroups(res.data);
            } else if (Array.isArray(res.data.groups)) {
                setGroups(res.data.groups);
            } else {
                console.warn('Unexpected response format:', res.data);
                setGroups([]);
            }
        } catch (err) {
            console.error('Error fetching groups:', err);
            setGroups([]);
        }
    };

    useEffect(() => {
        fetchGroups();
    }, [search, sort]);

    return (
        <div className="px-4 md:px-[7%] py-8">
            <h1 className="text-2xl font-bold text-center mb-10 underline">All Groups</h1>

            {/* Search + Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <input
                    type="text"
                    placeholder="Search by group name"
                    className="input input-bordered w-full max-w-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="desc">Z → A</option>
                    <option value="asc">A → Z</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg">
                    <thead>
                        <tr>
                            <th className="text-left px-4 py-3">Groups</th>
                            <th className="text-left px-4 py-3">Category</th>
                            <th className="text-left px-4 py-3">Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(groups) && groups.length > 0 ? (
                            groups.map((group) => (
                                <tr key={group._id} className="border-t border-gray-100">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={group.photoURL}
                                                        alt={group.groupName}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">{group.groupName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{group.category}</td>
                                    <td className="px-4 py-3">
                                        <Link to={`/group-details/${group._id}`}>
                                            <span className="btn btn-sm btn-outline">See More..</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-6 text-gray-500">
                                    No groups found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllGroups;
