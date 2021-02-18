import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCard from '../../components/guide-card/guide-card';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCard />
    </div>
  );
}

export default HomePage;
