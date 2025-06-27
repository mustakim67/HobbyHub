import React from 'react';
import { NavLink } from 'react-router';

const About = () => {
    return (
        <div>
            <section class="py-16 px-[7%]">
                <div class="mx-auto px-6">

                    <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 dark:text-white">
                        Welcome to <span class="text-indigo-600 dark:text-indigo-400">HobbyHub</span>
                    </h1>


                    <p class="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
                        A place where passion meets people. Post your hobbies, connect with others, and build something amazing together.
                    </p>


                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div class="rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                            <div class="text-4xl mb-4 text-indigo-500 dark:text-indigo-400">📝</div>
                            <h3 class="text-xl font-semibold mb-2 dark:text-white">Create & Share</h3>
                            <p class="">Easily create posts about your hobbies and share them with the community.</p>
                        </div>


                        <div class="rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                            <div class="text-4xl mb-4 text-indigo-500 dark:text-indigo-400">⚙️</div>
                            <h3 class="text-xl font-semibold mb-2 dark:text-white">Manage Posts</h3>
                            <p class="">Update, delete, or refine your hobby posts anytime with ease.</p>
                        </div>


                        <div class="rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition">
                            <div class="text-4xl mb-4 text-indigo-500 dark:text-indigo-400">🔍</div>
                            <h3 class="text-xl font-semibold mb-2 dark:text-white">Explore Community</h3>
                            <p class=" ">Browse other users' posts, get inspired, and find hobby buddies.</p>
                        </div>
                    </div>


                    <div class="mt-16 text-center">
                        <h2 class="text-3xl font-bold mb-4 dark:text-white">🎉 Meet at Real Events</h2>
                        <p class="text-lg max-w-xl mx-auto mb-6 dark:text-gray-300">
                            HobbyHub helps you join in-person hobby meetups. Connect, collaborate, and create memories with like-minded people near you.
                        </p>
                        <NavLink to={'/all-groups'}><button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition">
                            Explore Groups
                        </button></NavLink>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;