import React from 'react';

import './styles.css';


const OurVision = (props) => {
  return (
    <React.Fragment>
            
            <div className="container">
                <div className="row pt-5">
                    <div className="col">
                        <div className="row text-center pb-5">
                            <div className="col-md-9 mx-md-auto">
                                <div className="overflow-hidden mb-3">
                                    <h1
                                    className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation animated maskUp appear-animation-visible"
                                    data-appear-animation="maskUp"
                                    style={{ animationDelay: "100ms" }}
                                    >
                                    <span>{ props?.setting?.about_us_our_vision_title }</span>
                                    </h1>
                                </div>
                                <div className="overflow-hidden mb-3">
                                    <p
                                    className="lead mb-0 appear-animation animated maskUp appear-animation-visible"
                                    data-appear-animation="maskUp"
                                    data-appear-animation-delay={200}
                                    style={{ animationDelay: "200ms" }}
                                    >
                                        { props?.setting?.about_us_our_vision_subtitle }
                                    </p>
                                </div>
                            </div>
                    </div>

                    <div className="row mt-3 mb-5">
                        {props?.setting?.about_us_our_vision_sections.map((item, index) => (
                            <div
                                key={index}
                                className={`col-md-4 appear-animation animated fadeIn appear-animation-visible`}
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay={600}
                                style={{ animationDelay: "600ms" }}
                            >
                                <h3 className="font-weight-bold text-4 mb-2">{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    </React.Fragment>
  );
};

export default OurVision;
