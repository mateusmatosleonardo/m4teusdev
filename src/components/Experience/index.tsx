import Section from '../Section'
import { list } from './content'

const Experience = () => {
  return (
    <Section title="Experiência">
      {list.map((item, i) => (
        <div className='flex flex-col gap-y-4 w-full mt-8' key={i}>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-2'>
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                className='w-12 h-12 rounded-full object-contain'
              />
              <span className='text-2xl font-bold'>{item.company}</span>
            </div>
            <span className='text-lg'>{item.date}</span>
          </div>
          <span className='text-xl text-blue-500 font-bold'>
            {item.office}
          </span>
          <span className='text-lg text-gray-400 font-light'>
            {item.description}
          </span>
          <div className='flex gap-x-2'>
            {item.technologiesUsed.map((tech, i) => (
              <span className='bg-rgba py-1 px-2 rounded-full' key={i}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}

export default Experience
