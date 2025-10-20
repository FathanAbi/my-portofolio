'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Fathan.dev</h1>
      <div className="space-x-6">
        {['/', '/about', '/projects', '/contact'].map((path) => (
          <Link
            key={path}
            href={path}
            className={`hover:text-blue-400 transition ${
              pathname === path ? 'text-blue-400' : ''
            }`}
          >
            {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </nav>
  )
}
