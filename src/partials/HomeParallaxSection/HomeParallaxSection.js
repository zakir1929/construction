import React from 'react';

import './styles.css';


const HomeParallaxSection = props => {
  return (
    <React.Fragment>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 p-0">
                <section className="section section-primary ps-4 pe-4 border-top-0 h-100 m-0">
                    <div className="row">
                        <div className="col py-5 my-5">
                            <div className="feature-box-info">
                                <h4 className="mb-2">Customer Support</h4>
                                <div className="divider divider-small">
                                    <hr />
                                </div>
                                <ul style={{ color: 'white', borderColor : 'white' }} className="list list-icons list-icons-style-2">
                                    <li><i style={{ color: 'white', borderColor : 'white' }} className="fas fa-check"></i> Fusce sit amet orci quis arcu vestibulum vestibulum.</li>
                                    <li><i style={{ color: 'white', borderColor : 'white' }} className="fas fa-check"></i> Fusce sit amet orci quis arcu vestibulum vestibulum.</li>
                                    <li><i style={{ color: 'white', borderColor : 'white' }} className="fas fa-check"></i> Fusce sit amet orci quis arcu vestibulum vestibulum.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-lg-6 p-0">
                <section
                className="parallax section section-parallax border-top-0 h-100 m-0"
                data-plugin-parallax=""
                data-plugin-options="{'speed': 1.5}"
                data-image-src="img/parallax/parallax-2.jpg"
                style={{ minHeight: 260, position: "relative", overflow: "hidden" }}
                >
                <div
                className="parallax-background"
                style={{
                backgroundImage: 'url("img/slides/1.jpg")',
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "180%",
                transform: "translate3d(0px, -75.4286px, 0px)",
                backgroundPositionX: "50%"
                }}
                />
                </section>
            </div>
        </div>
    </div>
        
    </React.Fragment>
  );
};

export default HomeParallaxSection;
