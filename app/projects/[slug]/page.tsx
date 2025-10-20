import { notFound } from 'next/navigation'

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
    desc: 'An online marketplace for medical devices built using Laravel and deployed using docker.',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Docker'],
    github: 'https://github.com/FathanAbi/Medishop',
    live: 'http://103.103.21.102:50001',
  },
  mobile: {
    title: 'Mobile Chatting Apps',
    desc: 'Mobile chatting apps built with flutter and firebase',
    tech: ['Flutter', 'Firebase', 'Android Studio'],
    github: 'https://github.com/rayrednet/ChatApp_FP_MobileProgramming',
  },
  portfolio: {
    title: 'Portfolio Website',
    desc: 'This portfolio site, built with Next.js and Tailwind CSS, showcasing my projects and skills.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/FathanAbi/my-portofolio',
    live: 'https://fathan-portfolio.vercel.app',
  },
  researchpaper: {
    title: 'Few-Shot Hyperspectral Image Classification with Contrastive Learning for Oil Spill Mapping',
    desc: 'A research project developing a deep learning model to classify oil spills in the ocean using hyperspectral image',
    tech: ['Python', 'PyTorch', 'Jupyter Notebook', 'Numpy', 'scikit-learn'],
    github: 'https://repository.its.ac.id/120481/',
  },
  networking: {
    title: 'Networking Projects',
    desc: 'A collection of networking-related projects including client-server apps, socket programming, and network utilities.',
    tech: ['WireShark', 'gns3', 'bind9', 'dhcp-server', 'apache2', 'cisco packet tracer', 'iptables', 'python', 'socket', 'RSA', 'DES'],
    // Here we will add multiple repositories
    github: [
      { name: 'WireShark', url: 'https://github.com/FathanAbi/Jarkom-Modul-1-D26-2023' },
      { name: 'DNS Config', url: 'https://github.com/FathanAbi/Jarkom-Modul-2-D26-2023' },
      { name: 'DHCP, webserver, reverse proxy', url: 'https://github.com/FathanAbi/Jarkom-Modul-3-D26-2023' },
      { name: 'Subnetting, Routing', url: 'https://github.com/FathanAbi/Jarkom-Modul-4-D26-2023' },
      { name: 'Firewall', url: 'https://github.com/FathanAbi/Jarkom-Modul-5-D26-2023' },
      { name: 'client-server, Cryptosystem with RSA and DES', url: 'https://github.com/FathanAbi/KI_Tugas3/blob/main/client.py'}
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
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-6">{project.desc}</p>

      <h2 className="text-xl font-semibold mb-3 text-blue-400">Technologies Used</h2>
      <ul className="flex justify-center gap-3 flex-wrap mb-8">
        {project.tech.map((t) => (
          <li key={t} className="bg-gray-800 px-4 py-2 rounded-full text-gray-200 text-sm">
            {t}
          </li>
        ))}
      </ul>

      {/* ✅ Buttons Section */}
      <div className="flex justify-center gap-6 mb-10">
        {Array.isArray(project.github) ? (
          project.github.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-transform transform hover:-translate-y-1"
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
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-transform transform hover:-translate-y-1"
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
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition-transform transform hover:-translate-y-1"
          >
            🌐 Live Demo
          </a>
        )}
      </div>

      <a
        href="/projects"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        ← Back to Projects
      </a>
    </div>
  )
}
