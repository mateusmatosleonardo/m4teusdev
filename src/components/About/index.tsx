import { AiFillCode } from 'react-icons/ai'
import { FaPaintBrush } from 'react-icons/fa'
import Section from '../Section'

const About = () => {
  return (
    <Section title="Sobre">
      <div className='grid grid-cols-3 gap-x-8 mt-8'>
        <div className="col-span-2 text-lg text-gray-400 font-light">
          <p>
            Olá, me chamo Mateus Leonardo, sou um desenvolvedor full stack e estudande de ciência da computação.
          </p>
          <p className='mt-4'>
            No início da minha carreira, concentrei-me em desenvolvimento front-end e, à medida que avançava, direcionei minha especialização para o desenvolvimento full stack com foco em desenvolvimento mobile.
          </p>
          <p className='mt-4'>
            Tenho um grande apreço pelo estudo, não apenas para aprimorar minhas habilidades, mas também como um pilar essencial em minha contínua jornada de crescimento pessoal e profissional.
          </p >
          <p className='mt-4'>Colocar algo aqui</p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <AiFillCode className='text-3xl text-blue-500' />
            <span className='text-2xl font-bold'>Tecnologias</span>
          </div>
          <div className='flex flex-wrap gap-2 mt-6'>
            <span className='bg-rgba py-1 px-2 rounded-full'>JavaScript</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>TypeScript</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>HTML</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>CSS</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>React</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Next.js</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>NodeJS</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>NestJS</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Express</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>React Native</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Expo</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Context API</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Zustand</span>
          </div>
          <div className='flex items-center gap-2 mt-6'>
            <FaPaintBrush className='text-2xl text-blue-500' />
            <span className='text-2xl font-bold'>Software design</span>
          </div>
          <div className='flex flex-wrap gap-2 mt-6'>
            <span className='bg-rgba py-1 px-2 rounded-full'>Clean architecture</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>Clean code</span>
            <span className='bg-rgba py-1 px-2 rounded-full'>SOLID</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
