import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { MdEdit, MdDelete, MdOutlineManageAccounts } from "react-icons/md";

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const result = data?.filter(group => group.userEmail === user.email) || [];

    return (
        <div className="px-4 md:px-[7%] py-8">
            

            {result.length > 0 ? (
                <div className="overflow-x-auto">
                    <h1 className="text-2xl font-bold text-center mb-10 underline">My Groups</h1>
                    <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="text-left px-4 py-3">Group</th>
                                <th className="text-left px-4 py-3">Category</th>
                                <th className="px-4 py-3 text-center">
                                    <div className="flex justify-center items-center gap-1">
                                        Manage <MdOutlineManageAccounts size={20} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((group) => (
                                <tr key={group._id} className="hover:bg-gray-50 transition border-t border-gray-100">
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
                                            <p className="font-semibold">{group.groupName}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{group.category}</td>
                                    <td className="px-4 py-3 text-center">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            <Link>
                                                <span className="btn btn-sm flex r gap-1">
                                                    Update <MdEdit size={15} />
                                                </span>
                                            </Link>
                                            <Link>
                                                <span className="btn btn-sm flex gap-1">
                                                    Delete <MdDelete size={15} />
                                                </span>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-10 text-gray-600 text-lg">
                   <h1> No groups found !!</h1>
                </div>
            )}
        </div>
    );
};

export default MyGroups;
