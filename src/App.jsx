import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';
import MainLayout from './Pages/MainLayout';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      <Route index element ={<HomePage/>} />
      <Route path='/about' element={<AboutMe />} />
  
    </Route>
    )
  );
  return (
    <div>
      <div class="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_65%,#63e_100%)]"></div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App


// import React, { useEffect } from 'react';
// import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
// import AboutMe from './Pages/AboutMe';
// import Home from './Pages/HomePage';
// import MainLayout from './Pages/MainLayout';

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // Scroll to the top when the route changes
//     window.scrollTo(0, 0);
//   }, [location]); // Triggered on route change

//   return null;
// };

// function App() {
//   return (
//     <Router>
//       <MainLayout />
//       <ScrollToTop />  {/* ScrollToTop component listens to route changes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutMe />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
