import React from 'react';
import { BsFileEarmarkMinus } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
// import { Container } from './styles';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="">
            <header className="w-full bg-[#FFECD6]">
                <div className="max-[768px]:bg-[url('/header-bg-mobo.svg')]  bg-no-repeat bg-cover ">
                    <nav className='flex  items-center justify-between pt-9 px-8 container mx-auto'>
                        <div id='logo'>
                            <img src={Logo} alt="" />
                        </div>
                        <div id='actions' className=''>
                            <Link to="#" className="bg-[#F79421] py-2 px-5 flex gap-3">
                                
                               
                                <BsFileEarmarkMinus size={20} className="text-white text-base" /> Retirar senha virtual
                            </Link>
                        </div>
                    </nav>
                    <div className="container  mx-auto flex flex-col md:flex-row md:justify-between relative md:bg-[url('/desktop-header.svg')]  bg-no-repeat bg-contain bg-clip-border">
                        <div id='content' className="mt-24 px-8 md:py-12 w-fullss">
                            <h1 className="text-3xl md:text-4xl  w-[300px] md:w-[400px] font-semibold">
                                Retira uma senha
                                virtual e evite fila
                            </h1>
                            <p className="mt-6 text-base font-normal md:w-[500px]">
                                Retira a sua senha de qualquer instituição
                                e espera a sua vez sem estresse, no conforto da sua casa ou em
                                qualquer sitio e recebe notificação no seu telemovel quando esta a chegar a sua vez.
                            </p>
                            <div className='mt-5 flex gap-2 z-10'>
                                <a href="" className="py-5 px-3  border-2 border-white flex  items-center justify-center h-0 hover:bg-white transition-all">
                                    <AiOutlineArrowLeft size={24} />
                                </a>
                                <a href="" className="py-5 px-3 border-2 border-[#F79421] bg-[#F79421] flex  items-center justify-center h-0 hover:bg-transparent hover:border-white transition-all">
                                    <AiOutlineArrowRight size={24} />
                                </a>
                            </div>
                        </div>

                        <div id='caroucel' className='flex flex-row'>
                            <div className='mt-12 flex gap-2 z-10 absolute md:left-0 md:bottom-44 hidden'>
                                <a href="" className="py-5 px-3 ml-8 border-2 border-white flex  items-center justify-center h-0 hover:bg-white transition-all">
                                    <AiOutlineArrowLeft size={24} />
                                </a>
                                <a href="" className="py-5 px-3 border-2 border-[#F79421] bg-[#F79421] flex  items-center justify-center h-0 hover:bg-transparent hover:border-white transition-all">
                                    <AiOutlineArrowRight size={24} />
                                </a>
                            </div>
                            <img src="/your-phone.png" alt="" className="justify-end w-full md:w-[500px]" />
                        </div>
                    </div>

                </div>

            </header>
            <main>
                <section>
                    <div id='content' className="py-14 container mx-auto px-8">
                        <h1 className="text-3xl w-[230px] font-semibold">
                            Sistema de
                            gestão de filas
                        </h1>
                        <p className="mt-6 text-base font-normal">
                            O lugar certo para se evitar longas filas
                            nas instituições, super fácil e rápido.
                        </p>
                        <div className="grid grid-cols-2 mt-10 gap-4 md:grid-cols-4">
                            <div className="w-full px-5   rounded-lg bg-white flex flex-col items-start justify-center  py-5">
                                <img src="/arquive.svg" alt="" className='' />
                                <p className="text-base font-normal">
                                    Qual serviço está
                                    disponível
                                </p>
                            </div>
                            <div className="w-full px-5  rounded-lg bg-white flex flex-col items-start justify-center  py-5">
                                <img src="/calendar.svg" alt="" className='' />
                                <p className="text-base font-normal">
                                    Previsão de
                                    atendimento
                                </p>
                            </div>
                            <div className="w-full px-5  rounded-lg bg-white flex flex-col items-start justify-center  py-5">
                                <img src="/users.svg" alt="" className='' />
                                <p className="text-base font-normal">
                                    Quantas pessoas
                                    estão na fila
                                </p>
                            </div>
                            <div className="w-full px-5  rounded-lg bg-white flex flex-col items-start justify-center  py-5">
                                <img src="/notification.svg" alt="" className='' />
                                <p className="text-base font-normal">
                                    Notificação de
                                    3 pessoas
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-white'>
                    <div id='content1' className="py-12 md:flex items-center justify-between container mx-auto px-8  md:bg-[url('/desk-virtual.svg')]  bg-[url('/mobile-bg1.svg')] bg-no-repeat bg-cover md:bg-contain ">
                        <div className="order-last md:w-[700px]">
                            <h1 className="text-3xl w-[300px] font-semibold">
                                Senha virtual
                            </h1>
                            <p className="mt-6 text-base font-normal">
                                É muito fácil reservar o seu lugar, clicares em retirar senha virtual e depois selecionar a instituição que pretendes, confirmar
                                a locazação da instituição e  depois é só selecionar o tipo de serviço.
                            </p>
                            <button className="bg-[#F79421] py-3 rounded-sm px-5 flex gap-3 mt-9">
                                <BsFileEarmarkMinus size={20} className="text-white text-base" /> Retirar senha virtual
                            </button>
                        </div>
                        <div id='content-image2' className="max-[768px]:mt-24  order-first px-8 bg-[url('/bg-pc.svg')] bg-no-repeat bg-contain">
                            <img src="/pc.png" alt="" className='' />
                        </div>

                    </div>
                </section>
                <section className='bg-transparent'>
                    <div id='content2' className="py-14 md:flex items-center justify-between container mx-auto px-8 max-[768px]:bg-[url('/bg-pc2.svg')] bg-no-repeat bg-contain">
                        <div className="order-first md:w-[700px]">
                            <h1 className="text-3xl w-[300px] font-semibold">
                                Senha virtual
                            </h1>
                            <p className="mt-6 text-base font-normal">
                                É muito fácil reservar o seu lugar, clicares em retirar senha virtual e depois selecionar a instituição que pretendes, confirmar
                                a locazação da instituição e  depois é só selecionar o tipo de serviço.
                            </p>
                            <button className="bg-[#F79421] py-3 rounded-sm px-5 flex gap-3 mt-9">
                                <BsFileEarmarkMinus size={20} className="text-white text-base" /> Retirar senha virtual
                            </button>
                        </div>


                        <div id='content-image2' className="mt-24 order-last px-8 bg-[url('/bg-right-pc.svg')] bg-no-repeat bg-contain bg-right">
                            <img src="/pc.png" alt="" />
                        </div>

                    </div>
                    <div className="py-20 container mx-auto px-8 md:bg-[url('/desktop-bg.svg')]  bg-no-repeat">
                        <div className="w-full py-5 md:h-[220px]  flex items-center flex-row  gap-4  rounded-2xl bg-black relative">
                            <div className='h-full bg-slate-300 hidden md:block'>
                                <img src="/desktop-img.png" alt="" className="h-[300px] z-10 absolute bottom-0" />

                            </div>
                            <div className='md:w-full flex  items-center justify-center gap-9'>
                                <div className='flex'>
                                    <img src="/bank-icon.svg" alt="" className="md:h-[130px] max-[768px]:ml-3" />
                                    <div className="flex  flex-col items-center justify-center">
                                        <strong className='text-white text-xl'>+ 23</strong>
                                        <span className='text-white text-xs text-[#F79421]'>Instituições</span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img src="/card-icon.svg" alt="" className="md:h-[130px]" />
                                    <div className="flex  flex-col items-center justify-center">
                                        <strong className='text-white text-xl'>+ 23</strong>
                                        <span className='text-white text-xs text-[#F79421]'>Senhas</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="max-[768px]:bg-white md:bg-[url('/testemun.svg')] py-32  bg-no-repeat  bg-cover">

                    <div id='content1' className=" container mx-auto px-8 md:flex-row">

                        <div className="grid  grid-cols-1 md:grid-cols-2   gap-8  ">
                            <div className="w-full p-9  rounded-lg bg-white flex flex-col gap-6 border border-[#edececee]">
                                <RiDoubleQuotesL size={44} className=" text-[#f793217c]" />
                                <p className=' text-base font-light'>
                                    Super, realmente é fácil e muito eficiente, em vez de
                                    ficar na fila a gastara tempo, esperando a minha vez de ser
                                    atendido, com a Control, foi mais tranquilo e sem estresse.
                                </p>
                                <div className='w-full flex items-center gap-5'>
                                    <img src="/comemt1.png" alt="" className='w-20 rounded-full' />
                                    <div>
                                        <strong className='text-lg'>Paulo Mendes</strong>
                                        <div className='flex gap-2 mt-1'>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-9  rounded-lg bg-white flex flex-col gap-6 border border-[#edececee]">
                                <RiDoubleQuotesL size={44} className=" text-[#f793217c]" />
                                <p className=' text-base font-light'>
                                    Super, realmente é fácil e muito eficiente, em vez de
                                    ficar na fila a gastara tempo, esperando a minha vez de ser
                                    atendido, com a Control, foi mais tranquilo e sem estresse.
                                </p>
                                <div className='w-full flex items-center gap-5'>
                                    <img src="/comemt1.png" alt="" className='w-20 rounded-full' />
                                    <div>
                                        <strong className='text-lg'>Paulo Mendes</strong>
                                        <div className='flex gap-2 mt-1'>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                            <AiFillStar  size={24} className="text-[#F79421]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <section className='bg-transparent'>

                    <div id='content1' className="py-14 container mx-auto px-8 md:flex gap-6 justify-between">
                        <div>
                            <h1 className="text-3xl w-[200px] font-semibold">
                                Nossos
                                Parceiros
                            </h1>
                            <p className="mt-6 text-base font-normal">
                                Instituições que são assinantes na plataforma.
                            </p>
                        </div>

                        <div className='md:w-2/5 grid grid-cols-4   mt-10 gap-2 '>
                            <div className="px-2  rounded-lg bg-white flex flex-col items-center justify-center  py-5  shadow shadow-sm shadow-gray-400 ">
                                <img src="/BIC.svg" alt="" className='' />
                            </div>
                            <div className="px-2   rounded-lg bg-white flex flex-col items-center justify-center  py-5  shadow shadow-sm shadow-gray-400 ">
                                <img src="/BFA.svg" alt="" className='' />
                            </div>
                            <div className="px-2   rounded-lg bg-white flex flex-col items-center justify-center  py-5  shadow shadow-sm shadow-gray-400 ">
                                <img src="/BAI.svg" alt="" className='' />
                            </div>
                            <div className="px-4   rounded-lg bg-white flex flex-col items-center justify-center  py-3  shadow shadow-sm shadow-gray-400 ">
                                <img src="/GOV.svg" alt="" className='' />
                            </div>
                            <div className="px-2   rounded-lg bg-white flex flex-col items-center justify-center  py-5  shadow shadow-sm shadow-gray-400 ">
                                <img src="/AGT.svg" alt="" className='' />
                            </div>
                            <div className="px-2   rounded-lg bg-white flex flex-col items-center justify-center  py-5  shadow shadow-sm shadow-gray-400 ">
                                <img src="/ECONOMICO.svg" alt="" className='' />
                            </div>
                            <div className="rounded-lg bg-white flex flex-col items-center justify-center  py-3 shadow shadow-sm shadow-gray-400 ">
                                <img src="/BNI.svg" alt="" className='' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='w-full bg-[#FFECD6] items-center justify-center  mt-0 gap-2'>
                    <div id='content1' className="py-14 container mx-auto px-8 flex flex-col gap-9 md:flex-row md:justify-between">
                        <div className='flex flex-col  md:flex-row gap-16'>
                            <div className='flex flex-col'>
                                <strong className='mb-4 text-black font-bold text-base'>Contacto</strong>
                                <p className='text-black font-light text-base'>924 266 041</p>
                                <span className='text-black font-light text-base'>info@controljp.com</span>
                            </div>
                            <div className='flex flex-col'>
                                <strong className='mb-4 text-black font-bold text-base'>
                                    Localização
                                </strong>
                                <p className='text-black font-light text-base max-w-sm'>
                                    Belas Business Park, Talatona,
                                    Edifício Cuanza Sul, 6º andar
                                    Regus, sala 618
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#F79421] w-56 py-3 rounded-sm px-5 flex gap-3 mt-5">
                                <BsFileEarmarkMinus size={20} className="text-white text-base" /> Retirar senha virtual
                            </button>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default LandingPage;