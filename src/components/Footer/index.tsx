import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-2 sm:mt-32 sm:pb-36 sm:py-12 py-6">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-y-10">
        <h1 className="text-8xl text-white font-bold">
          Contato
          <span className={'text-2xl font-bold text-blue-500 lg:text-8xl'}>.</span>
        </h1>
        <span className="text-gray-400 text-lg font-light text-center">
          Envie-me um e-mail se quiser se conectar! Você também pode me encontrar no <span className="text-blue-500">Linkedin</span> ou no <span className="text-blue-500">Discord</span>, se essa for a sua preferência.
        </span>
        <div className="flex items-center gap-x-2">
          <FaEnvelope size={24} className={'text-white'} />
          <span className="text-white text-xl">m4teusleonardo@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
