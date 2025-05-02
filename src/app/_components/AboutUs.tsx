import { ChevronDown } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="sobre-nos">
      <div className="flex flex-col p-6 ">
        <h1 className="p-6 text-5xl font-bold bg-gradient-to-r from-indigo-800 via-black to-black text-transparent bg-clip-text leading-tight flex items-center gap-2">
          Sobre nós <ChevronDown size={40} className="text-indigo-950" />
        </h1>

        <div className="text-white p-6 container px-4 py-6">
          {/* Aqui começa o grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="bg-indigo-600/35 rounded-2xl p-6 text-lg">
              <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
                Aqui
              </strong>
              , todos nós somos apaixonados por cuidar de quem mais traz alegria
              para nossas vidas: nossos pets. Com uma equipe dedicada e
              especializada, oferecemos serviços pensados para garantir saúde,
              conforto e felicidade a cada animalzinho. Acreditamos que cada pet é
              único e merece um atendimento personalizado, feito com amor e
              respeito. Seja para consultas, cuidados diários ou momentos de
              lazer, estamos prontos para cuidar do seu melhor amigo como se fosse
              da nossa família.
            </p>

            <p className="bg-indigo-600/35 rounded-2xl p-6 text-lg">
              <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
                Nossa equipe
              </strong>{" "}
              é formada por profissionais experientes e dedicados, prontos para
              oferecer o melhor atendimento. Estamos sempre atualizados com as
              últimas tendências e inovações do setor, garantindo que seu pet
              receba os cuidados mais adequados e modernos. Aqui, cada visita é
              tratada com carinho e atenção, porque sabemos que a saúde e o
              bem-estar do seu pet são prioridades.
            </p>

            <p className="bg-indigo-600/35 rounded-2xl p-6 text-lg">
              <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
                Nossa missão
              </strong>{" "}
              é proporcionar um ambiente seguro e acolhedor, onde os pets possam
              se sentir em casa. Com instalações modernas e uma equipe apaixonada,
              garantimos que cada visita seja uma experiência positiva. Venha nos
              conhecer e descubra como podemos fazer a diferença na vida do seu
              pet! Estamos aqui para cuidar, amar e fazer parte da história de
              cada um deles.
            </p>

            <p className="bg-indigo-600/35 rounded-2xl p-6 text-lg">
              <strong className="bg-gradient-to-r from-indigo-700 via-black to-black text-transparent bg-clip-text">
                Venha nos visitar
              </strong>{" "}
              e descubra como podemos fazer a diferença na vida do seu pet! Aqui,
              cada animal é tratado com amor e respeito, porque acreditamos que
              eles merecem o melhor. Estamos ansiosos para conhecer você e seu
              melhor amigo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
