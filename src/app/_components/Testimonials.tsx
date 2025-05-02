"use client";
import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que comecei a levar Tom para banho e tosa aqui, ele nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam meu gatinho lindo e cheiroso. Recomendo de olhos fechados!",
    author: "Ana Clara",
    role: "Tutora de Tom (S.r.d)",
    image: tutor2,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que Nalu estava sendo bem cuidada. Recebi fotos e atualizações diárias, e ela voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Carlos Eduardo",
    role: "Tutor de Nalu (Husky Siberiano)",
    image: tutor1,
  }
  
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="p-6 text-5xl font-bold bg-gradient-to-r from-indigo-800 via-black to-black text-transparent bg-clip-text leading-tight flex items-center ">
          Depoimentos dos clientes
          <ChevronDown size={40} className="text-indigo-950" />
        </h1>
        <div className="relative max-w-4xl mx-auto select-none">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-indigo-950 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
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
    </section>
  );
}
