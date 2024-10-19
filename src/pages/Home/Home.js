import React from 'react';

import './styles.css';

import HomeSlider from '../../partials/HomeSlider/HomeSlider.js'
import HomeIntro from '../../partials/HomeIntro/HomeIntro.js'
import HomeAboutUs from '../../partials/HomeAboutUs/HomeAboutUs.js'
import HomeParallaxSection from '../../partials/HomeParallaxSection/HomeParallaxSection.js'

import FancyBoxGallery from '../../partials/FancyBoxGallery/FancyBoxGallery.js'
import Products from '../../partials/Products/Products.js'

const Home = props => {
  return (
        <React.Fragment>
            <div role="main" className="main">
                <HomeSlider />
                <HomeIntro />
                <HomeAboutUs />            
                <HomeParallaxSection />                
                <Products />            
                <FancyBoxGallery />            
            </div>
        </React.Fragment>
    );
};

export default Home;
