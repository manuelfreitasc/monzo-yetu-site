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

interface SliderCardProp {
    mLeft: string;
    desc: string;
    title: string;
    image: string;
}

function SliderCard({ mLeft, title, desc, image }: SliderCardProp) {
    return (
        <div className={`md:h-[300px] p-9 rounded-lg bg-white flex flex-col gap-6 border border-[#edececee] ${mLeft}`}>
            <RiDoubleQuotesL size={44} className=" text-[#f793217c]" />
            <p className=' text-base font-light'>{desc}</p>
            <div className='w-full flex items-center gap-5'>
                <img src={image} alt="" className='w-20 rounded-full' />
                <div>
                    <strong className='text-lg'>{title}</strong>
                    <div className='flex gap-2 mt-1'>
                        <AiFillStar size={16} className="text-[#F79421]" />
                        <AiFillStar size={16} className="text-[#F79421]" />
                        <AiFillStar size={16} className="text-[#F79421]" />
                        <AiFillStar size={16} className="text-[#F79421]" />
                        <AiFillStar size={16} className="text-[#F79421]" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SliderCard
