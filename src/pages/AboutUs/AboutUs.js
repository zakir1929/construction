import React,{useEffect} from 'react';

import './styles.css';

import PageHeader from '../../partials/PageHeader/PageHeader.js'
import OurVision from '../../partials/OurVision/OurVision.js'
import Counter from '../../partials/Counter/Counter.js'
import WhoWeAre from '../../partials/WhoWeAre/WhoWeAre.js'
import SEO from '../../partials/SEO/SEO.js'


const AboutUs = props => {


  return (
        <React.Fragment>
            <SEO 
                title = "About Us"
                description = "About Us"
                keywords = "Training, Team"
            />
            <div role="main" className="main">
                <PageHeader title="About" boldTitle="Us" parentPage="Home" />
                <OurVision />
                <Counter />        
                <WhoWeAre />
            </div>
        </React.Fragment>
    );
};

export default AboutUs;
