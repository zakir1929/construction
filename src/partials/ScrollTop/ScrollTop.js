import React from 'react';

import './styles.css';


const ScrollTop = props => {
  return (
    <React.Fragment>
            
        <a
          className="scroll-to-top hidden-mobile visible"
          href="#"
          aria-label="Scroll To Top"
        >
          <i className="fas fa-chevron-up" />
        </a>

    </React.Fragment>
  );
};

export default ScrollTop;
