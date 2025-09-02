'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with phone number and social media */}
      <div className="bg-red-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Call Us: (516) 216-1630</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/thesquaredecorators?ref=embed_page" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/thesquaredecorators/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/the-square-decorators/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://x.com/thesquaredecor1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@TrinyDonneys/featured" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/TSDLogonew-300x100.png"
              alt="The Square Decorators Logo"
              width={120}
              height={40}
              className="mr-3"
            />
            <div className="text-xl font-bold text-gray-900 hidden sm:block">
              <span className="text-red-800">THE SQUARE</span> DECORATORS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-800 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-800 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
