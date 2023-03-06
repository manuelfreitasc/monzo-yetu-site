import React from "react";
import { BsCurrencyDollar, BsDownload, BsFacebook, BsFileEarmarkMinus } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";

import { Link } from "react-scroll";
import Carousel from "../../components/Carousel";

import "react-multi-carousel/lib/styles.css";
import CarouselHeader from "../../components/CarouselHeader";
import { IoMdAdd } from "react-icons/io";
import bgDesktop from "../../assets/desktop.svg";
import { AiFillInstagram, AiFillLinkedin, AiTwotoneSetting } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

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

function LandingPage() {
  return (
    <>
      <header
        className={`w-full h-[100vh] bg-[url('assets/desktop.svg')] bg-no-repeat bg-cover bg-right flex flex-col justify-between overflow-hidden`}
      >
        <div className="container mx-auto px-8 my-8 min-[900px]:rounded-[20px] min-[900px]:bg-[url('assets/header-desktop.svg')] bg-no-repeat bg-cover">
          <div className="w-full flex min-[900px]:items-center  justify-between pt-2 pb-2 max-[900px]:flex-col max-[900px]:gap-7">
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
        </div>
        <div className="grid grid-cols-2  max-[900px]:grid-cols-1  container mx-auto min-[900px]:pl-8">
          <div className="min-[900px]:mt-52">
            <h1 className="text-center  min-[900px]:text-left min-[900px]:text-5xl text-3xl font-bold">
              Sistema de controle de acesso e gestão de condomínio
            </h1>
            <form
              action=""
              className="w-full max-[900px]:mt-1 min-[900px]:mt-24 max-[900px]:px-9 min-[900px]:justify-start flex  justify-center py-5"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Seu endereço de e-mail"
                  className="min-[900px]:w-96 p-1 h-12 placeholder:text-[#4D4D4D] placeholder:text-xl placeholder:font-light indent-7 max-[900px]:indent-3"
                />
                <button className="w-20 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center">
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
              src="mo.svg"
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
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Monzo Yetu é o sistema ideal para oseu condomínio.
              </h1>
              <p className="max-w-[900px]">
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
            <div className="max-[900px]:hidden">
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
                <h1 className="text-sm font-bold max-w-[900px] ">
                  G. de Venda e Imóvel
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="comunica.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Comunicação
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b border-[#cbc7c7]">
                <img src="suporte.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">Suporte</h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col  border-b border-[#cbc7c7]">
                <img src="vigilance.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">Vigilância</h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b border-[#cbc7c7]">
                <img src="cobranca.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Cobranças
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="residencia.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Residências
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r  border-[#cbc7c7]">
                <img src="acesso.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Acesso
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col   border-[#cbc7c7]">
                <img src="config.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Configurações
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores,
                  visitantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex bg-[url('assetsleft-top1.svg')] pt-32 pb-20 items-center gap-64 container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden">
              <img src="morador.png" alt="" className="" />
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Gestão de Morador.
              </h1>
              <p className="max-w-[900px]">
                Criação de códigos de acesso para visitantes e funcionários.
                Monitoramento dos agendamentos, entrada e saída dos funcionários
                afecto as sua residências. Controlo de entrada e saída dos
                funcionários afecto as suas residências.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Código QR de acesso
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack />
                  Cadastro de gregados
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack />
                  Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2 text-sm">
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
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Gestão de Porteiros
              </h1>
              <p className="max-w-[900px]">
                Melhoria no atendimento dos visitantes, funcionários afectos as
                residências e prestadores de serviços. Redução de custos com
                cadernos de apontamentos. Melhoria da imagem dos serviços da
                portaria.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Gestão de visitantes
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2 text-sm ">
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
            <div className="max-[900px]:hidden">
              <img src="man.png" alt="" />
            </div>
          </div>
        </section>
        <section className="w-full   ">
          <div
            className="flex bg-[url('assets/left-top1.svg')] pt-28 pb-20  flex-col  container mx-auto px-8  bg-no-repeat bg-cover  bg-left
         
          "
          >
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-3xl text-center font-bold max-w-[900px] ">
                Equipamentos Associados
              </h1>
              <p className="max-w-[900px]">
                Todos os equipamentos que funcionam com o sistema
              </p>
            </div>
            <div className="mt-20 grid gap-6  grid-cols-2  max-[900px]:grid-flow-row   max-[900px]:grid-cols-1 ">
              <div className="w-full flex rounded-lg  p-9 text-center  items-center flex-col bg-[#EFF2FF] relative">
                <img src="leitor.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex rounded-lg  p-9 text-center  items-center flex-col bg-[#ABB9FF] relative">
                <img src="catraca.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 text-center  items-center flex-col bg-[#ABB9FF] relative">
                <img src="leitor-phone.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  G. de Venda e Imóvel
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 text-center  items-center flex-col bg-[#EFF2FF] relative">
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
            <Carousel />
          </div>
        </section>

        <section className="w-full   ">
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center gap-64 container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden">
              <img src="man-expert.png" alt="" className="w-[770px]" />
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[200px] ">
                Perguntas Frequentes
              </h1>

              <ul className="flex flex-col gap-2">
                <li className="flex  justify-between w-full py-3 items-center gap-2 text-base border-b border-[#9F9F9F]">
                  Código QR de acesso
                  <a
                    href=""
                    className="p-2  text-center text-white bg-[#283990] rounded-[100%]"
                  >
                    <IoMdAdd size={20} />
                  </a>
                </li>
                <li className="flex  justify-between w-full py-3 items-center gap-2 text-base border-b border-[#9F9F9F]">
                  Código QR de acesso
                  <a
                    href=""
                    className="p-2  text-center text-white bg-[#283990] rounded-[100%]"
                  >
                    <IoMdAdd size={20} />
                  </a>
                </li>
                <li className="flex  justify-between w-full py-3 items-center gap-2 text-base border-b border-[#9F9F9F]">
                  Código QR de acesso
                  <a
                    href=""
                    className="p-2  text-center text-white bg-[#283990] rounded-[100%]"
                  >
                    <IoMdAdd size={20} />
                  </a>
                </li>
                <li className="flex  justify-between w-full py-3 items-center gap-2 text-base border-b border-[#9F9F9F]">
                  Código QR de acesso
                  <a
                    href=""
                    className="p-2  text-center text-white bg-[#283990] rounded-[100%]"
                  >
                    <IoMdAdd size={20} />
                  </a>
                </li>
              </ul>
            </div>
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
              <p className="max-w-[900px]">Preços acessíveis</p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <FaPhoneAlt size={40} />
              </div>
              <p className="max-w-[900px]">
                Equipa dedicada para dar suporte24/7
              </p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <AiTwotoneSetting size={40} />
              </div>
              <p className="max-w-[900px]">
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
              <h1 className="text-3xl text-white w-[200px] font-semibold">
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
            className="py-14 container mx-auto px-8 flex flex-col gap-24 md:flex-row md:justify-between"
          >
            <div className="w-full">
              <form action="" className="flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300  placeholder:text-sm placeholder:font-light"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-transparent  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                  />
                </div>
                <button className="w-20 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center">
                  Enviar
                </button>
              </form>
            </div>
            <div className="flex flex-col text-white  gap-10">
              <div className="flex flex-col">
                <strong className="mb-4  font-bold text-base">
                  Localização
                </strong>
                <p className=" font-light text-base max-w-sm">
                  Belas Business Park, Talatona, Edifício Cuanza Sul, 6º andar
                  Regus, sala 618
                </p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-base">Número</strong>
                <p className=" font-light text-base">+244 925 097 773</p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-base">E-mail</strong>
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
              <p className="max-w-[900px] text-xs text-center">
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
