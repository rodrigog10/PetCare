import Image from "next/image";

export default function Navigate() {
  return (
    <nav className="w-full flex justify-between items-center">
      {/* Logo à esquerda */}
      <div className="flex items-center gap-2">
        <Image
          src="/fuedase.png"
          alt="Logo PetVida"
          width={140}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Links à direita */}
      <div className="flex gap-6 font-bold">
        <a
          href="#servicos"
          className="bg-white px-6 py-2 rounded-full text-indigo-950 text-lg hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-200 cursor-pointer"
        >
          Serviços
        </a>

        <a
          href="#contato"
          className="bg-white px-6 py-2 rounded-full text-indigo-950 text-lg hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-200 cursor-pointer"
        >
          Contato
        </a>
        <a
          href="#sobre-nos"
          className="bg-white px-6 py-2 rounded-full text-indigo-950 text-lg hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-200 cursor-pointer"
        >
          Sobre nós
        </a>
      </div>
    </nav>
  );
}
