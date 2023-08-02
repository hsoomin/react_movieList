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
        spaceBetween={30}
        centeredSlides={true}
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
            "--swiper-pagination-color": "lavender",
            "--swiper-navigation-color": "turquoise",
        }}
        modules={[Autoplay,Pagination, Navigation]} 
        className="mySwiper">
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/RUBYGILLMAN_1920774.jpg")} alt="슬라이드 이미지1" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}> 
                <img src={require("../img/Concrete_Utopia_1920774.jpg")} alt="슬라이드 이미지2" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/Metamorphosis_1920774.jpg")} alt="슬라이드 이미지3" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/MonsterFamily2_1920774.jpg")} alt="슬라이드 이미지4" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Mainslide;