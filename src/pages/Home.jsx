import React from 'react';

// import Header from '../partials/Header';
import HeroHome from '../Components/HeroHome';
import FeaturesHome from '../Components/Features';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
