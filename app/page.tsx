import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-center">Hi, I’m Fathan 👋</h1>

      <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl text-center">
        I am a fresh graduate in Informatics Engineering from ITS with end-to-end experience in the software
        development lifecycle, from design to deployment. 
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-center transition-all duration-300"
        >
          View My Projects
        </Link>

        <a
          href="https://github.com/fathanabi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
        >
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.3 9.42 7.87 10.94.58.1.8-.25.8-.56v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.7.08-.68.08-.68 1.16.08 1.77 1.2 1.77 1.2 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.52-1.46.1-3.05 0 0 .97-.31 3.18 1.18a10.8 10.8 0 0 1 2.9-.39c.98 0 1.98.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.73.8 1.17 1.82 1.17 3.07 0 4.4-2.68 5.35-5.24 5.63.42.37.8 1.1.8 2.23v3.3c0 .3.22.66.8.55 4.58-1.52 7.88-5.84 7.88-10.94C23.5 5.65 18.35.5 12 .5Z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
      </div>
    </main>
  );
}
