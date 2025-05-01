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
          className="text-gray text-lg hover:text-indigo-700 transition-colors duration-200 cursor-pointer"
        >
          Serviços
        </a>

        <a
          href="#contato"
          className="text-gray text-lg hover:text-indigo-700 transition-colors duration-200 cursor-pointer"
        >
          Contato
        </a>
        <a
          href="#sobre-nos"
          className="text-gray text-lg hover:text-indigo-700 transition-colors duration-200 cursor-pointer"
        >
          Sobre nós
        </a>
      </div>
    </nav>
  );
}
