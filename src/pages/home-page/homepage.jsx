import React from 'react';
import Banner from '../../components/banner/banner';
import GuideCardList from '../../components/guide-card-list/guide-card-list';
import ServiceHoursList from '../../components/service-hours/service-hours';
import './homepage.scss';


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <GuideCardList />
      <ServiceHoursList />
    </div>
  );
}

export default HomePage;
