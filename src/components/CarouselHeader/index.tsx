import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactNode, useRef } from 'react'
import SliderCard from '../SlideCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import HeaderCard from '../HeaderCard'

interface Slick {
    children: ReactNode
}

export default function CarouselHeader() {
    const ref = useRef<any>(null);

    const handleNextSlide = () => {
     ref.current.slickNext();
    };
     
   const handlePrevSlide = () => {
     ref.current.slickPrev();
   };

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    }


    return (
        <div className='md:w-[390px] lg:w-[700px] px-8  '>
            <Slider ref={ref} {...sliderSettings} >
               <HeaderCard
                    title="Retira uma senha virtual e evite fila"
                    desc="Retira a sua senha de qualquer instituição e espera a sua vez sem estresse, no conforto da sua casa ou 
                    em qualquer sitio e recebe notificação no seu telemovel quando esta a chegar a sua vez."
                />
                  <HeaderCard
                    title="Retira uma senha virtual e evite fila"
                    desc="Retira a sua senha de qualquer instituição e espera a sua vez sem estresse, no conforto da sua casa ou 
                    em qualquer sitio e recebe notificação no seu telemovel quando esta a chegar a sua vez."
                />
            </Slider>

            <div className='max-[768px]:pt-7 flex gap-2  justify-start'>
                <button onClick={handlePrevSlide} className="py-5 px-3  border-2 border-gray-00 flex  items-center justify-center h-0 hover:bg-white transition-all">
                    <AiOutlineArrowLeft size={24} />
                </button>
                <button  onClick={handleNextSlide} className="py-5 px-3 border-2  border-[#F79421] bg-[#F79421] flex  items-center justify-center h-0  focus:brightness-90 transition-all">
                    <AiOutlineArrowRight size={24} />
                </button>
            </div>
        </div>
    )
}