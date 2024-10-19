import React from 'react';

import './styles.css';


const WhoWeAre = props => {
  return (
    <React.Fragment>

        <section className="section section-height-3 bg-color-grey m-0 border-0">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 pb-sm-4 pb-lg-0 pe-lg-5 mb-sm-5 mb-lg-0">
                        <h2 className="text-color-dark font-weight-normal text-6 mb-2">
                            Who <strong className="font-weight-extra-bold">We Are</strong>
                        </h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim.
                            Nullam id varius nunc.{" "}
                        </p>
                        <p className="pe-5 me-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna
                            ex, et faucibus lacus venenatis eget
                        </p>
                    </div>
                    <div
                      className="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation animated fadeInLeftShorter appear-animation-visible"
                      data-appear-animation="fadeInRightShorter"
                      style={{ animationDelay: "100ms" }}
                    >
                      <img src="img/team/team-7.jpg" className="img-fluid mb-2" alt="" />
                    </div>
                </div>
            </div>
        </section>

        

    </React.Fragment>
  );
};

export default WhoWeAre;
