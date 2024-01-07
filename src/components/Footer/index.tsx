const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-2 sm:mt-0 sm:pb-36 sm:py-12 py-6">
      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        <h1 className="text-8xl text-white font-bold">
          Contato
          <span className={'text-2xl font-bold text-blue-500 lg:text-8xl'}>.</span>
        </h1>
        <span>
          Envie-me um e-mail se quiser se conectar! Você também pode me encontrar no Linkedin ou no Discord, se essa for a sua preferência.
        </span>
        <div>
          <span>m4teusleonardo@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
