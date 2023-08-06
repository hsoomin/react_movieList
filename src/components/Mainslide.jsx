import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './Mainslide.module.scss'


const Mainslide = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        style={{
            "--swiper-pagination-color": "#2cb67d",
            "--swiper-navigation-color": "#2cb67d",
            
        }}
        modules={[Autoplay,Pagination, Navigation]} 
        className="mySwiper">
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/slide1.png")} alt="슬라이드 이미지1" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}> 
                <img src={require("../img/slide2.jpg")} alt="슬라이드 이미지2" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/slide3.png")} alt="슬라이드 이미지3" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/slide4.png")} alt="슬라이드 이미지4" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Mainslide;