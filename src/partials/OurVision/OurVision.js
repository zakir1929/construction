import React from 'react';

import './styles.css';


const OurVision = props => {
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
                                    <span>We are Porto, We </span>
                                    <span
                                    className="word-rotator-words bg-primary"
                                    style={{ width: "122.234px" }}
                                    >
                                    <b className="is-visible">Create</b>
                                    <b className="is-hidden">Build</b>
                                    <b className="is-hidden">Develop</b>
                                    </span>
                                    <span> Solutions</span>
                                    </h1>
                                </div>
                                <div className="overflow-hidden mb-3">
                                    <p
                                    className="lead mb-0 appear-animation animated maskUp appear-animation-visible"
                                    data-appear-animation="maskUp"
                                    data-appear-animation-delay={200}
                                    style={{ animationDelay: "200ms" }}
                                    >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                    elementum, nulla vel pellentesque consequat, ante nulla
                                    hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="row mt-3 mb-5">
                            <div
                            className="col-md-4 appear-animation animated fadeInLeftShorter appear-animation-visible"
                            data-appear-animation="fadeInLeftShorter"
                            data-appear-animation-delay={800}
                            style={{ animationDelay: "800ms" }}
                            >
                            <h3 className="font-weight-bold text-4 mb-2">Our Mission</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                elementum, nulla vel pellentesque consequat, ante nulla hendrerit
                                arcu.
                            </p>
                        </div>
                        <div
                        className="col-md-4 appear-animation animated fadeIn appear-animation-visible"
                        data-appear-animation="fadeIn"
                        data-appear-animation-delay={600}
                        style={{ animationDelay: "600ms" }}
                        >
                            <h3 className="font-weight-bold text-4 mb-2">Our Vision</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                nulla vel pellentesque consequat, ante nulla hendrerit arcu.
                            </p>
                        </div>
                        <div
                        className="col-md-4 appear-animation animated fadeInRightShorter appear-animation-visible"
                        data-appear-animation="fadeInRightShorter"
                        data-appear-animation-delay={800}
                        style={{ animationDelay: "800ms" }}
                        >
                            <h3 className="font-weight-bold text-4 mb-2">Why Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                elementum, nulla vel consequat, ante nulla hendrerit arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
  );
};

export default OurVision;
