'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Filter } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    {
      id: 1,
      title: "Custom Sewing",
      subtitle: "Custom Sewing Services",
      category: "Sewing Services",
      image: "/images/Plastic_Slipcovers-Recovered-1030x724.jpg",
      description: "Professional seamstress services and custom fabric projects"
    },
    {
      id: 2,
      title: "Cushions & Pillows",
      subtitle: "Custom Cushions and Pillows",
      category: "Cushions and Pillows",
      image: "/images/Patio-Cushions4.jpg",
      description: "Indoor and outdoor custom cushions and decorative pillows"
    },
    {
      id: 3,
      title: "Furniture Restoration",
      subtitle: "Furniture Restoration",
      category: "Furniture Restoration",
      image: "/images/sofa_the_Square_Decorators.jpg",
      description: "Expert care for wooden furniture, antiques, and family heirlooms"
    },
    {
      id: 4,
      title: "Custom Slipcovers",
      subtitle: "Custom Slipcovers",
      category: "Slipcovers",
      image: "/images/custom_Slipcovers-1030x724.jpg",
      description: "Perfect-fit slipcovers that protect and enhance your furniture"
    },
    {
      id: 5,
      title: "Custom Upholstery",
      subtitle: "Custom Upholstery",
      category: "Upholstery and Reupholstery",
      image: "/images/custom_upholstery-1030x724.jpg",
      description: "Complete furniture reupholstery and restoration services"
    },
    {
      id: 6,
      title: "Custom Window Treatments",
      subtitle: "Window Treatments",
      category: "Window Treatments and Drapes",
      image: "/images/Window-Treatments8-1030x773.jpg",
      description: "Premium custom drapes, valances, shades, and cornices"
    }
  ]

  const categories = [
    'All',
    'Cushions and Pillows',
    'Furniture Restoration', 
    'Sewing Services',
    'Slipcovers',
    'Upholstery and Reupholstery',
    'Window Treatments and Drapes'
  ]

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const blogPosts = [
    { title: "How to Make Woodgrain Effect in a Furniture Using Wood Stain?", date: "03/21/2021" },
    { title: "How to disinfect furniture", date: "07/04/2020" },
    { title: "Different Types of Furniture", date: "03/08/2020" },
    { title: "DIY Prepare and Store Patio Furniture for Winter", date: "09/30/2019" },
    { title: "DIY easy furniture makeover with chalk paint", date: "08/15/2019" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
            P O R T F O L I O
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Explore our collection of custom upholstery, window treatments, and furniture restoration work.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-red-800">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700 ml-2">Portfolio</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Work Gallery
            </h2>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-red-800 mr-2" />
              <span className="text-gray-600">Filter by category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-red-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredItems.length} of {portfolioItems.length} items
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-red-800 font-semibold mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <button className="text-red-800 hover:text-red-600 font-semibold text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src="/images/Beautiful Vibrant Teal Vintage Sofa.png"
                alt="Featured upholstery project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">Vintage Sofa Restoration</h3>
                <p className="text-gray-600 text-sm">Complete transformation with premium fabrics</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/Hello Kitty Head Board.png"
                alt="Custom upholstery project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">Custom Headboard Design</h3>
                <p className="text-gray-600 text-sm">Unique upholstery with personalized touches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-red-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="font-semibold mb-2">Google Review</h3>
              <p className="text-red-100 text-sm">Read our reviews on Google</p>
            </div>
            <div className="bg-red-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="font-semibold mb-2">Facebook Review</h3>
              <p className="text-red-100 text-sm">See what our Facebook followers say</p>
            </div>
            <div className="bg-red-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="font-semibold mb-2">Yelp Review</h3>
              <p className="text-red-100 text-sm">Check out our Yelp ratings</p>
            </div>
            <div className="bg-red-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="font-semibold mb-2">FourSquare Review</h3>
              <p className="text-red-100 text-sm">Discover our FourSquare reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Inspired by our work? Contact us today to discuss your custom upholstery, window treatments, or furniture restoration project.
          </p>
          <Link href="/contact" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Follow Our Latest Work
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/thesquaredecorators?ref=embed_page" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/thesquaredecorators/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/company/the-square-decorators/about/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://x.com/thesquaredecor1" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
              <Twitter className="h-8 w-8" />
            </a>
            <a href="https://www.youtube.com/@TrinyDonneys/featured" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
              <Youtube className="h-8 w-8" />
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            Stay updated with our latest projects and design inspiration
          </p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Design Tips & Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <Link href="/blog" className="text-red-800 hover:text-red-600 font-semibold text-sm">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-red-800 hover:text-red-600 font-semibold">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
