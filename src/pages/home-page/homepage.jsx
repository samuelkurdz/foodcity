import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCardList from '../../components/guide-container/guide-container';
import HomePageMenu from '../../components/homepage-menu/homepage-menu';
import ServiceHoursList from '../../components/service-hours/service-hours';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCardList />
      <ServiceHoursList />
      <HomePageMenu />
    </div>
  );
}

export default HomePage;
