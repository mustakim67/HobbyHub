import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Lightbulb, Target, Image, ShieldCheck } from "lucide-react";

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const data = useLoaderData();
    const myGroupCount = data.filter(dat => dat.userEmail === user?.email).length;

    const [active, setActive] = useState(null);
    const [join, setJoin] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/groups/featured')
            .then(res => res.json())
            .then(data => {
                setActive(data.length);
            });
    }, []);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/joined?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    const joinedCount = data.filter(dat => dat.userEmail === user.email).length;
                    setJoin(joinedCount);
                })
                .catch(err => console.error('Error fetching joined groups:', err));
        }
    }, [user]);

    const stats = [
        { label: 'Total Groups Available', value: data.length, color: 'bg-blue-600' },
        { label: 'My Created Groups ', value: myGroupCount, color: 'bg-gray-400' },
        { label: 'Active Groups', value: active, color: 'bg-blue-700' },
        { label: 'Joined Groups', value: join, color: 'bg-gray-400' },
    ];
    const tips = [
        {
            title: "Pick a Clear Group Name",
            description: "Make sure your group name is easy to understand and remember.",
            icon: Lightbulb,
        },
        {
            title: "Define Your Purpose",
            description: "Let people know what your group is about with a short mission statement.",
            icon: Target,
        },
        {
            title: "Add a Strong Cover Image",
            description: "Use visuals to set the tone and theme of your group.",
            icon: Image,
        },
        {
            title: "Set Ground Rules",
            description: "Establish guidelines to keep discussions respectful and on-topic.",
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="px-4 py-6 sm:px-8 md:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold  mb-6">
                Welcome back, <span className="text-blue-700 dark:text-blue-400">{user?.displayName}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden ${stat.color}`}
                    >
                        <div className="absolute top-3 right-3 opacity-20">
                        </div>
                        <h3 className="text-xl font-medium uppercase tracking-wider">{stat.label}</h3>
                        <p className=" font-bold mt-3"><span className='text-2xl md:text-4xl'>{stat.value}</span> Groups</p>
                    </div>
                ))}
            </div>
            {/* Post creation tips */}
            <section className="mx-auto px-4 py-15">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Popular Group <span className="text-blue-600">Creation Tips</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip, index) => {
                        const Icon = tip.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white px-10 py-12 rounded-2xl shadow-md hover:shadow-lg transition text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-black">{tip.title}</h3>
                                <p className="text-gray-600 text-sm">{tip.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Profile section */}
            <div className="relative w-full  mx-auto">
                {/* Cover Image */}
                <div className="w-full h-90 bg-gray-300 ">
                    <img
                        src="https://i.ibb.co/CpZfxLb1/chandan-shastri-YHk2-Bk-BCKx4-unsplash.jpg"
                        alt="Cover"
                        className="w-full h-full object-cover rounded-t-xl"
                    />
                </div>

                {/* Profile Picture (absolute) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-80 ">
                    <img
                        src={user?.photoURL}
                        alt="User Image"
                        className="w-52 h-52 rounded-full border-4 border-white shadow-lg"
                    />
                </div>

                {/* Content (blank portion) */}
                <div className="w-full h-50  rounded-b-lg shadow">
                    {/* Add content here */}
                    <div className='text-center space-y-5 mt-45'>
                        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                        <p className="text-gray-500 text-xl">{user.email}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
