import React from 'react';
import { Helmet } from 'react-helmet-async';

import './styles.css';

import { useSelector } from 'react-redux';


const SEO = (props) => {

    const { setting, loading, error } = useSelector((state) => state.settingStore);

    return(
        <Helmet>
            <title>{`${props.title} - ${setting?.site_name}`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Home',
    description: 'This is the Home description',
    keywords: 'crane, training, professional',
};

export default SEO;
