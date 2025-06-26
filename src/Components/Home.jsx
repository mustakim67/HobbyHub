import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedGroups from './FeaturedGroups';

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
        <div className="relative rounded-xl h-[70dvh]">
          <img
            src="https://i.ibb.co/NnJC3vVc/rahul-dey-kz-Q6gb-TR-Fg-unsplash.jpg"
            alt="Hiking "
            className="w-full object-cover h-[70dvh] rounded-xl"
          />
          <div className="absolute top-1/3 left-10 text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 ">Explore the Trails</h2>
            <p className="text-lg md:text-xl">Hiking isn’t just a hobby it’s an adventure.<br/> Step outside and breathe freedom.</p>
          </div>
        </div>

        <div className="relative rounded-xl h-[70dvh]">
          <img
            src="https://i.ibb.co/GQ81jCKR/alex-guillaume-xou-Pt-ZUT9g-U-unsplash.jpg"
            alt="Photography"
            className="w-full object-cover h-[70dvh] rounded-xl"
          />
          <div className="absolute top-1/3 left-8  text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Capture Every Moment</h2>
            <p className="text-lg md:text-xl ">Turn passion into pictures. Photography transforms the way you see the world around you.</p>
          </div>
        </div>

        <div className="relative rounded-xl h-[70dvh]">
          <img
            src="https://i.ibb.co/KpZTjfb1/the-tampa-bay-estuary-program-KUU87l4-KSo-E-unsplash.jpg"
            alt="kayaking"
            className="w-full object-cover h-[70dvh] rounded-xl"
          />
          <div className="absolute top-1/3 left-8 text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Ride the Waves</h2>
            <p className="text-lg md:text-xl">Find thrill in the tides. Surfing is not just sport — it’s freedom and flow, all in one.</p>
          </div>
        </div>
      </Carousel>
    </div>
    <FeaturedGroups></FeaturedGroups>
    <div className="px-[7%] py-12">
  <section className="px-[7%] py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        <span className='text-blue-500'>Learn More</span> about your passion
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Read More →
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
            <a href="" className="text-blue-600 text-sm font-medium hover:underline">
              Read More →
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
              Read More →
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
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
    <h1 className='text-center text-2xl font-semibold my-5 md:my-10'>FAQ<br/> <span className='text-blue-500'>(Frequently Asked Questions)</span></h1>
  <div className="join join-vertical bg-base-100 w-full px-[7%]">
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
    </>
    
  );
};

export default Home;
