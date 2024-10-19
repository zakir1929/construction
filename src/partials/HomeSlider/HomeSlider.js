import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './styles.css';

import HomeSlide from './HomeSlide';

// import Swiper core and required modules
import { Autoplay, EffectCreative, EffectFade, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';


const HomeSlider = () => {

 const [slides, setSlides] = useState([]);

  // Fetch slides data from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get('slides'); 
        setSlides(response.data); 
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);


  return (
    <React.Fragment>
        <Swiper
            modules={[Autoplay, EffectFade, EffectCreative, Pagination]}
            effect = {'fade'}
            loop={true}
            lazy={1}
            speed={2000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
            }}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="my-swiper"
        >

        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
                <HomeSlide slide={slide} />
            </SwiperSlide>
        ))}

        </Swiper>
    </React.Fragment>
  );
};

export default HomeSlider;
