import React from 'react';

import './styles.css';


const WhoWeAre = (props) => {

    let storage_url = process.env.REACT_APP_CMS_STORAGE_URL

    return (
        <React.Fragment>

            <section className="section section-height-3 bg-color-grey m-0 border-0">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 pb-sm-4 pb-lg-0 pe-lg-5 mb-sm-5 mb-lg-0">
                            <h2 className="text-color-dark font-weight-normal text-6 mb-2">
                                <span dangerouslySetInnerHTML={{ __html: props?.setting?.about_us_who_we_are_title }} ></span>
                            </h2>
                            <p className="lead">
                                {props?.setting?.about_us_who_we_are_subtitle}
                            </p>
                            <p className="pe-5 me-5">
                                {props?.setting?.about_us_who_we_are_content}
                            </p>
                        </div>
                        <div
                          className="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation animated fadeInLeftShorter appear-animation-visible"
                          data-appear-animation="fadeInRightShorter"
                          style={{ animationDelay: "100ms" }}
                        >
                            <img src={`${storage_url}${props?.setting?.about_us_who_we_are_image}`} className="img-fluid mb-2" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
  );
};

export default WhoWeAre;
