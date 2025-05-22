import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const data = useLoaderData();

    return (
        <div className="px-[7%] py-8">
            <h1 className="text-2xl font-bold text-center mb-10 underline">All Groups</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th>Group</th>
                            <th>Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((group, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={group.photoURL}
                                                    alt={group.groupName}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{group.groupName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{group.category}</td>
                                <td>
                                    <Link to={`/group-details/${group._id}`}>
                                        <span className="btn btn-sm btn-outline">Details</span>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllGroups;
