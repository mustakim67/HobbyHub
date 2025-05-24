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
        <div className="relative rounded-xl">
          <img
            src="https://i.ibb.co/NnJC3vVc/rahul-dey-kz-Q6gb-TR-Fg-unsplash.jpg"
            alt="Hiking "
            className="w-full object-cover h-[500px] rounded-xl"
          />
          <div className="absolute top-1/3 left-10 text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 ">Explore the Trails</h2>
            <p className="text-lg md:text-xl">Hiking isn’t just a hobby it’s an adventure.<br/> Step outside and breathe freedom.</p>
          </div>
        </div>

        <div className="relative rounded-xl">
          <img
            src="https://i.ibb.co/GQ81jCKR/alex-guillaume-xou-Pt-ZUT9g-U-unsplash.jpg"
            alt="Photography"
            className="w-full object-cover h-[500px] rounded-xl"
          />
          <div className="absolute top-1/3 left-8  text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Capture Every Moment</h2>
            <p className="text-lg md:text-xl ">Turn passion into pictures. Photography transforms the way you see the world around you.</p>
          </div>
        </div>

        <div className="relative rounded-xl">
          <img
            src="https://i.ibb.co/KpZTjfb1/the-tampa-bay-estuary-program-KUU87l4-KSo-E-unsplash.jpg"
            alt="kayaking"
            className="w-full object-cover h-[500px] rounded-xl"
          />
          <div className="absolute top-1/3 left-8 text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Ride the Waves</h2>
            <p className="text-lg md:text-xl">Find thrill in the tides. Surfing is not just sport — it’s freedom and flow, all in one.</p>
          </div>
        </div>
      </Carousel>
    </div>
    <FeaturedGroups></FeaturedGroups>
    </>
    
  );
};

export default Home;
