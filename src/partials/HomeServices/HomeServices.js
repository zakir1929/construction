import React from 'react';

import './styles.css';


const HomeServices = props => {
  return (
    <React.Fragment>
            
          <div className="container my-5 py-3" id="main">
            <div className="row pt-4">
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-user-following icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Customer Support</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus elit.
                      Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 appear-animation" data-aos="fade-in">
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-layers icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Sliders</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-calculator icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">HTML5</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-lg-3">
              <div className="col-lg-4">
                <div
                  className="feature-box feature-box-style-2 appear-animation"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <div className="feature-box-icon">
                    <i className="icon-star icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Icons</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus elit.
                      Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-box feature-box-style-2 appear-animation"
                  data-aos="fade-in"
                  data-aos-delay={100}
                >
                  <div className="feature-box-icon">
                    <i className="icon-drop icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Colors</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-mouse icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Buttons</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-lg-3">
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-left"
                data-aos-delay={400}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-screen-desktop icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Lightboxes</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus elit.
                      Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-in"
                data-aos-delay={200}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-energy icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Elements</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 appear-animation"
                data-aos="fade-right"
                data-aos-delay={400}
              >
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-social-youtube icons" />
                  </div>
                  <div className="feature-box-info">
                    <h4 className="font-weight-bold mb-2">Videos</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                      rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </React.Fragment>
  );
};

export default HomeServices;
