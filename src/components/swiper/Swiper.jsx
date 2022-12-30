/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image';
import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import newFront from '/public/wang/newFront1.jpeg';
import swiper1 from '/public/wang/swiper1.jpeg';
import swiper4 from '/public/wang/swiper4.jpg';
import swiper2 from '/public/wang/swiper21.jpeg';
import swiper3 from '/public/wang/swiper31.jpeg';
import swiper5 from '/public/wang/swiper51.jpeg';
import swiper6 from '/public/wang/swiper61.jpeg';

export default function Swipe() {
  return (
    <div className=''>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',

          // #D6F775
        }}
        effect='coverflow'
        slidesPerView={1.2}
        // spaceBetween={10}
        centeredSlides={true}
        slidesPerGroup={1}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 0, // Slide rotate in degrees
          stretch: 40, // Stretch space between slides (in px)
          depth: 300, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={newFront}
            // quality={75}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            objectFit='cover'
            height='100%'
            width='100%'
            src={swiper6}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
