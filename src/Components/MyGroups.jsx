import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { MdEdit, MdDelete, MdOutlineManageAccounts } from "react-icons/md";
import Swal from 'sweetalert2';

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const groups = useLoaderData();
    const [data, setData] = useState(groups)
    const result = data.filter(group => group.userEmail === user.email) || "";

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(response => {
                        if (response.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your group has been deleted.",
                                icon: "success"
                            });

                            const remainingGroups = data.filter(group => group._id !== _id);
                            setData(remainingGroups);
                        }
                    })

            }
        });
    }

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
                                            <Link><span className="btn btn-sm flex gap-1">Update <MdEdit size={15} /></span></Link>
                                            <Link><span onClick={() => handleDelete(group._id)} className="btn btn-sm flex gap-1">Delete <MdDelete size={15} /></span></Link>
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
