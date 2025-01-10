import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import arrow from '../assets/images/arrow.png';
import arrowdirect from '../assets/images/direct_arrow.png';
import profilePicture from '../assets/images/self.jpg';
import { fadeIn } from '../variants';

const AboutSection = () => {
  const [shadowStyle, setShadowStyle] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  

  // Create a ref for the profile image
  const profileImgRef = useRef(null);

  // Handle mouse movement and update the cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Update the shadow style based on mouse position
  useEffect(() => {
    const updateShadow = () => {
      if (profileImgRef.current) {
        const image = profileImgRef.current.getBoundingClientRect();
        const centerX = image.left + image.width / 2;
        const centerY = image.top + image.height / 2;

        const distanceX = mousePosition.x - centerX;
        const distanceY = mousePosition.y - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const spread = Math.min(distance / 5, 15);

        const angle = Math.atan2(distanceY, distanceX); 
        const shadowX = Math.cos(angle) * spread;
        const shadowY = Math.sin(angle) * spread;

        setShadowStyle({
          transition: 'box-shadow 0.1s ease-out',
          boxShadow: `${shadowX}px ${shadowY}px 10px 2px rgba(138, 43, 226, 0.8), 
                      ${shadowX * 1.5}px ${shadowY * 1.5}px 15px 4px rgba(138, 43, 226, 0.6), 
                      ${shadowX * 2}px ${shadowY * 2}px 20px 6px rgba(138, 43, 226, 0.4), 
                      ${shadowX * 3}px ${shadowY * 3}px 25px 8px rgba(138, 43, 226, 0.3)`
        });

        requestAnimationFrame(updateShadow);
      }
    };

    updateShadow();
  }, [mousePosition]);

  return (
    <section className="py-20">
      <motion.div
      variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3}
      }
      >
        <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Information */}
          <div className="text-center md:text-left">
            <h2 className="text-7xl py-2 font-bold text-gray-300  mb-6 font-chilanka">
              Join Me On My Journey...
            </h2>

            <p className="text-lg text-lightViolet leading-relaxed mb-6 font-chilanka">
            Hi, I’m an IT student on the verge of graduating!<br/>
            Currently, I’m diving into the world of React, a javascript library that’s sparked my curiosity. Join me on this exciting journey as I self-learn, experiment, and build projects using React with any other frameworks. Let’s grow and explore together!
            </p>
            {/* <p className="text-lg text-gray-300 leading-relaxed">
              My goal is to deliver impactful and meaningful solutions to complex problems,
              ensuring excellent user experiences and scalable designs. Let’s build something
              amazing together!
            </p> */}
            <div className="flex justify-end">
              <a href="mailto:merealkate@gmail.com">
                <button className="px-6 py-3 text-white hover:text-gradient hover:bg-gray-800 font-poppins rounded-full shadow-blackie flex items-center space-x-2 group">
                  <span>Connect</span>
                  <img
                    src={arrowdirect}
                    alt="arrow icon"
                    className="w-5 h-5 transform group-hover:animate-bounce-arrow"
                  />
                </button>
              </a>
            </div>

            

          </div>

          {/* Right Column */}
          <div
            className="flex flex-col items-center justify-center relative"
            onMouseMove={handleMouseMove}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                ref={profileImgRef}
                className="w-64 h-64 rounded-full border-4 border-gray-600 object-cover transform transition duration-300"
                style={shadowStyle}
                src={profilePicture}
                alt="Profile"
              />
            </div>

            {/* Gray Box Positioned Below the Image */}
            <div className="relative mt-6">
              {/* Gray Box */}
              <div className="bg-gray-800 rounded-lg w-64 h-7 relative">
                {/* Title slightly overlapping the top-left of the box */}
                <div className="absolute top-[-12px] left-[-5px] text-xl text-white font-poppins">
                  Mereal Kate C. Silvestre
                </div>
              </div>
            </div>
           


          </div> 
          <div className="hidden md:block">
            <div className="absolute top-[290px] right-[240px]"  style={{
          animation: "moveLeftRight 1s ease-in-out infinite", // Apply wiggle animation
        }}>
            <img 
                style={{ transform: 'rotate(-10deg)' }}
                className="h-64 w-48" 
                src={arrow} 
                alt="Arrow pointing to text" 
            />
            </div>
          </div>
          
        </div>
        <div className='flex justify-center text-center mt-5'>
            <p className="text-3xl text-gray-300 leading-relaxed mb-6 font-chilanka">
                Don't judge a book by it's cover... <br/>
                <span className="text-xl text-lightViolet">but let’s be honest, the cover totally sold it.</span>

            </p>
        </div>
      </div>
      <div className='px-16'>
         <hr className="my-6 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full" />
      </div>
      </motion.div>
      
    </section>
  );
};

export default AboutSection;
