import React from 'react';
import edu from '../assets/images/edu.png';
import loc from '../assets/images/loc.png';
import profilePicture from '../assets/images/profile2.jpeg';

const AboutMe = () => {
  return (
    <div className="font-poppins text-gray-300 container pb-12 mx-auto px-6 py-5 lg:px-10">
      {/* About Header */}
      <h1 className="text-4xl font-bold text-center text-lightViolet mb-6 font-poppins">About Me</h1>

      {/* Profile Picture and Info */}
      <div className="grid grid-cols-2 gap-x-4 items-center mb-8">
        <div className='flex justify-end'>
           <img
          src={profilePicture}
          alt="Mereal Kate C. Silvestre"
          className="w-56 h-56 object-cover rounded-2xl border-4 border-lightViolet mb-4 transition-transform duration-300 hover:scale-110"
        />
        </div>
       <div className='flex flex-col gap-2'>
       <h2 className="text-2xl font-semibold text-white mb-2">Mereal Kate C. Silvestre</h2>
          <div className="flex gap-2 items-center">
            <img
              src={edu}
              className="object-contain p-2 w-10 h-10 rounded-full border-2 bg-lightViolet border-lightViolet"
            />
            <p className="text-lg text-center text-gray-100 mb-0">4th Year BS Information Technology</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={loc}
              className="object-contain p-2 w-10 h-10 rounded-full border-2 bg-lightViolet border-lightViolet"
            />
            <p className="text-lg text-center text-gray-100 mb-0">Central Mindanao University</p>
          </div>

       </div>
       
      </div>
      <div className='px-12'>
         <hr className="my-6 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full" />
      </div>

      {/* About Description */}
      <div className="text-justify mb-8 px-16">
        <p className="font-medium text-lg text-gray-200 leading-relaxed">
        Hello! I'm Mereal Kate, a 4th-year BS Information Technology student at Central Mindanao University. I never dreamed of being part of the emerging trends in the IT industry, but I believe that fate has brought me here. I chose IT out of necessity, but I stayed by choice as I learned to love it and continue to grow in it. I have developed a passion for technology and solving problems through code. I’m eager to learn and take on new challenges. I specialize in web development, with experience in both front-end and back-end technologies. Moreover, I have also been involved as a project manager and test for quality assurance.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-8 px-16">
        <h3 className="text-xl font-semibold text-center text-lightViolet mb-4 font-chilanka">Skills</h3>
        <ul className="list-none list-inside text-lg text-justify text-gray-100">
          <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Databases: MySQL, SQLite</li>
          <li>Version Control: Git, GitHub</li>
          <li>Project Management: Agile Methodologies, Stakeholder Communication, Time and Resource Allocation
          </li>
          <li>Others: API integration, problem-solving, teamwork</li>
        </ul>
      </div>

      {/* Achievements Section
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-center text-lightViolet mb-4 font-chilanka">Achievements</h3>
        <p className="text-lg text-center text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel nulla interdum, in egestas justo venenatis.</p>
      </div> */}

      {/* Contact Section */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4 text-lightViolet font-chilanka">Contact Me</h3>
        <p className="text-lg text-gray-100">Feel free to reach out to me via email at <a href="mailto:youremail@example.com" className="text-lightViolet hover:underline">merealkate@example.com</a> or connect with me on <a href="https://github.com/Euzzy24" target="_blank" className="text-lightViolet hover:underline">GitHub</a>.</p>
      </div>
    </div>
  );
};

export default AboutMe;
