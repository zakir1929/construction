import React from 'react';

import styles from './styles.css';

const HomeSlide = (props) => {
  return (
    <React.Fragment>            
            <div
              className="position-relative overlay overlay-show overlay-op-7"
              style={{
                backgroundImage: `url('${props?.slide?.image?.path}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: '100%',
              }}
            >
              <div className="container position-relative z-index-3 h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-7 text-center">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                      <h1
                        className="text-color-light font-weight-extra-bold text-12-5 line-height-3 mb-2 "
                        data-aos="slide-up"
                        data-aos-delay={500}
                        data-plugin-options="{'minWindowWidth': 0}"
                      >
                        {props?.slide?.title}
                      </h1>

                        {props?.slide?.btn_text ? (
                          <a
                            href={props.slide.btn_text}
                            className="btn btn-light btn-outline btn-rounded text-color-light text-color-hover-dark font-weight-bold text-3 btn-px-5 py-3"
                            data-aos="zoom-in"
                            data-aos-delay={2500}
                            data-plugin-options="{'minWindowWidth': 0}"
                          >
                            {props.slide.btn_text}
                          </a>
                        ) : (
                          null
                        )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
    </React.Fragment>
  );
};

export default HomeSlide;
