import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  return (
    <section id="contato">
      <div className="w-full flex justify-start px-5 mt-5 ">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex  bg-green-500 text-white rounded-full px-4 py-2 gap-2 shadow-lg hover:bg-green-600 transition-all duration-300 text-lg font-semibold"
        >
          <BsWhatsapp size={24} />
          <span>Consulta? Aqui!</span>
        </a>
      </div>
    </section>
  );
}
