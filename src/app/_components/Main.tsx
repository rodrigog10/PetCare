'use client'
import FadeInWrapper from "./FadeInWrapper";
import Navigate from "./Navigate";
import Whatsapp from "./Uatzap";





export default function Main() {
  return (
   
     
    <FadeInWrapper> 
    <div>
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-300  w-full p-4">
        {/* Navbar corrigida */}
        <Navigate />

        {/* Texto principal */}
        <div className="flex items-start gap-8 mt-8">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-800 via-indigo-950 to-black text-transparent bg-clip-text leading-tight">
              O seu pet <br />
              merece um{" "}
              <span className="border-b-4 border-black  inline-block">
                cuidado excepcional.
              </span>
            </h1>

            <h2 className="text-white text-lg mt-8">
              Na{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-indigo-950 to-black">
                PetCare
              </strong>
              , acreditamos que cada animal merece um cuidado único. <br />
              Aqui, oferecemos serviços pensados com amor para garantir a saúde,
              a
              <br />
              felicidade e o conforto do seu melhor amigo.
            </h2>
          </div>
        </div>
        <Whatsapp />
      </div>
      
      
    </div>
    </FadeInWrapper>
  );
}