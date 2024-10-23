import React from 'react';

import './styles.css';

import HomeSlider from '../../partials/HomeSlider/HomeSlider.js'
import HomeIntro from '../../partials/HomeIntro/HomeIntro.js'
import HomeAboutUs from '../../partials/HomeAboutUs/HomeAboutUs.js'
import HomeParallaxSection from '../../partials/HomeParallaxSection/HomeParallaxSection.js'

import FancyBoxGallery from '../../partials/FancyBoxGallery/FancyBoxGallery.js'
import Divisions from '../../partials/Divisions/Divisions.js'

const Home = props => {
  return (
        <React.Fragment>
            <div role="main" className="main">
                <HomeSlider />
                <HomeIntro />
                <Divisions />            
                <HomeAboutUs />            
                <FancyBoxGallery />            
            </div>
        </React.Fragment>
    );
};

export default Home;
