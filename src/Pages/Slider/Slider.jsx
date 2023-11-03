import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles.css';
// import required modules
import { Pagination } from 'swiper/modules';


import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.webp'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import img1 from '../../assets/img1.jpeg'

const Slider = () => {
    return (
        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><div className='w-full h-96'>
            <img src={img2} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img3} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img4} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img5} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img6} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img7} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img8} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide><div className='w-full h-96'>
            <img src={img9} alt=""  className='w-full h-96' />
            </div></SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-96'>
            <img src={img1} alt=""  className='w-full h-96' />
            </div>
            </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;