import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const data = useLoaderData();

    return (
        <div className="px-4 md:px-[7%] py-8">
            <h1 className="text-2xl font-bold text-center mb-10 underline">All Groups</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg">
                    <thead>
                        <tr>
                            <th className="text-left px-4 py-3">Group</th>
                            <th className="text-left px-4 py-3">Category</th>
                            <th className="text-left px-4 py-3">Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((group) => (
                            <tr key={group._id} className=" border-t border-gray-100">
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllGroups;
