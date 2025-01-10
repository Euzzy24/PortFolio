import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ScrollToTop = () => {
        const location = useLocation();
      
        useEffect(() => {
          // Scroll to the top when the route changes
          window.scrollTo(0, 0);
        }, [location]); // Triggered on route change
      
        return null;
      };

const MainLayout = () => {

  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Outlet />
    </>
  )
}

export default MainLayout
