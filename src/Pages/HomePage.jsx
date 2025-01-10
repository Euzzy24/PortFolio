import React from 'react'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <>
        <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%_#000_40%, #63e_100%)]"></div>
        <div className="flex flex-col"> 
        {/* <Navbar/> */}
        <Hero/>
        <Experience/>
        <Contact/>
        </div>
        
    </>
    
  )
}

export default HomePage
