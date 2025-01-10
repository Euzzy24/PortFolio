import React from 'react'
import fb from "../assets/images/fb.png"
import github from "../assets/images/github.png"
import gmail from '../assets/images/gmail.png'
import CircleDesign from './CirleDesign'

const Contact = () => {
  return (
    <div className='font-poppins text-gray-300 container pb-12 mx-auto px-6 lg:px-10'>
      <h6 className='font-poppins text-2xl pb-2'>Contact</h6>
      
      <div className='flex justify-center gap-x-4 items-center pb-2'>
        <CircleDesign size={50} color='bg-primary'>
          <a href="mailto:merealkate@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src={gmail}
              alt="Gmail"
              className="w-8 h-8 object-cover"
            />
          </a>
        </CircleDesign>
        <CircleDesign size={50} color="bg-lightViolet">
          <a href="https://github.com/Euzzy24" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="GitHub"
              className="w-8 h-8 object-cover"
            />
          </a>
        </CircleDesign>
        <CircleDesign size={50} color="bg-primary">
          <a href="https://www.facebook.com/merealkate.silvestre.9" target="_blank" rel="noopener noreferrer">
            <img
              src={fb}
              alt="Facebook"
              className="w-8 h-8 object-cover"
            />
          </a>
        </CircleDesign>
      </div>
      <p className='font-chilanka pb-6 text-center'>If my qualifications align with your requirements and you believe I can contribute to your team’s success, <br/> please feel free to reach out to me at your convenience.</p>
    </div>
  )
}

export default Contact
