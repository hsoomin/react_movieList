import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './Mainslide.module.scss'


const Mainslide = () => {
    return (
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        pagination={{
            clickable: true,
        }}
        style={{
            "--swiper-pagination-color": "#2cb67d",
            
        }}
        modules={[Pagination]} 
        className="mySwiper">
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img1.webp")} alt="슬라이드 이미지1" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}> 
                <img src={require("../img/img2.webp")} alt="슬라이드 이미지2" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img3.webp")} alt="슬라이드 이미지3" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img4.webp")} alt="슬라이드 이미지4" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img5.webp")} alt="슬라이드 이미지4" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img6.webp")} alt="슬라이드 이미지4" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src={require("../img/img7.webp")} alt="슬라이드 이미지4" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Mainslide;