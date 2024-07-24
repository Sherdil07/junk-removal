import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import './Testimonial.css';
import image1 from "../../assets/t-profile1.png"
import image2 from "../../assets/t-profile2.png"
import image3 from "../../assets/t-profile3.png"

function Testimonial() {
  return (
    <div className="testimonial-container">
      <h1 className="heading">Testimonials</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <img className="testimonial-image" src={image1} alt="John Doe" />
            <h3 className="testimonial-author">- John Doe</h3>
            <p className="testimonial-text">"This service is fantastic! Highly recommend to everyone."</p>
            
            <div className="testimonial-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img className="testimonial-image" src={image2} alt="Jane Smith" />
            <h3 className="testimonial-author">- Jane Smith</h3>
            <p className="testimonial-text">"Absolutely loved the experience. Will come back again."</p>
           
            <div className="testimonial-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img className="testimonial-image" src={image3} alt="Alex Johnson" />
            <h3 className="testimonial-author">- Alex Johnson</h3>
            <p className="testimonial-text">"Great customer service and very reliable."</p>
            
            <div className="testimonial-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img className="testimonial-image" src="https://via.placeholder.com/100" alt="Alex Johnson" />
            <h3 className="testimonial-author">- Alex Johnson</h3>
            <p className="testimonial-text">"Great customer service and very reliable."</p>
            
            <div className="testimonial-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img className="testimonial-image" src="https://via.placeholder.com/100" alt="Alex Johnson" />
            <h3 className="testimonial-author">- Alex Johnson</h3>
            <p className="testimonial-text">"Great customer service and very reliable."</p>
            
            <div className="testimonial-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components with testimonials as needed */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonial;
