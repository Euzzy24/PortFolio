import { motion } from 'framer-motion';
import React from 'react';
import images from '../assets/data/images.json';
import { fadeIn } from '../variants';
import CircleDesign from './CirleDesign';
import FeaturedProject from './FeaturedProject';

const Experience = () => {
  return (
    <div className=''>

        <motion.div 
        variants={fadeIn("up", 0.1)} // Adjusted fadeIn argument
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        >
        <div className='text-5xl flex justify-center items-center flex-col font-chilanka'>
            <h1 className='font-poppins text-gray-300'>
            Experiences
            </h1>
            <br/>
            <p className='text-xl text-gray-300'>
                I have used this tools on my previous projects and activities
            </p>
        </div>
        
      <div className="mt-3 flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          {images.logo.slice(0, 5).map((image) => (
            <CircleDesign key={image.id} size={50} color="bg-primary">
              <img
                src={image.src}
                alt={image.alt}
                className="w-8 h-8 object-cover"
              />
            </CircleDesign>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {images.logo.slice(5).map((image) => (
            <CircleDesign key={image.id} size={50} color="bg-primary">
              <img
                src={image.src}
                alt={image.alt}
                className="w-8 h-8 object-cover"
              />
            </CircleDesign>
          ))}
        </div>
      </div>
      </motion.div>
      <div className='container py-16 mx-auto px-6 lg:px-10' >
        <h6 className='font-poppins text-lightViolet'>
            Featured Projects <br/> <span className='text-2xl font-poppins font-semibold text-gray-300'>Sample Projects</span>
        </h6>
        <FeaturedProject/>
      </div>
    </div>
  );
};

export default Experience;
