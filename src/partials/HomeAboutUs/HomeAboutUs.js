import React from 'react';

import './styles.css';


const HomeAboutUs = props => {
  return (
    <React.Fragment>
            
<div className="container pt-5 home-about-us">
    <div className="row py-4 mb-2">
            <div className="col-md-6 pe-4">
                <div className="overflow-hidden">
                    <h2
                    className="text-color-dark font-weight-bold text-12 mb-2 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay={300}
                    style={{ animationDelay: "300ms" }}
                    >
                    Alice Doe
                    </h2>
                </div>

                <div className="divider divider-small">
                    <hr />
                </div>

                <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay={700}
                style={{ animationDelay: "700ms" }}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam{" "}
                <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo
                varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus
                sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam
                ac laoreet libero.
                </p>
                <p
                className="pb-3 appear-animation animated fadeInUpShorter appear-animation-visible"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay={800}
                style={{ animationDelay: "800ms" }}
                >
                Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis.
                Curabitur eget leo varius, elementum mauris eget, egestas quam.
                </p>
                <hr className="solid my-4 appear-animation animated fadeInUpShorter appear-animation-visible"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay={900}
                style={{ animationDelay: "900ms" }}
                />
                <div
                className="row align-items-center appear-animation animated fadeInUpShorter appear-animation-visible"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay={1000}
                style={{ animationDelay: "1000ms" }}
                >
                    <div className="col-lg-6 d-flex align-items-center justify-content-between">
                        <a href="#" className="btn btn-modern btn-dark mt-3">
                        Get In Touch
                        </a>
                        <a href="#" className="btn btn-modern btn-primary mt-3">
                        Hire Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-sm-8 col-md-5 col-lg-4 offset-sm-4 offset-md-5 offset-lg-2 position-relative mt-sm-5 image-container"
                style={{ top: "5rem" }}
                >
                <img
                src="img/generic/generic-corporate-3-1.jpg"
                className="img-fluid position-absolute d-none d-sm-block appear-animation animated expandIn appear-animation-visible"
                data-appear-animation="expandIn"
                data-appear-animation-delay={300}
                style={{ top: "10%", left: "-50%", animationDelay: "300ms" }}
                alt=""
                />
                <img
                src="img/generic/generic-corporate-3-2.jpg"
                className="img-fluid position-absolute d-none d-sm-block appear-animation animated expandIn appear-animation-visible"
                data-appear-animation="expandIn"
                style={{ top: "-33%", left: "-29%", animationDelay: "100ms" }}
                alt=""
                />
                <img
                src="img/generic/generic-corporate-3-3.jpg"
                className="img-fluid position-relative appear-animation mb-2 animated expandIn appear-animation-visible"
                data-appear-animation="expandIn"
                data-appear-animation-delay={600}
                alt=""
                style={{ animationDelay: "600ms" }}
                />
            </div>
    </div>

    <div className="featured-boxes featured-boxes-style-3 mt-5 pt-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="featured-box featured-box-primary featured-box-effect-3">
                    <div className="box-content">
                        <i className="icon-featured far fa-heart top-0" />
                        <h4 className="font-weight-normal text-5 mt-3">
                            Our <strong className="font-weight-extra-bold">Customers</strong>
                        </h4>
                        <p className="mb-0">
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="featured-box featured-box-secondary featured-box-effect-3">
                    <div className="box-content">
                        <i className="icon-featured far fa-file-alt top-0" />
                        <h4 className="font-weight-normal text-5 mt-3">
                            Well <strong className="font-weight-extra-bold">Documented</strong>
                        </h4>
                        <p className="mb-0">
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="featured-box featured-box-secondary featured-box-effect-3">
                    <div className="box-content">
                        <i className="icon-featured far fa-file-alt top-0" />
                        <h4 className="font-weight-normal text-5 mt-3">
                            Well <strong className="font-weight-extra-bold">Documented</strong>
                        </h4>
                        <p className="mb-0">
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

    </React.Fragment>
  );
};

export default HomeAboutUs;
