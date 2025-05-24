import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const GroupDetails = () => {
    const { id } = useParams();
    const groups = useLoaderData();

    const Dates = (date) => {
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const date = new Date();
    const today = Dates(date);

    console.log(today)
    const actualData = groups.find(group => group._id === id);
    console.log(actualData)
    return (
        <div className="px-[7%] py-10">
            <h1 className="text-3xl font-bold text-center mb-6">{actualData.groupName}</h1>

            <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-xl shadow-md p-6">
                <img
                    src={actualData.photoURL}
                    alt={actualData.groupName}
                    className="w-full md:w-1/3 rounded-xl object-cover"
                />

                <div className="flex-1 space-y-2">
                    <p><span className="font-semibold">Category:</span> {actualData.category}</p>
                    <p><span className="font-semibold">Description:</span> {actualData.description}</p>
                    <p><span className="font-semibold">Meeting Location:</span> {actualData.location}</p>
                    <p><span className="font-semibold">End Date:</span> {actualData.endDate}</p>
                    <p><span className="font-semibold">Max Members:</span> {actualData.maxMembers}</p>
                    <p><span className="font-semibold">Created By:</span> {actualData.userName}</p>
                    {
                        new Date(today) <= new Date(actualData.endDate) ? (
                            <button className='btn btn-sm rounded-xl bg-blue-700 text-white'>
                                Join Group
                            </button>
                        ) : (
                            <div role="alert" className="alert alert-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>The group is no longer active</span>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default GroupDetails;