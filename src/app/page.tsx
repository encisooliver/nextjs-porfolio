import Link from 'next/link'

export default function Home() {
  return  ( 
    <main >
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Oliver Enciso</h1>
          <h2 className="text-2xl font-medium text-blue-600 mb-6">Software Engineer | Web3 | DevOps | Full-stack</h2>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Software developer with five years of hands-on experience, specializing in transforming
            creative concepts into user-friendly applications. Passionate about coding, committed to
            problem-solving, and possessing a keen sense of unity in guiding teams towards their
            objectives.
          </p>
        </div>
      </section> */}
      <section className="bg-gradient-to-r from-gray-500 via-gray-100 to-gray-400 text-black py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full md:h-[50vh]">

        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Oliver Enciso
          </h1>
          <p className="text-lg font-medium mt-2">
            Software Engineer | Web3 | DevOps | Full-stack
          </p>
        </div>

        <div className="flex flex-col justify-center h-full">
          <p className="text-base md:text-lg leading-relaxed">
            Software developer with five years of hands-on experience, specializing in transforming creative concepts into user-friendly applications. Passionate about coding, committed to problem-solving, and possessing a keen sense of unity in guiding teams towards their objectives.
          </p>
        </div>

      </div>
    </div>
  </section>
 
    </main>
  )
}
