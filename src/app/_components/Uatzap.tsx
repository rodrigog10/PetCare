import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  return (
    <div className="w-full flex justify-end ">
      <a
        href="https://api.whatsapp.com/send?phone=5581982523404"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex  bg-green-500 text-white rounded-full px-4 py-2 gap-2 shadow-lg hover:bg-green-600 transition-all duration-300 text-lg font-semibold"
      >
        <BsWhatsapp size={24} />
        <span>Consulta? Aqui!</span>
      </a>
    </div>
  );
}
