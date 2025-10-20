import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Fathan 👋</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
       I am a fresh graduate in Informatics Engineering from ITS with end-to-end experience in the software
        development lifecycle, from design to deployment. 
      </p>
      
     
      <div className="btn-container">
        <Link href="/projects" className="btn-check">
            View My Projects
        </Link>
      </div>
    </main>
  );
}
