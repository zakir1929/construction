import React from 'react';

import './styles.css';


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


const HomeTestimonials = props => {
  return (
    <React.Fragment>

        <section
            className="section section-height-3 bg-color-grey border-0 m-0 appear-animation"
            data-aos="fade-in"
            >
            <div className="container">
                <div className="row">
                    <div
                        className="col appear-animation"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                        >

                        <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="my-swiper-testimonial"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                                        <div className="testimonial-author">
                                            <img
                                                src="img/clients/client-1.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                                />
                                        </div>
                                        <blockquote>
                                            <p className="text-color-dark text-5 line-height-5 mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                eget risus porta, tincidunt turpis at, interdum tortor.
                                                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Sociis natoque penatibus et magnis dis
                                                parturient montes, nascetur ridiculus mus. Fusce ante
                                                tellus, convallis non consectetur sed, pharetra nec ex.
                                            </p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p>
                                                <strong className="font-weight-extra-bold text-2">
                                                - John Smith. Okler
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                                        <div className="testimonial-author">
                                            <img
                                                src="img/clients/client-1.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                                />
                                        </div>
                                        <blockquote>
                                            <p className="text-color-dark text-5 line-height-5 mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                eget risus porta, tincidunt turpis at, interdum tortor.
                                                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Sociis natoque penatibus et magnis dis
                                                parturient montes, nascetur ridiculus mus. Fusce ante
                                                tellus, convallis non consectetur sed, pharetra nec ex.
                                            </p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p>
                                                <strong className="font-weight-extra-bold text-2">
                                                - John Smith. Okler
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

    </React.Fragment>
  );
};

export default HomeTestimonials;
