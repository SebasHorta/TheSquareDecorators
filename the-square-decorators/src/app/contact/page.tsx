'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, MapPin, Mail, Globe, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const portfolioItems = [
    "Custom Sewing Services",
    "Custom Cushions and Pillows",
    "Furniture Restoration",
    "Custom Slipcovers",
    "Custom Upholstery"
  ]

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get in touch with The Square Decorators. Feel free to leave us a message!
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
                <span className="text-gray-700 ml-2">Contact</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              THE SQUARE DECORATORS
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Custom upholstery and Re-upholstery, Window Treatments
            </p>
            <p className="text-lg text-gray-600">
              Slipcovers, Cushions, Pillows, Furniture Restoration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                RESIDENTIAL AND COMMERCIAL SERVICES
              </h3>
              <p className="text-gray-700 mb-6">
                Thanks for visiting The Square Decorator's website. We've got the materials and know-how to cover your residential and commercial furniture or window. To learn more about fabric options and other services available, please fill out the form below or give us a call at 516.216.1630. And of course, you are welcome to visit our showroom at 85 Franklin Ave, Franklin Square NY 11010 to view our sample books full of fabric, vinyl, and leather options.
              </p>
              <p className="text-gray-700 mb-8">
                We look forward to hearing from you!
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  WHAT CAN WE HELP YOU WITH?
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Custom upholstery and reupholstery</p>
                  <p>• Window treatments and drapery</p>
                  <p>• Custom slipcovers</p>
                  <p>• Cushions and pillows</p>
                  <p>• Furniture restoration</p>
                  <p>• Custom sewing services</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors flex items-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                MAP & DIRECTIONS
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  The Square Decorators
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-800 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-700 font-semibold">85 Franklin Ave.</p>
                      <p className="text-gray-700">Franklin Square</p>
                      <p className="text-gray-700">New York, 11010</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700 font-semibold">T: 516.216.1630</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700 font-semibold">W: TheSquareDecorators.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700 font-semibold">E: Services@thesqauredecorators.com</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500">85 Franklin Ave, Franklin Square, NY 11010</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex justify-center space-x-4">
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
                <p className="text-sm text-gray-600 mt-2">
                  Stay updated with our latest work and projects
                </p>
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

      {/* Portfolio & Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Portfolio Items</h3>
              <ul className="space-y-3">
                {portfolioItems.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="h-4 w-4 mr-2 text-red-800" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/portfolio" className="text-red-800 hover:text-red-600 font-semibold mt-4 inline-block">
                View Complete Portfolio →
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h3>
              <ul className="space-y-4">
                {blogPosts.map((post, index) => (
                  <li key={index} className="border-b border-gray-200 pb-3">
                    <Link href="/blog" className="text-gray-700 hover:text-red-800 font-medium">
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="text-red-800 hover:text-red-600 font-semibold mt-4 inline-block">
                Read All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Site Designed by Sebastian Horta
          </p>
        </div>
      </section>
    </div>
  )
}
