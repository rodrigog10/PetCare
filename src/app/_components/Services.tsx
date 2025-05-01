"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
  ChevronDown,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="servicos" className="p-8">

    
    <div>
      <h1 className="p-6 text-5xl font-bold bg-gradient-to-r from-indigo-800 via-black to-black text-transparent bg-clip-text leading-tight flex items-center gap-2">
        Nossos Serviços <ChevronDown size={40} className="text-indigo-950" />
      </h1>

      <div className="container mx-auto px-4 py-6">
        <div className="relative select-none">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-indigo-950 text-white rounded-3xl p-6 space-y-4 h-full flex flex-col  ">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-4">
                        <span className="text-3xl ">{item.icon}</span>
                        <div>
                          <h2 className="text-2xl mt-2 mb-2 font-bold bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-100 text-transparent bg-clip-text leading-tight">
                            {item.title}
                          </h2>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t text-gray-600 pt-4 mt-4 justify-between flex items-center">
                      <div className="flex items-center gap-2">
                        <Clock className="text-white" size={20} />{" "}
                        <span className="text-white">{item.duration}</span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="flex items-center justify-center gap-2 bg-indigo-950 transition-colors duration-200 hover:bg-green-500 text-white rounded-3xl 
                          px-4 py-2"
                        >
                          <WhatsappLogo size={20} />
                          Entrar em contato
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center rounded-full bg-white cursor-pointer w-15 h-15 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2"
            >
              <ChevronLeft
                size={40}
                className="w-8 h-8 font-bold text-gray-600"
              />
            </button>
            <button
              onClick={scrollNext}
              className="flex items-center justify-center rounded-full bg-white cursor-pointer w-15 h-15 absolute -right-11 -translate-y-1/2 -translate-x-1/2 top-1/2"
            >
              <ChevronRight
                size={40}
                className="w-8 h-8 font-bold text-gray-600"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
