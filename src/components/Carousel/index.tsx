import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactNode, useRef } from 'react'
import SliderCard from '../SlideCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Slick {
    children: ReactNode
}

export default function Carousel() {
    const ref = useRef<any>(null);

    const handleNextSlide = () => {
        ref.current.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current.slickPrev();
    };

    const sliderSettings = {

        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
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
        <div className='content container mx-auto px-8  gap-8'>
            <Slider ref={ref} {...sliderSettings} >
                <SliderCard
                    mLeft=""
                    desc="Super, realmente é fácil e muito eficiente, 
                          em vez de ficar na fila a gastara tempo, 
                          esperando a minha vez de ser atendido, com a Control, foi mais tranquilo e sem estresse."
                    title='Paulo Mendes'
                    image="/comemt1.png"
                />

                <SliderCard
                    mLeft="ml-8"
                    desc="Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa
                          Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa.
                          "
                    title='Fernando Jorge'
                    image="/comemt2.png"
                />
                <SliderCard mLeft="ml-8" desc="" title='' image="/comemt1.png" />
                <SliderCard mLeft="ml-8" desc="" title='' image="/comemt1.png" />
                <SliderCard mLeft="ml-8" desc="" title='' image="/comemt1.png" />
            </Slider>



            <div className='mt-5 flex gap-2 z-10 justify-end'>
                <button onClick={handlePrevSlide} className="py-5 px-3  border-2 border-gray-00 flex  items-center justify-center h-0 hover:bg-white transition-all">
                    <AiOutlineArrowLeft size={24} />
                </button>
                <button onClick={handleNextSlide} className="py-5 px-3 border-2  border-[#F79421] bg-[#F79421] flex  items-center justify-center h-0  focus:brightness-90 transition-all">
                    <AiOutlineArrowRight size={24} />
                </button>
            </div>
        </div>
    )
}


