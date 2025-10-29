'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm text-white px-6 py-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Fathan.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`hover:text-blue-400 transition ${
                pathname === path ? 'text-blue-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-800 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-3 bg-gray-900/95 px-6 py-4 rounded-lg shadow-md animate-fadeIn">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={closeMenu}
              className={`hover:text-blue-400 transition ${
                pathname === path ? 'text-blue-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
