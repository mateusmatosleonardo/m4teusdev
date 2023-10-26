import Section from '../Section'

const Experience = () => {
  return (
    <Section title="Experiência">
      <div className='flex flex-col gap-y-4 w-full mt-8'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold'>Arkos</span>
          <span className='text-lg'>2021 - 2022</span>
        </div>
        <span className='text-xl text-blue-500 font-bold'>
          Desenvolvedor Front-end
        </span>
        <span className='text-lg text-gray-400 font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum excepturi velit porro minima. Doloremque nisi adipisci illo corrupti officiis suscipit hic distinctio commodi eum error. Dolores rerum velit autem.
        </span>
        <div className='flex gap-x-2'>
          <span className='bg-rgba py-1 px-2 rounded-full'>React</span>
          <span className='bg-rgba py-1 px-2 rounded-full'>React Native</span>
          <span className='bg-rgba py-1 px-2 rounded-full'>Next.js</span>
        </div>
      </div>
    </Section>
  )
}

export default Experience
