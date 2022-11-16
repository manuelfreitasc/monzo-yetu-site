import { useState } from 'react'
// import Swiper core and required modules


import { Swiper as SwiperContent, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Swiper } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from '../../components/SlideCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';



function Slider() {
   
    const swiper = new Swiper('.swiper', {
        allowSlideNext: true,
        allowSlidePrev: true,
    
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
   
    function Prev() {
      swiper.slidePrev()
    }

    function Next() { 
       swiper.slideNext() 

    }


    return (
        <div>

            <SwiperContent
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                allowTouchMove={true}



            >
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>

                <div className="flex items-end justify-end">
                    <div className='mt-8 mr-6 flex gap-2'>
                        <button onClick={Prev} className=
                           "py-5 px-3  border-2 border-gray-400 flex  items-center justify-center h-0 hover:bg-white transition-all"
                        >
                            <AiOutlineArrowLeft size={24} />
                        </button>
                        <button onClick={Next} 
                        
                        className=" py-5 px-3 border-2 border-[#F79421] bg-[#F79421] flex  items-center justify-center h-0   transition-all">
                            <AiOutlineArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </SwiperContent>
        </div >
    );

}

export default Slider
