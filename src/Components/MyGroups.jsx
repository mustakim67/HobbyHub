import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { MdEdit, MdDelete, MdOutlineManageAccounts } from "react-icons/md";
import Swal from 'sweetalert2';

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [Update, setUpdate] = useState(null)
    console.log(Update)
    const groups = useLoaderData();
    const [data, setData] = useState(groups)
    const result = data.filter(groups => groups.userEmail === user.email) || "";

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
    const handleUpdateFormData = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateData = Object.fromEntries(formData.entries());
        updateData.category = form.category.value;
        //send update data to db
        fetch(`http://localhost:3000/groups/${Update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(response =>{
            if(response.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Group Information updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  const updatedGroup = { ...Update, ...updateData };
            const updatedData = data.map(group =>group._id === Update._id ? updatedGroup : group);
             setData(updatedData);
            }
        })
    };
    return (
        <div className="px-4 md:px-[7%] py-8">
            {result.length > 0 ? (
                <div className="overflow-x-auto w-full">
                    <h1 className="text-2xl font-bold text-center mb-10 underline">My Groups</h1>
                    <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg">
                        <thead>
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
                                <tr key={group._id} className=" border-t border-gray-100">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={group.photoURL}
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
                                            <Link><span className="btn btn-sm flex gap-1" onClick={() => {
                                                setUpdate(group);
                                                document.getElementById('my_modal_4').showModal()
                                            }}>Update <MdEdit size={15} /></span></Link>
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

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">Update Group Information</h3>
                    <form
                        onSubmit={handleUpdateFormData}
                        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mt-10 p-6 bg-white shadow-xl rounded-xl"
                    >
                        <div>
                            <label className="block mb-1 font-semibold">Group Name</label>
                            <input
                                type="text"
                                name="groupName"
                                className="w-full input input-bordered"
                                defaultValue={Update?.groupName}
                                placeholder="Enter new group name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Hobby Category</label>
                            <select
                                name="category"
                                className="w-full select select-bordered"
                                value={Update?.category} //value kaj kore default value kaj kore na
                            >
                                <option value="">Select a category</option>
                                <option value="Drawing and Painting">Drawing and Painting</option>
                                <option value="Photography">Photography</option>
                                <option value="Video Gaming">Video Gaming</option>
                                <option value="Fishing">Fishing</option>
                                <option value="Running">Running</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Reading">Reading</option>
                                <option value="Writing">Writing</option>
                            </select>


                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Description</label>
                            <textarea
                                name="description"
                                rows="3"
                                className="w-full textarea textarea-bordered"
                                placeholder="Describe the group"
                                defaultValue={Update?.description}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Meeting Location</label>
                            <input
                                type="text"
                                name="location"
                                className="w-full input input-bordered"
                                placeholder="Location"
                                defaultValue={Update?.location}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                className="w-full input input-bordered"
                                defaultValue={Update?.endDate}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Max Members</label>
                            <input
                                type="number"
                                name="maxMembers"
                                className="w-full input input-bordered"
                                placeholder="1-10"
                                defaultValue={Update?.maxMembers}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Image URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full input input-bordered"
                                placeholder='https://'
                                defaultValue={Update?.photoURL}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.displayName || ""}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">User Email</label>
                            <input
                                type="email"
                                name="userEmail"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.email || ""}
                                readOnly
                            />
                        </div>

                        <div className='flex gap-5'>
                            <button onClick={() => document.getElementById('my_modal_4').close()} type="submit" className="w-full btn btn-primary mt-4 mx-auto">Update Group Information</button>
                            <button onClick={() => document.getElementById('my_modal_4').close()} className="w-full btn btn-primary mt-4 mx-auto">Close</button>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyGroups;
