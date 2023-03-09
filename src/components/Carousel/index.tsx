import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactNode, useRef } from 'react'
import SliderCard from '../SlideCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Slick {
    children: ReactNode,
    toShow:any
}

export default function Carousel({toShow,children}: Slick) {
    const ref = useRef<any>(null);

    const handleNextSlide = () => {
        ref.current.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current.slickPrev();
    };

    const sliderSettings = {
      customPaging: function () {
        return <button className="w-9 h-9 rounded-[100%] bg-black"></button>;
      },

      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: toShow,
      vertical: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };


    return (
      <div className="content container mx-auto   gap-8">
        <Slider ref={ref} {...sliderSettings} className="flex gap-96">
         {children}
        </Slider>
      </div>
    );
}


