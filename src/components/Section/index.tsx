import { type ReactNode } from 'react'

interface SectionProps {
  title?: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="mt-32 space-y-14 lg:space-y-24 text-white">
      <section className="max-w-4xl mx-auto mt-16 antialiased">
        {title && (
          <div className="flex items-center gap-x-10">
            <span className="text-2xl text-white lg:text-5xl font-bold">
              {title}
              <span className="text-2xl text-blue-500 lg:text-5xl font-bold">.</span>
            </span>
            <div className="w-full h-[1px] bg-gray-400" />
          </div>
        )}
        {children}
      </section>
    </div>
  )
}

export default Section
