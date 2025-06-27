import React from 'react';

const Support = () => {
    return (
        <div>
            <section class="py-16 px-[7%] mx-auto">
                {/* Header */}
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold ">Need Help?</h1>
                    <p class="text-lg dark:text-gray-300 mt-2">
                        We're here to help with anything related to HobbyHub.
                    </p>
                </div>

                {/* Support Options  */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
                    {/* Contact Support  */}
                    <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-3xl mb-3 text-indigo-600 dark:text-indigo-400">📩</div>
                        <h3 class="text-xl font-semibold  dark:text-white mb-2">Contact Us</h3>
                        <p class="mb-4">Have an issue? Reach out to our team directly via email.</p>
                        <a href="mailto:support@hobbyhub.com" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            support@hobbyhub.com
                        </a>
                    </div>

                    {/* Report Bug  */}
                    <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-3xl mb-3 text-indigo-600 dark:text-indigo-400">🐞</div>
                        <h3 class="text-xl font-semibold  dark:text-white mb-2">Report a Bug</h3>
                        <p class=" mb-4">Found something broken? Let us know so we can fix it fast.</p>
                        <a href="/report" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Submit a bug report
                        </a>
                    </div>

                    {/* Community Help  */}
                    <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-3xl mb-3 text-indigo-600 dark:text-indigo-400">🤝</div>
                        <h3 class="text-xl font-semibold dark:text-white mb-2">Ask the Community</h3>
                        <p class="  mb-4">Get answers from other users in the HobbyHub forum.</p>
                        <a href="/community" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                            Visit Community Forum
                        </a>
                    </div>
                </div>

                {/* FAQ */}
                <h1 className='text-center text-2xl font-semibold my-5 md:my-10'>FAQ<br /> <span className='text-blue-500'>(Frequently Asked Questions)</span></h1>
                <div className="join join-vertical bg-base-100 w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">What is this website about?</div>
                        <div className="collapse-content text-sm">This website is for people who enjoy hobbies like hiking, photography, kayaking, and more. You’ll find tips, guides, and inspiration to enjoy your favorite activities.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">Do I need an account to use this website?</div>
                        <div className="collapse-content text-sm">Yes, you can explore all the public content with a single account. If you want to join groups creating an account is helpful.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">Are these activities beginner-friendly?</div>
                        <div className="collapse-content text-sm">Yes! We share easy guides for beginners so anyone can start learning and enjoying a hobby step by step.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold"> Can I join hobby groups with others?</div>
                        <div className="collapse-content text-sm">Yes! You can join featured groups and connect with people who share the same interests.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">How often is new content added?</div>
                        <div className="collapse-content text-sm">We try to add fresh blogs, tips, and group activities every week, so there's always something new to explore.</div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Support;