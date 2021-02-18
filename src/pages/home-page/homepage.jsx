import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCardList from '../../components/guide-card-list/guide-card-list';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCardList />
    </div>
  );
}

export default HomePage;
