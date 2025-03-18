import React from 'react';

import './styles.css';

const CleanPhone = (props) => {

    const cleanPhone = props.phone?.replace(/\s+/g, '').replace('+', '')

    return (
        <React.Fragment>
            <a
            href={`tel:${cleanPhone}`}
            className={props.componentClass}
            >
                {props.phone}
            </a>
        </React.Fragment>
    );
};

export default CleanPhone;
