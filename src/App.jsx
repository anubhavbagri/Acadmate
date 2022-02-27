import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroHome from './Components/HeroHome';
import FeaturesHome from './Components/Features';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';

import './css/style.scss';

import AOS from 'aos';

import UploadForm from './pages/UploadForm';
import DownloadForm from './pages/DownloadForm';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

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
    <>
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
        <Route path="/profile" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
        <Route path="/upload" element={<PrivateRoute />}>
          <Route exact path="/upload" element={<UploadForm />} />
        </Route>
        <Route path="/download" element={<PrivateRoute />}>
          <Route exact path="/download" element={<DownloadForm />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
