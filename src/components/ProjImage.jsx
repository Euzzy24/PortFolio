// import React from 'react';

// const ProjImage = ({mainImage, overlappingImage, id}) => {
//     const isEven = id % 2 ==0;

//   return (
//     <div className="relative">
//              {/* Main Image */}
//              <img
//              src={mainImage.src || "placeholder.jpg"}
//              alt={mainImage.alt || "Main image"}
//              className="w-full h-full object-cover border border-black"
//              />
//              {/* Overlapping Image */}
//              <img
//              src={overlappingImage.src || "placeholder.jpg"}
//              alt={overlappingImage.alt || "Overlapping image"}
//              className={`absolute object-cover w-84 h-60 border border-black -bottom-40 ${isEven ? "-left-12" : "-right-12"}`}
//              />
    
//   </div>
//   )
// }

// export default ProjImage

import React from 'react';

const ProjImage = ({mainImage, overlappingImage, id}) => {
    const isEven = id % 2 == 0;

  return (
    <div className="relative">
        {/* Main Image */}
        <img
            src={mainImage.src || "placeholder.jpg"}
            alt={mainImage.alt || "Main image"}
            className="w-full h-full object-cover border border-black"
        />
        {/* Overlapping Image */}
        <img
            src={overlappingImage.src || "placeholder.jpg"}
            alt={overlappingImage.alt || "Overlapping image"}
            className={`absolute object-cover w-84 h-60 border border-black -bottom-40 ${isEven ? "-left-12" : "-right-12"} sm:block hidden`}
        />
    </div>
  )
}

export default ProjImage
