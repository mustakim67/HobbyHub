import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CreateGroup = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const NewGroup = Object.fromEntries(formData.entries())
        console.log(NewGroup);

        // send group data to the database
        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully.')

                    Swal.fire({
                        title: "Group has been created successfully!",
                        icon: "success",
                        draggable: true
                    });

                    form.reset();
                    navigate('/my-groups')
                }
            })
    }
    return (
        <>
            <div className='gap-2 mx-auto place-items-center mt-15'>
                <h1 className='text-xl'>Create Your Group in</h1>
                <div className='flex'>
                    <img className='max-w-[50px]' src={logo} alt="" />
                    <h1 className='text-2xl'>Hobby<span className='font-bold'>Hub</span></h1>
                </div>

            </div>
            <form
                onSubmit={handleSubmit}
                className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mt-10 p-6 bg-white shadow-xl rounded-xl"
            >
                <div>
                    <label className="block mb-1 font-semibold">Group Name</label>
                    <input
                        type="text"
                        name="groupName"
                        className="w-full input input-bordered"
                        placeholder="Enter group name"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Hobby Category</label>
                    <select name="category" className="w-full select select-bordered" required>
                        <option value="">Select a category</option>
                        <option>Drawing and Painting</option>
                        <option>Photography</option>
                        <option>Video Gaming</option>
                        <option>Fishing</option>
                        <option>Running</option>
                        <option>Cooking</option>
                        <option>Reading</option>
                        <option>Writing</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="block mb-1 font-semibold">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        className="w-full textarea textarea-bordered"
                        placeholder="Describe the group"
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
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Max Members</label>
                    <input
                        type="number"
                        name="maxMembers"
                        className="w-full input input-bordered"
                        placeholder="e.g. 10"
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
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        className="w-full input input-bordered bg-gray-100 cursor-not-allowed"
                        value={user?.displayName || ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">User Email</label>
                    <input
                        type="email"
                        name="userEmail"
                        className="w-full input input-bordered bg-gray-100 cursor-not-allowed"
                        value={user?.email || ""}
                        readOnly
                    />
                </div>


                <div className="md:col-span-2">
                    <button type="submit" className="w-full btn btn-primary mt-4">Create Group</button>
                </div>
            </form>
        </>

    );
};

export default CreateGroup;