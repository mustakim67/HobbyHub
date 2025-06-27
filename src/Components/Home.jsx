import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedGroups from './FeaturedGroups';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <div className="px-[7%] mt-6 rounded-xl">
        <Carousel
          autoPlay
          interval={10000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
          swipeable
          emulateTouch
        >
          {/* Slide 1 */}
          <div className="relative rounded-xl h-[70dvh] overflow-hidden">
            <img
              src="https://i.ibb.co/KpjFFwsC/philipp-kammerer-6-Mxb-m-Z-Q8-E-unsplash.jpg"
              alt="Hiking"
              className="w-full object-cover h-[70dvh] rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl" />
            <div className="absolute top-1/2 left-30 transform -translate-y-1/2 text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Explore the Trails</h2>
              <p className="text-lg md:text-xl">
                Hiking isn’t just a hobby — it’s an adventure.<br />
                Step outside and breathe freedom.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative rounded-xl h-[70dvh] overflow-hidden">
            <img
              src="https://i.ibb.co/GQ81jCKR/alex-guillaume-xou-Pt-ZUT9g-U-unsplash.jpg"
              alt="Photography"
              className="w-full object-cover h-[70dvh] rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl" />
            <div className="absolute top-1/2 left-40 transform -translate-y-1/2 text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Capture Every Moment</h2>
              <p className="text-lg md:text-xl">
                Turn passion into pictures. Photography transforms<br />how you see the world around you.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative rounded-xl h-[70dvh] overflow-hidden">
            <img
              src="https://i.ibb.co/BKGTz70T/jeff-isaak-ow4-Qx-EMA-zc-unsplash.jpg"
              alt="Kayaking"
              className="w-full object-cover h-[70dvh] rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl" />
            <div className="absolute top-1/2 left-30 transform -translate-y-1/2 text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Ride the Waves</h2>
              <p className="text-lg md:text-xl">
                Find thrill in the tides. Kayaking is not just sport —<br />it’s freedom and flow, all in one.
              </p>
            </div>
          </div>
        </Carousel>

      </div>
      <FeaturedGroups></FeaturedGroups>
      <section className="px-[7%] py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          <span className='text-blue-500'>Learn More</span> about your passion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/*Card-1 */}
          <div className=" rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://i.ibb.co/NnJC3vVc/rahul-dey-kz-Q6gb-TR-Fg-unsplash.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Master the Trails</h3>
              <p className=" text-sm mb-4">
                Discover gear, safety tips, and scenic routes to ignite your hiking journey.
              </p>
              <a href="" className="text-blue-600 text-sm font-medium hover:underline">
                <Link to={'/explore-trails'}> Read More →</Link>
              </a>
            </div>
          </div>

          {/*Card-2 */}
          <div className=" rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://i.ibb.co/GQ81jCKR/alex-guillaume-xou-Pt-ZUT9g-U-unsplash.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Photography Basics</h3>
              <p className=" text-sm mb-4">
                Learn to capture life’s moments beautifully with beginner-friendly photography tips.
              </p>
              <a className="text-blue-600 text-sm font-medium hover:underline">
                <Link to={'/photography-basics'}>Read More →</Link>
              </a>
            </div>
          </div>

          {/*Card-3 */}
          <div className=" rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://i.ibb.co/KpZTjfb1/the-tampa-bay-estuary-program-KUU87l4-KSo-E-unsplash.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Kayaking for Beginners</h3>
              <p className=" text-sm mb-4">
                Ride through the water safely and smoothly with our beginner kayaking insights.
              </p>
              <a href="" className="text-blue-600 text-sm font-medium hover:underline">
                <Link to={'/kayaking'}>Read More →</Link>
              </a>
            </div>
          </div>

          {/*Card-4 */}
          <div className=" rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://i.ibb.co/QvG2r71z/eric-prouzet-1a-Yp7-IFk-HRM-unsplash.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Books vibe!</h3>
              <p className=" text-sm mb-4">
                Book is not just only a collection of words , it has an impact on our life.
              </p>
              <a href="" className="text-blue-600 text-sm font-medium hover:underline">
                <Link to={'/books-vibe'}>Read More →</Link>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full px-[7%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">✨ Success Stories</h2>
          <p className="mt-3 text-lg">
            Real users. Real impact. See how HobbyHub is transforming hobbies into friendships and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className=" dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition  border border-gray-300">
            <img src="https://i.ibb.co/nsx8ynsV/woman-9187786-1280.jpg" alt="Sara" className="w-18 h-18 rounded-full mb-4 mx-auto object-cover" />
            <p className="0 dark:text-gray-200 italic text-center">"I found my co-founder for an art startup right here on HobbyHub!"</p>
            <div className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-center">
              — Sara, Painter & Entrepreneur
            </div>
          </div>

          {/* Story 2 */}
          <div className=" dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-300 transition">
            <img src="https://i.ibb.co/bqfhmCM/my-image.jpg" alt="Arif" className="w-18 h-18 rounded-full mb-4 mx-auto object-cover" />
            <p className=" dark:text-gray-200 italic text-center">"Thanks to a local robotics group here, I won my first tech competition."</p>
            <div className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-center">
              — Arif, Student
            </div>
          </div>

          {/* Story 3 */}
          <div className=" dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition  border border-gray-300">
            <img src="https://i.ibb.co/KxMygwQB/woman-9187757-1280.jpg" alt="Nusrat" className="w-18 h-18 rounded-full mb-4 mx-auto object-cover" />
            <p className=" dark:text-gray-200 italic text-center">"HobbyHub events helped me make new friends after moving to a new city."</p>
            <div className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-center">
              — Nusrat, Photographer
            </div>
          </div>
        </div>
      </section>


      {/* Hobby chalelnge section */}
      <div className='px-[7%] py-16'>
        <section class="w-full p-12 border border-gray-300  rounded-xl">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold">🏆 Join a Hobby Challenge</h2>
            <p class="mt-3 text-lg">
              Push your limits with our monthly themed challenges — open to all skill levels!
            </p>
          </div>

          <div class="flex flex-col md:flex-row items-center justify-between gap-10">
            <div class="max-w-lg">
              <h3 class="text-xl font-semibold mb-2">This Month: "30 Days of Creativity"</h3>
              <p>
                Share something new you've created every day — from writing, sketching, to coding or cooking.
                Tag your posts to earn community badges and get featured!
              </p>
            </div>
            <Link to={'/all-groups'}><button class="mt-6 md:mt-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition">
              Join the Challenge
            </button></Link>

          </div>
        </section>
      </div>

    </>

  );
};

export default Home;
