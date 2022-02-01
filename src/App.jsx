import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HeroHome from './Components/HeroHome';
import FeaturesHome from './Components/Features';
import Footer from './Components/Footer';

import './css/style.scss';

import AOS from 'aos';

import UploadForm from './pages/UploadForm';
import DownloadForm from './pages/DownloadForm';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <AuthProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="flex flex-col min-h-screen overflow-hidden">
              <main className="flex-grow">
                <HeroHome />
                <FeaturesHome />
              </main>
              <Footer />
            </div>
          }
        />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/upload" element={<UploadForm />} />
        <Route exact path="/download" element={<DownloadForm />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
