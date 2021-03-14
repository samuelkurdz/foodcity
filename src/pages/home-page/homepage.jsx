import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCardList from '../../components/guide-container/guide-container';
import MenuPreview from '../../components/preview-menu/preview-menu';
import ServiceHoursList from '../../components/service-hours/service-hours';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCardList />
      <ServiceHoursList />
      <MenuPreview />
    </div>
  );
}

export default HomePage;
