import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const GroupDetails = () => {
    const { id } = useParams();
    const groups = useLoaderData();
    const { user } = useContext(AuthContext);
    const [joinedGroups, setJoinedGroups] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/joined?email=${user.email}`)
                .then(res => {
                    const groupIds = res.data.map(join => join.groupId);
                    setJoinedGroups(groupIds);
                })
                .catch(err => console.error('Failed to fetch joined groups:', err));
        }
    }, [user]);

    const handleJoin = async (groupId) => {
        try {
            const res = await axios.post('http://localhost:3000/joined', {
                userEmail: user.email,
                groupId: groupId,
            });

            if (res.data.insertedId || res.status === 200) {
                setJoinedGroups((prev) => [...prev, groupId]);
                Swal.fire({
                    title: "Joined Successfully!",
                    text: "You have joined the group.",
                    icon: "success",
                    confirmButtonText: "Okay"
                });
            } else {
                Swal.fire({
                    title: "Already Joined!",
                    text: res.data.message || "You've already joined this group.",
                    icon: "info",
                    confirmButtonText: "Okay"
                });
            }
        } catch (err) {
            console.error('Join failed:', err);
            Swal.fire({
                title: "Error!",
                text: "Failed to join group. Please try again.",
                icon: "error",
                confirmButtonText: "Okay"
            });
        }
    };

    const actualData = groups.find(group => group._id === id);
    if (!actualData) return <p>Group not found</p>;

    const isExpired = new Date() > new Date(actualData.endDate);

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
                        isExpired ? (
                            <div role="alert" className="alert alert-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>The group is no longer active</span>
                            </div>
                        ) : (
                            joinedGroups.includes(actualData._id) ? (
                                <button className="btn btn-md btn-disabled">Joined</button>
                            ) : (
                                <button
                                    className="btn btn-md btn-primary"
                                    onClick={() => handleJoin(actualData._id)}
                                >
                                    Join
                                </button>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;