import React,{useEffect} from 'react';

import { useSelector } from 'react-redux';

import './styles.css';

import PageHeader from '../../partials/PageHeader/PageHeader.js'
import OurVision from '../../partials/OurVision/OurVision.js'
import Counter from '../../partials/Counter/Counter.js'
import WhoWeAre from '../../partials/WhoWeAre/WhoWeAre.js'
import SEO from '../../partials/SEO/SEO.js'


import ContactForm from '../../partials/ContactForm/ContactForm.js'

const AboutUs = props => {

    const { setting, loading, error } = useSelector((state) => state.settingStore);

    return (
        <React.Fragment>
            <SEO 
                title = {setting?.about_us_seo_title}
                description = {setting?.about_us_seo_description}
                keywords = {setting?.about_us_seo_keywords}
            />
            <div role="main" className="main">
                <PageHeader title={setting?.about_us_page_title} parentPage="Home" />
                <OurVision setting={setting} />
                <Counter setting={setting} />        
                <WhoWeAre setting={setting} />
            </div>
        </React.Fragment>
    );
};

export default AboutUs;
