import { notFound } from 'next/navigation'
import Link from "next/link"

type Project = {
  title: string
  desc: string
  tech: string[]
  github?: string | { name: string; url: string }[]
  live?: string
}

const projects: Record<string, Project> = {
  medishop: {
    title: 'MediShop',
    desc: 'An online marketplace for medical devices built using Laravel and deployed using Docker.',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Docker'],
    github: 'https://github.com/FathanAbi/Medishop',
    live: 'http://103.103.21.102:50001',
  },
  chatapps: {
    title: 'Simple Web Chatting Apps',
    desc: 'A real-time chatting app built with Vue (frontend) and PayloadCMS (backend), deployed via Docker.',
    tech: ['Vue', 'Typescript', 'PayloadCMS', 'Docker'],
    github: 'https://github.com/FathanAbi/vue-chatapps-public',
    live: 'http://103.103.21.102:50011',
  },
  mobile: {
    title: 'Mobile Chatting Apps',
    desc: 'A mobile chatting app built using Flutter and Firebase.',
    tech: ['Flutter', 'Firebase', 'Android Studio'],
    github: 'https://github.com/rayrednet/ChatApp_FP_MobileProgramming',
  },
  portfolio: {
    title: 'Portfolio Website',
    desc: 'This portfolio site built with Next.js and Tailwind CSS to showcase my projects and skills.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Typescript', 'Vercel'],
    github: 'https://github.com/FathanAbi/my-portofolio',
    live: 'https://fathan-abi-portofolio.vercel.app/',
  },
  researchpaper: {
    title: 'Few-Shot Hyperspectral Image Classification with Contrastive Learning for Oil Spill Mapping',
    desc: 'A research project developing a deep learning model to classify oil spills in the ocean using hyperspectral images.',
    tech: ['Python', 'PyTorch', 'Jupyter Notebook', 'Numpy', 'scikit-learn'],
    github: 'https://repository.its.ac.id/120481/',
  },
  networking: {
    title: 'Networking Projects',
    desc: 'A collection of networking-related projects including client-server apps, socket programming, and network utilities.',
    tech: ['Wireshark', 'GNS3', 'BIND9', 'DHCP Server', 'Apache2', 'Cisco Packet Tracer', 'iptables', 'Python', 'Socket', 'RSA', 'DES'],
    github: [
      { name: 'Wireshark', url: 'https://github.com/FathanAbi/Jarkom-Modul-1-D26-2023' },
      { name: 'DNS Config', url: 'https://github.com/FathanAbi/Jarkom-Modul-2-D26-2023' },
      { name: 'DHCP, Webserver, Reverse Proxy', url: 'https://github.com/FathanAbi/Jarkom-Modul-3-D26-2023' },
      { name: 'Subnetting, Routing', url: 'https://github.com/FathanAbi/Jarkom-Modul-4-D26-2023' },
      { name: 'Firewall', url: 'https://github.com/FathanAbi/Jarkom-Modul-5-D26-2023' },
      { name: 'Client-Server RSA/DES', url: 'https://github.com/FathanAbi/KI_Tugas3/blob/main/client.py' },
    ],
  },
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 break-words">{project.title}</h1>
        <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">{project.desc}</p>

        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-blue-400">Technologies Used</h2>
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8">
          {project.tech.map((t) => (
            <li
              key={t}
              className="bg-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-200 text-xs sm:text-sm"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* ✅ Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">
          {Array.isArray(project.github) ? (
            project.github.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              >
                📂 {repo.name}
              </a>
            ))
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              >
                {slug === 'researchpaper' ? '📄 Research Paper' : '🧠 View Code'}
              </a>
            )
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
            >
              🌐 Live Demo
            </a>
          )}
        </div>

        <Link href="/projects" className="text-blue-500 hover:underline text-sm sm:text-base">
          ← Back to Projects
        </Link>
      </div>
    </div>
  )
}
