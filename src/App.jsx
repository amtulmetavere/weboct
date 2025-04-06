import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/scrolltotop';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Hero from './components/Hero';
import Ourclients from './pages/Ourclients';
import Ourprojects from './pages/Ourprojects';
import Services from './pages/Services';
import React from 'react';
import { path } from 'framer-motion/client';

function App() {
  const routes = [
    { path: '/home', component: Home },
    { path: '/aboutus', component: Aboutus },
    { path: '/contactus', component: Contactus },
    { path: '/ourclients', component: Ourclients },
    { path: '/ourprojects', component: Ourprojects },
    {path: '/services', component: Services },

  ];

  return (
    <Router>
      <div className="bg-[#000000] min-h-screen">
        <Header />
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Hero />
                  <Component />
                </>
              }
            />
          ))}
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
