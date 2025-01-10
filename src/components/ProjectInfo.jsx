import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../variants';
const ProjectInfo = ({info, id}) => {
    const isEven = id % 2 == 0;
  return (
    <div className='font-poppins'>
        {isEven ? (
            <motion.div
             variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }} 
            >
            <h2 className="text-xl font-bold text-left">{info.title || "Untitled Project"}</h2>
            <h6 className="text-md text-gray-600">{info.year}</h6>
            <div className="flex items-center justify-center h-full">
                <h6 className="text-md text-lightViolet text-justify font-chilanka">
                    {info.description || "No description available."}
                </h6>
            </div>
            </motion.div>
        ) : (
            <motion.div
            variants={fadeIn("right", 0.1)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: false, amount: 0.7 }} 
           >
            <h2 className="text-xl font-bold text-right">{info.title || "Untitled Project"}</h2>
            <h6 className="text-md text-gray-600 text-right">{info.year}</h6>
            <div className="flex items-center justify-center h-full">
                <h6 className="text-md text-lightViolet font-chilanka text-justify">
                    {info.description || "No description available."}
                </h6>
            </div>
        </motion.div>
        
        )}
      
    </div>
  )
}

export default ProjectInfo
