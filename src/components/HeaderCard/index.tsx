import { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';

interface HeaderCardProp {
    title: string;
    desc: string;
}

function HeaderCard({ title, desc }: HeaderCardProp) {
    return (
        <div id='content' className="w-full">
            <h1 className="text-3xl md:text-4xl  w-[300px] md:w-[400px] font-semibold">
                {title}
            </h1>
            <p className="mt-6 text-base font-normal md:w-full">
                {desc}
            </p>
        </div>
    );

}


export default HeaderCard
