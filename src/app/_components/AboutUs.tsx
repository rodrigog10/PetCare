import { ChevronDown } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="sobre-nos">
    <div className="flex flex-col p-6 ">
      <h1 className="p-6 text-5xl font-bold bg-gradient-to-r from-indigo-800 via-black to-black text-transparent bg-clip-text leading-tight flex items-center gap-2">
        Sobre nós <ChevronDown size={40} className="text-indigo-950" />
      </h1>

      <div className=" text-white p-6 container  px-4 py-6">
        <p className="max-w-2xl bg-indigo-600/35 rounded-2xl p-6 text-lg">
          <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
            Aqui
          </strong>
          , todos nós somos apaixonados por cuidar de quem mais traz alegria
          para nossas vidas: nossos pets. Com uma equipe dedicada e
          especializada, oferecemos serviços pensados para garantir saúde,{" "}
          conforto e felicidade a cada animalzinho. Acreditamos que cada pet é
          único e merece um atendimento personalizado, feito com amor e
          respeito. Seja para consultas, cuidados diários ou momentos de lazer,
          estamos prontos para cuidar do seu melhor amigo como se fosse da nossa
          família.
        </p>
        <div></div>

        <p className="max-w-2xl bg-indigo-600/35 rounded-2xl p-6 text-lg mt-4">
          <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
            Nossa missão{" "}
          </strong>{" "}
          é proporcionar um ambiente seguro e acolhedor, onde os pets possam se
          sentir em casa. Com instalações modernas e uma equipe apaixonada,
          garantimos que cada visita seja uma experiência positiva. Venha nos
          conhecer e descubra como podemos fazer a diferença na vida do seu pet!
          Estamos aqui para cuidar, amar e fazer parte da história de cada um
          deles.
        </p>
        <div></div>
      </div>
    </div>
    </section>
  );
}
