import React from 'react';

import './styles.css';


const HomeIntro = props => {
  return (
    <React.Fragment>
        <div className="home-intro bg-primary mb-0">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <h2>
                  The fastest way to grow your business with the leader in{" "}
                </h2>
                <div className="get-started text-start text-lg-end ms-4">
                  <a
                    href="#"
                    className="contact-btn btn btn-borders btn-dark btn-lg text-3 font-weight-semibold px-4 py-3"
                  >
                    CONTACT US
                  </a>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default HomeIntro;
