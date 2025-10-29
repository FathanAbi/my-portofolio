import Link from 'next/link'

const projects = [
  {
    title: 'MediShop',
    desc: 'Laravel e-commerce for medical devices.',
    slug: 'medishop',
  },
  {
    title: 'ChatApps',
    desc: 'Vue and PayloadCMS chatapps.',
    slug: 'chatapps',
  },
  {
    title: 'Mobile Chatting Apps',
    desc: 'Mobile Chatting Apps',
    slug: 'mobile',
  },
  {
    title: 'Portfolio',
    desc: 'This very site, built with Next.js + Tailwind!',
    slug: 'portfolio',
  },
  {
    title: 'Computer Vision Research',
    desc: 'Research Paper',
    slug: 'researchpaper',
  },
  {
    title: 'Networking',
    desc: 'networking Project',
    slug: 'networking',
  },

  
]

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
        <Link
          href={`/projects/${p.slug}`}
          key={p.slug}
          className="block bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-transform"
        >
          <h2 className="text-2xl font-semibold">{p.title}</h2>
          <p className="mt-2 text-gray-400">{p.desc}</p>
        </Link>
      ))}
        
      </div>
    </section>
  )
}
