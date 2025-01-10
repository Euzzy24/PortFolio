import { motion } from 'framer-motion';
import React from "react";
import featured from "../assets/data/featured.json"; // Path to the JSON file
import { fadeIn } from "../variants";
import ProjectInfo from "./ProjectInfo";
import ProjImage from "./ProjImage";

const FeaturedProject = () => {
  return (
    <div className="flex flex-wrap">
      {featured.featuredProjects.map((project) => {
        
        const isEven = project.id % 2 == 0;
        return (
          <div key={project.id} className="relative grid grid-cols-2 gap-x-16 w-full h-auto overflow-visible border-transparent rounded-xl mb-10 py-12 pb-44 px-4 shadow-[0px_5px_10px_-5px_rgba(182,141,240,0.5)]">
            {isEven ? (
              <>
                <ProjectInfo 
                info={project.info}
                id={project.id}/>
                <motion.div
              variants={fadeIn("left", 0.1)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: false, amount: 0.7 }} 
              >
                  <ProjImage
                  mainImage={project.mainImage}
                  overlappingImage={project.overlappingImage}
                  id={project.id}
                  />
              </motion.div>
                
              </>
            ) : (
              <>
                <motion.div
              variants={fadeIn("right", 0.1)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: false, amount: 0.7 }} 
              >
                  <ProjImage
                  mainImage={project.mainImage}
                  overlappingImage={project.overlappingImage}
                  id={project.id}
                  />
              </motion.div>
                <ProjectInfo info={project.info}/>
              </>
            )}
           
        </div>
        );
      })}
    </div>
  );
};

export default FeaturedProject;
