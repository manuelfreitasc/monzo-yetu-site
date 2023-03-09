import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  BsArrowLeft,
  BsArrowRight,
  BsCurrencyDollar,
  BsDownload,
  BsFacebook,
  BsFileEarmarkMinus,
} from "react-icons/bs";
import { BiArrowToRight, BiDollarCircle } from "react-icons/bi";

import { Link } from "react-scroll";
import Carousel from "../../components/Carousel";

import "react-multi-carousel/lib/styles.css";
import CarouselHeader from "../../components/CarouselHeader";
import { IoMdAdd } from "react-icons/io";
import bgDesktop from "../../assets/desktop.svg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiTwotoneSetting,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import SliderCard from "../../components/SlideCard";

function Chack() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.03646 13.9792C5.69757 13.9792 5.37986 13.9258 5.08333 13.819C4.78681 13.714 4.51146 13.5344 4.25729 13.2802L0.698957 9.72187C0.232985 9.2559 0 8.66285 0 7.94271C0 7.22257 0.232985 6.62951 0.698957 6.16354C1.16493 5.69757 1.75798 5.46458 2.47812 5.46458C3.19826 5.46458 3.79132 5.69757 4.25729 6.16354L6.03646 7.94271L13.2802 0.698959C13.7462 0.232987 14.3392 0 15.0594 0C15.7795 0 16.3726 0.232987 16.8385 0.698959C17.3045 1.16493 17.5375 1.75799 17.5375 2.47813C17.5375 3.19827 17.3045 3.79132 16.8385 4.25729L7.81562 13.2802C7.56146 13.5344 7.28611 13.714 6.98958 13.819C6.69306 13.9258 6.37535 13.9792 6.03646 13.9792Z"
        fill="#283990"
      />
    </svg>
  );
}

function AccessManagementIcon({ sizeH = 44, sizeW = 44 }) {
  return (
    <svg
      width={sizeH}
      height={sizeW}
      viewBox="0 0 63 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 6.625C26.5572 6.62482 21.7253 8.08983 17.6149 10.8349C13.5044 13.58 10.3 17.4819 8.40639 22.0476C6.51283 26.6133 6.01517 31.6378 6.97629 36.4863C7.93742 41.3347 10.3142 45.7894 13.8063 49.2875C14.3918 49.8743 14.7203 50.6697 14.7194 51.4986C14.7185 52.3276 14.3884 53.1223 13.8016 53.7078C13.2148 54.2934 12.4194 54.6218 11.5905 54.6209C10.7615 54.6201 9.96682 54.2899 9.38127 53.7031C6.48174 50.8046 4.18265 47.3625 2.61574 43.5739C1.04883 39.7853 0.244904 35.7248 0.250024 31.625C0.250024 14.3656 14.2406 0.375 31.5 0.375C48.7594 0.375 62.75 14.3656 62.75 31.625C62.7551 35.7248 61.9512 39.7853 60.3843 43.5739C58.8174 47.3625 56.5183 50.8046 53.6188 53.7031C53.0332 54.2899 52.2386 54.6201 51.4096 54.6209C50.5806 54.6218 49.7853 54.2934 49.1985 53.7078C48.6117 53.1223 48.2815 52.3276 48.2806 51.4986C48.2798 50.6697 48.6082 49.8743 49.1938 49.2875C52.6859 45.7894 55.0626 41.3347 56.0238 36.4863C56.9849 31.6378 56.4872 26.6133 54.5937 22.0476C52.7001 17.4819 49.4956 13.58 45.3852 10.8349C41.2747 8.08983 36.4428 6.62482 31.5 6.625ZM31.5 25.375C29.8424 25.375 28.2527 26.0335 27.0806 27.2056C25.9085 28.3777 25.25 29.9674 25.25 31.625C25.25 33.2826 25.9085 34.8723 27.0806 36.0444C28.2527 37.2165 29.8424 37.875 31.5 37.875C33.1576 37.875 34.7473 37.2165 35.9194 36.0444C37.0915 34.8723 37.75 33.2826 37.75 31.625C37.75 29.9674 37.0915 28.3777 35.9194 27.2056C34.7473 26.0335 33.1576 25.375 31.5 25.375ZM19 31.625C18.9996 29.5692 19.5062 27.545 20.475 25.7317C21.4438 23.9185 22.8449 22.3722 24.5541 21.2298C26.2633 20.0874 28.2279 19.3843 30.2739 19.1826C32.3198 18.981 34.3838 19.287 36.2832 20.0737C38.1826 20.8604 39.8586 22.1034 41.1628 23.6926C42.4669 25.2817 43.359 27.1681 43.76 29.1844C44.1609 31.2008 44.0584 33.2849 43.4614 35.2522C42.8644 37.2194 41.7914 39.009 40.3375 40.4625C40.0472 40.7528 39.8169 41.0975 39.6597 41.4769C39.5026 41.8562 39.4217 42.2628 39.4217 42.6734C39.4217 43.084 39.5026 43.4906 39.6597 43.87C39.8169 44.2493 40.0472 44.594 40.3375 44.8844C40.9239 45.4708 41.7192 45.8002 42.5485 45.8002C42.9591 45.8002 43.3657 45.7193 43.745 45.5622C44.1244 45.405 44.4691 45.1747 44.7594 44.8844C47.3818 42.2622 49.1676 38.9213 49.8912 35.2841C50.6148 31.6469 50.2436 27.8768 48.8244 24.4507C47.4053 21.0245 45.0021 18.096 41.9187 16.0357C38.8352 13.9754 35.21 12.8757 31.5016 12.8757C27.7931 12.8757 24.168 13.9754 21.0845 16.0357C18.0011 18.096 15.5978 21.0245 14.1787 24.4507C12.7596 27.8768 12.3884 31.6469 13.112 35.2841C13.8355 38.9213 15.6214 42.2622 18.2438 44.8844C18.5341 45.1745 18.8788 45.4046 19.258 45.5616C19.6373 45.7185 20.0438 45.7992 20.4543 45.7991C20.8647 45.7989 21.2711 45.7179 21.6503 45.5607C22.0295 45.4035 22.3739 45.1732 22.6641 44.8828C22.9542 44.5925 23.1843 44.2478 23.3413 43.8685C23.4982 43.4893 23.5789 43.0828 23.5788 42.6723C23.5786 42.2619 23.4976 41.8555 23.3404 41.4763C23.1832 41.0971 22.9529 40.7526 22.6625 40.4625C21.4995 39.3037 20.5771 37.9263 19.9486 36.4096C19.32 34.8929 18.9976 33.2668 19 31.625Z"
        fill="#CED6FF"
      />
    </svg>
  );
}

function LandingPage() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <header
        className={`w-full h-[100vh] bg-[url('assets/desktop.svg')] bg-no-repeat bg-cover bg-right flex flex-col justify-between overflow-hidden`}
      >
        <div className="container mx-auto px-8 my-8 min-[900px]:rounded-[20px] min-[900px]:bg-[url('assets/header-desktop.svg')] bg-no-repeat bg-cover">
          {/* nav desktop */}
          <div className="w-full max-[900px]:hidden flex min-[900px]:items-center  justify-between pt-2 pb-2 max-[900px]:flex-col max-[900px]:gap-7">
            <img src="logo.svg" alt="" className="max-[900px]:w-[180px]" />
            <ul className="ml-48 w-full flex gap-1 items-center max-[900px]:hidden">
              <Link
                to="section0"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Principal
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Sobre App
              </Link>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Módulos
              </Link>
              <Link
                to="section4"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Contactos
              </Link>
            </ul>
            <div className="max-[900px]:w-full flex gap-2 ">
              <button className="max-[900px]:w-full min-[900px]:w-52 p-1 h-12 border border-[#FFF] rounded-sm">
                Acessar agora
              </button>
              <button className="max-[900px]:w-full min-[900px]:w-52 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                Baixar Manual
                <BsDownload size={20} />
              </button>
            </div>
          </div>
          {/* nav mobile */}
          <div className="w-full  min-[900px]:hidden flex items-center  justify-between pt-2 pb-2 gap-6">
            <div className="w-full flex gap-2 ">
              <button className="w-full p-1 h-12 border border-[#FFF] rounded-sm text-[10px]">
                Acessar agora
              </button>
              <button className="w-full p-1 text-[10px] h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                Baixar Manual
                <BsDownload size={20} />
              </button>
            </div>
            <img src="logo.svg" alt="" className="max-[900px]:w-[100px]" />
          </div>
        </div>
        <div className="grid grid-cols-2  max-[900px]:grid-cols-1  container mx-auto min-[900px]:pl-8">
          <div className="min-[900px]:mt-52">
            <h1 className="text-center  min-[900px]:text-left min-[900px]:text-5xl text-3xl font-bold">
              Sistema de controle de acesso e gestão de condomínio
            </h1>
            <form
              action=""
              className="w-full max-[900px]:mt-1 min-[900px]:mt-20 max-[900px]:px-9 min-[900px]:justify-start flex  justify-center py-5"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Seu endereço de e-mail"
                  className="min-[900px]:w-96 min-[900px]:h-14 p-1 h-12 placeholder:text-[#4D4D4D] max-[900px]:placeholder:text-sm placeholder:text-lg placeholder:font-light indent-7 max-[900px]:indent-3"
                />
                <button className="w-28 p-1 min-[900px]:h-14 h-12 text-gray-50 bg-[#283990] flex items-center justify-center">
                  Entrar
                </button>
              </div>
            </form>
          </div>
          <div className="relative max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center">
            <div className="max-[900px]:w-[100px] max-[900px]:left-5 left-0 animate-bounce absolute bottom-48 max-[900px]:bottom-28">
              <img src="/2.svg" alt="" />
            </div>
            <img
              src="mo.png"
              className="justify-end max-[600px]:w-[300px] min-[900px]:hidden"
              alt=""
            />
            <img
              src="mobile-banner.png"
              className="justify-end max-[600px]:w-[300px] max-[900px]:hidden"
              alt=""
            />
            <div className="max-[900px]:w-[100px] max-[900px]:right-5 animate-bounce absolute max-[900px]:bottom-9 bottom-12 right-0">
              <img src="/1.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-[#EFF2FF]">
          <div className="flex p-9  gap-6 flex-col container mx-auto px-8  bg-[url('assets/modolo.svg')]  bg-cover bg-no-repeat">
            <h1 className="font-bold text-3xl">Nossos parceiros</h1>
            <div className="flex  items-center gap-6">
              <ul className="flex items-center w-full gap-5">
                <li className="font-medium ">Vereda das Flores</li>
                <div className="bg-gray-300 w-[1px] h-7"></div>
                <li className="font-medium ">Urbanização Boa Vida</li>
                <div className="bg-gray-300 w-[1px] h-7"></div>
                <li className="font-medium "> Rosa Linda</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full" id="section2">
          <div className="flex bg-[url('assets/left-top1.svg')] min-[900px]:gap-[300px] min-[900px]:justify-between pt-32 pb-20 items-center container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-5xl font-bold max-w-[900px] ">
                Monzo Yetu é o sistema ideal para o seu condomínio.
              </h1>
              <p className="max-w-[900px] min-[900px]:text-xl">
                O sistema permite controlar os acessos dos moradores, visitantes
                e porteiros em tempo real, tendo o estado alterado quando houver
                uma ação.
              </p>
              <div className="flex gap-12 mt-9  items-center">
                <button className="w-52 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                  Baixar Manual
                  <BsDownload size={20} />
                </button>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
            <div className="max-[900px]:hidden w-[80%] relative">
              <div className="left-0 -ml-[100px] w-[200px] cursor-pointer p-4 h-[180px] accesse rounded-lg hover:animate-none transition-all animate-bounce absolute bottom-20 max-[900px]:bottom-28">
                <div className="bg-white rounded-lg w-full h-full flex items-center justify-center flex-col gap-3">
                  <AccessManagementIcon />
                  <button className="w-32 h-9 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                    acessar
                  </button>
                </div>
              </div>
              <img src="girl.png" alt="" />
            </div>
          </div>
        </section>

        <section className="w-full   bg-[#EFF2FF]" id="section3">
          <div className="w-full h-full flex flex-col items-center  pt-20 pb-20 gap-2 container mx-auto px-8  bg-[url('assets/modolo.svg')]  bg-cover bg bg-no-repeat  ">
            <h1 className="text-3xl font-bold max-w-[900px] ">
              Módulos do Sistema
            </h1>
            <p className="max-w-[900px]">Todos os módulos do sistema</p>
            <div className="mt-12 grid  grid-cols-4 max-[900px]:grid-cols-2">
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b border-[#cbc7c7]">
                <img src="venda.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  G. de Venda e Imóvel
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="comunica.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  Gestão de Comunicação
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b border-[#cbc7c7]">
                <img src="suporte.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">Suporte</h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col  border-b border-[#cbc7c7]">
                <img src="vigilance.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">Vigilância</h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b border-[#cbc7c7]">
                <img src="cobranca.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  Gestão de Cobranças
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="residencia.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  Gestão de Residências
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r  border-[#cbc7c7]">
                <img src="acesso.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  Gestão de Acesso
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col   border-[#cbc7c7]">
                <img src="config.svg" alt="" />
                <h1 className="text-lg font-bold max-w-[900px] ">
                  Configurações
                </h1>
                <p className="max-w-[900px] text-base">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex bg-[url('assetsleft-top1.svg')] pt-32 pb-20 items-center gap-[200px] container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden w-full relative">
              <div className="left-0 -ml-[100px] w-[200px] cursor-pointer p-4  accesse rounded-lg hover:animate-none transition-all animate-bounce absolute bottom-20 max-[900px]:bottom-28">
                <img src="/phone.png" alt="" />
              </div>
              <img
                src="/woman-having-some-alone-time-home.png"
                alt=""
                className=""
              />
              <div className="right-0 -mr-[6px] w-[200px] cursor-pointer p-4  accesse rounded-lg hover:animate-none transition-all animate-bounce absolute bottom-20 max-[900px]:bottom-28">
                <img src="/qr.png" alt="" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-5xl font-bold  ">Gestão de Morador.</h1>
              <p className="max-w-[900px] min-[900px]:text-xl">
                Criação de códigos de acesso para visitantes e funcionários.
                Monitoramento dos agendamentos, entrada e saída dos funcionários
                afecto as sua residências. Controlo de entrada e saída dos
                funcionários afecto as suas residências.
              </p>
              <ul className="flex flex-col gap-2 ">
                <li className="flex items-center gap-2 min-[900px]:text-xl">
                  <Chack /> Código QR de acesso
                </li>
                <li className="flex items-center gap-2 min-[900px]:text-xl">
                  <Chack />
                  Cadastro de gregados
                </li>
                <li className="flex items-center gap-2 min-[900px]:text-xl">
                  <Chack />
                  Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2 min-[900px]:text-xl">
                  <Chack /> Agendar visita
                </li>
              </ul>
              <div className="flex gap-7 mt-9  items-center">
                <div className="flex gap-3  items-center">
                  <button>
                    <img src="google.svg" className="h-16" alt="" />
                  </button>
                  <button>
                    <img src="apple.svg" className="h-16" alt="" />
                  </button>
                </div>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full   bg-[#EFF2FF]">
          <div className="flex bg-[url('assets/left-top1.svg')] min-[900px]:gap-x-72 pt-32 pb-20 items-center  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-5xl font-bold max-w-[900px] ">
                Gestão de Porteiros
              </h1>
              <p className="max-w-[900px]  min-[900px]:text-xl">
                Melhoria no atendimento dos visitantes, funcionários afectos as
                residências e prestadores de serviços. Redução de custos com
                cadernos de apontamentos. Melhoria da imagem dos serviços da
                portaria.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2  min-[900px]:text-xl">
                  <Chack /> Gestão de visitantes
                </li>
                <li className="flex items-center gap-2  min-[900px]:text-xl">
                  <Chack /> Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2  min-[900px]:text-xl ">
                  <Chack /> Gestão de Moradores
                </li>
              </ul>
              <div className="flex gap-7 mt-9  items-center">
                <div className="flex gap-3  items-center">
                  <button>
                    <img src="google.svg" className="h-16" alt="" />
                  </button>
                  <button>
                    <img src="apple.svg" className="h-16" alt="" />
                  </button>
                </div>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
            <div className="max-[900px]:hidden w-[80%] relative">
              <div className="left-0 -ml-[100px] w-[200px] cursor-pointer p-4 h-[180px] accesse rounded-lg hover:animate-none transition-all animate-bounce absolute bottom-20 max-[900px]:bottom-28">
                <div className="bg-white rounded-lg w-full h-full flex items-center justify-center flex-col gap-3">
                  <AccessManagementIcon />
                  <span className="text-xs">Gestão de Comunicação</span>
                  <a className="w-32 h-9 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                    acessar
                  </a>
                </div>
              </div>
              <img src="man.png" alt="" />
            </div>
          </div>
        </section>

        <section className="w-full   ">
          <div
            className="flex bg-[url('assets/left-top1.svg')] pt-28 pb-20  flex-col  container mx-auto px-8  bg-no-repeat bg-cover  bg-left
         
          "
          >
            <div className="flex items-center justify-center gap-4 flex-col">
              <h1 className="text-5xl text-left font-bold max-w-[900px] ">
                Equipamentos Associados
              </h1>
              <p className="max-w-[900px]  min-[900px]:text-xl">
                Todos os equipamentos que funcionam com o sistema
              </p>
            </div>
            <div className="mt-20 grid gap-6  grid-cols-2  max-[900px]:grid-flow-row   max-[900px]:grid-cols-1 ">
              <div className="w-full flex rounded-lg  h-[27rem] p-9 text-center  items-center justify-center flex-col bg-[#EFF2FF] relative">
                <img src="leitor.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex rounded-lg h-[27rem]  p-9 text-center  items-center justify-center flex-col bg-[#ABB9FF] relative">
                <img src="catraca.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 h-[27rem] text-center  items-center justify-center flex-col bg-[#ABB9FF] relative">
                <img src="leitor-phone.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 h-[27rem] text-center justify-center  items-center flex-col bg-[#EFF2FF] relative">
                <img src="cancela.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full  bg-[#EFF2FF] max-[900px]:hidden">
          <div className="flex  pt-28 pb-20  flex-col  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <Carousel toShow={2}>
              <SliderCard
                mLeft=""
                desc="Super, realmente é fácil e muito eficiente, 
                          em vez de ficar na fila a gastara tempo, 
                          esperando a minha vez de ser atendido, com a Control, foi mais tranquilo e sem estresse."
                title="Paulo Mendes"
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
                title="Fernando Jorge"
                image="/comemt2.png"
              />
            </Carousel>
          </div>
        </section>

        <section className="w-full   ">
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden w-3/4">
              <img src="man-expert.png" alt="" className="" />
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-5xl font-bold max-w-[200px] ">
                Perguntas Frequentes
              </h1>
              <Accordion open={open === 1}>
                <AccordionHeader
                  className=" font-normal  py-5 max-[900px]:text-base text-xl border-b border-[#9F9F9F]"
                  onClick={() => handleOpen(1)}
                >
                  What is Material Tailwind?
                  <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                    <IoMdAdd size={20} />
                  </button>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  How to use Material Tailwind?
                  <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                    <IoMdAdd size={20} />
                  </button>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  What can I do with Material Tailwind?
                  <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                    <IoMdAdd size={20} />
                  </button>
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full   bg-[#EFF2FF]" id="section3">
          <div className="w-full h-full flex flex-col items-center  pt-20 pb-20  gap-2 container mx-auto px-8  bg-[url('assets/modolo.svg')]  bg-cover bg bg-no-repeat  ">
            <h1 className="text-5xl font-bold max-w-[900px] ">Notícias</h1>
            <p className="max-w-[900px] min-[900px]:text-xl">
              Todas as Notícias sobre o app
            </p>
            <div className="flex items-center mt-10 gap-3 container"></div>

            <Carousel toShow={4}>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                    src="/woman-having-some-alone-time-homes.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                    src="/woman-having-some-alone-time-homes.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                    src="/woman-having-some-alone-time-homes.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                    src="/woman-having-some-alone-time-homes.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </main>

      <footer className="bg-[#01082E]">
        <section>
          <div
            id="content1"
            className="py-14 container mx-auto px-8 gap-5 grid grid-cols-3 max-[900px]:grid-cols-1"
          >
            <div className="flex p-10 liner gap-7 text-white items-center justify-center flex-col">
              <div className="w-24 h-24  flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <BsCurrencyDollar size={40} />
              </div>
              <p className="max-w-[900px] text-xl">Preços acessíveis</p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <FaPhoneAlt size={40} />
              </div>
              <p className="max-w-[900px] text-xl">
                Equipa dedicada para dar suporte24/7
              </p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <AiTwotoneSetting size={40} />
              </div>
              <p className="max-w-[900px] text-xl">
                Programação continua para adequar o sistema a novas realidades
              </p>
            </div>
          </div>
        </section>
        <section className="bg-transparent">
          <div
            id="content1"
            className="py-14 container mx-auto px-8 md:flex gap-6 justify-between"
          >
            <div>
              <h1 className="text-5xl text-white w-[200px] font-semibold">
                Nossos Parceiros
              </h1>
            </div>
          </div>
        </section>
        <section
          className="w-full  items-center justify-center  mt-0 gap-2 "
          id="section4"
        >
          <div
            id="contenst1"
            className="py-20 container mx-auto px-8 flex flex-col gap-24 md:flex-row md:justify-between"
          >
            <div className="w-full">
              <form action="" className="flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300  placeholder:text-lg placeholder:font-light"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-lg placeholder:font-light"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Telefone"
                      className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-lg placeholder:font-light"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <textarea
                    placeholder="Descrição"
                    className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-32 placeholder:text-gray-300 placeholder:text-lg placeholder:font-light"
                  ></textarea>
                </div>
                <button className="w-52 p-1 h-16 font-bold rounded text-black bg-[#A7B5FF] flex items-center justify-center">
                  Enviar
                </button>
              </form>
            </div>
            <div className="flex flex-col text-white  gap-10">
              <div className="flex flex-col">
                <strong className="mb-4  font-bold text-xl">Localização</strong>
                <p className=" font-light text-base max-w-sm">
                  Belas Business Park, Talatona, Edifício Cuanza Sul, 6º andar
                  Regus, sala 618
                </p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-xl">Número</strong>
                <p className=" font-light text-base">+244 925 097 773</p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-xl">E-mail</strong>
                <p className=" font-light text-base">geral@monzoyetu.com</p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div
            id="content1"
            className="py-3 container mx-auto px-8  flex items-center justify-between gap-24 max-[900px]:flex-col
             max-[900px]:gap-1"
          >
            <div className="flex items-center gap-4">
              <a href="">
                <AiFillInstagram size={33} className="text-[#283990]" />
              </a>
              <a href="">
                <BsFacebook size={30} className="text-[#283990]" />
              </a>
              <a href="">
                <AiFillLinkedin size={32} className="text-[#283990]" />
              </a>
            </div>
            <div>
              <p className="max-w-[900px] text-base text-center">
                O Sistema MonzoYetu é um produto da empresa
                <span className="text-[#283990]"> ControlJP.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default LandingPage;
