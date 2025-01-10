import React from 'react';

const CircleDesign = ({ size = 200, color = 'bg-gray-200', children }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full overflow-hidden shadow-lg ${color}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};

export default CircleDesign;
