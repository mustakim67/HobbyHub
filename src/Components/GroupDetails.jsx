import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const GroupDetails = () => {
    const { id } = useParams();
    const groups = useLoaderData();
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
                    <button className='btn btn-sm rounded-xl bg-blue-700 text-white'>Join Group</button>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;