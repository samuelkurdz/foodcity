import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCardList from '../../components/guide-container/guide-container';
import MenuPreview from '../../components/preview-menu/preview-menu';
import ServiceHoursContainer from '../../components/service-hours-container/service-hours-container';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCardList />
      <ServiceHoursContainer />
      <MenuPreview />
    </div>
  );
}

export default HomePage;
