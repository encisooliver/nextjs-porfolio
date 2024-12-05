import Link from 'next/link'

export default function Home() {
  return  ( 
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Oliver Enciso</h1>
          <h2 className="text-2xl font-medium text-blue-600 mb-6">Software Developer | Web3 | DevOps | Full-stack</h2>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Software developer with five years of hands-on experience, specializing in transforming
            creative concepts into user-friendly applications. Passionate about coding, committed to
            problem-solving, and possessing a keen sense of unity in guiding teams towards their
            objectives.
          </p>
        </div>
      </section>
    </main>
  )
}
