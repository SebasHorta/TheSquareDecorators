import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Calendar, User, Tag } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Make Woodgrain Effect in a Furniture Using Wood Stain?",
      category: "Interior Design",
      tags: ["woodgrain effect"],
      date: "03/21/2021",
      author: "Helmer Horta",
      image: "/images/sofa_the_Square_Decorators.jpg",
      excerpt: "Learn the professional techniques for creating beautiful woodgrain effects on furniture using wood stain.",
      readMore: true
    },
    {
      id: 2,
      title: "How to disinfect furniture",
      category: "Interior Design",
      tags: ["Window Treatments"],
      date: "07/04/2020",
      author: "Helmer Horta",
      image: "/images/Window-Treatments8-1030x773.jpg",
      excerpt: "Essential tips and techniques for properly disinfecting and cleaning your furniture.",
      readMore: true
    },
    {
      id: 3,
      title: "Different Types of Furniture",
      category: "Interior Design",
      tags: ["sofa the Square Decorators"],
      date: "03/08/2020",
      author: "Helmer Horta",
      image: "/images/sofa_the_Square_Decorators.jpg",
      excerpt: "Explore the various types of furniture and their unique characteristics.",
      readMore: true
    },
    {
      id: 4,
      title: "DIY Prepare and Store Patio Furniture for Winter",
      category: "Interior Design",
      tags: [],
      date: "09/30/2019",
      author: "Helmer Horta",
      image: "/images/Patio-Cushions4.jpg",
      excerpt: "Step-by-step guide to properly prepare and store your patio furniture for the winter months.",
      readMore: true
    },
    {
      id: 5,
      title: "DIY easy furniture makeover with chalk paint",
      category: "Interior Design",
      tags: ["Chalk Paint"],
      date: "08/15/2019",
      author: "Helmer Horta",
      image: "/images/custom_upholstery-1030x724.jpg",
      excerpt: "Transform your furniture with easy chalk paint techniques for a fresh new look.",
      readMore: true
    },
    {
      id: 6,
      title: "Custom Fitting Slipcovers",
      category: "Interior Design",
      tags: ["Custom Slipcovers"],
      date: "07/11/2019",
      author: "Helmer Horta",
      image: "/images/custom_Slipcovers-1030x724.jpg",
      excerpt: "Everything you need to know about custom fitting slipcovers for your furniture.",
      readMore: true
    },
    {
      id: 7,
      title: "Refinishing an Antique Furniture",
      category: "Interior Design",
      tags: ["Furniture Refinishing"],
      date: "04/04/2019",
      author: "Helmer Horta",
      image: "/images/Beautiful Vibrant Teal Vintage Sofa.png",
      excerpt: "Professional techniques for refinishing antique furniture to preserve its beauty and value.",
      readMore: true
    },
    {
      id: 8,
      title: "Summer Care of Leather Furniture",
      category: "Interior Design",
      tags: ["Cuero"],
      date: "03/31/2019",
      author: "Helmer Horta",
      image: "/images/Plastic_Slipcovers-Recovered-1030x724.jpg",
      excerpt: "Essential care tips for maintaining your leather furniture during the summer months.",
      readMore: true
    },
    {
      id: 9,
      title: "Cleaning Furniture Patio and Pool",
      category: "Interior Design",
      tags: ["Cleaning Patio and Pool Furniture"],
      date: "05/19/2018",
      author: "Helmer Horta",
      image: "/images/Patio-Cushions4.jpg",
      excerpt: "Professional cleaning techniques for patio and pool furniture to keep them looking great.",
      readMore: true
    },
    {
      id: 10,
      title: "New Decorating Trends 2019",
      category: "Interior Design",
      tags: ["Custom Upholstery"],
      date: "04/19/2018",
      author: "Helmer Horta",
      image: "/images/TSDLogonew-300x100.png",
      excerpt: "In interior design, fashions come and go and are that, beyond looking for furniture or solutions that reflect our personality or give answers to specific needs, the truth is that proposals that work everywhere tend to draw our attention turning them into everything a success.",
      readMore: true
    }
  ]

  const categories = [
    "Interior Design",
    "Custom Upholstery",
    "Window Treatments",
    "Furniture Refinishing",
    "Custom Slipcovers",
    "Chalk Paint",
    "Cleaning Patio and Pool Furniture"
  ]

  const portfolioItems = [
    "Custom Sewing Services",
    "Custom Cushions and Pillows", 
    "Furniture Restoration",
    "Custom Slipcovers",
    "Custom Upholstery"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Design tips, DIY guides, and industry insights from The Square Decorators
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
                <span className="text-gray-700 ml-2">Blog</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Latest Articles
              </h2>
              
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center mb-3">
                          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        {post.tags.length > 0 && (
                          <div className="flex items-center mb-4">
                            <Tag className="h-4 w-4 text-gray-400 mr-2" />
                            <div className="flex flex-wrap gap-1">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {post.readMore && (
                          <Link href={`/blog/${post.id}`} className="text-red-800 hover:text-red-600 font-semibold text-sm">
                            Read more →
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    CATEGORIES
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link href={`/blog?category=${encodeURIComponent(category)}`} className="text-gray-700 hover:text-red-800 flex items-center">
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Latest Blog Posts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Latest Blog Posts
                  </h3>
                  <ul className="space-y-3">
                    {blogPosts.slice(0, 5).map((post) => (
                      <li key={post.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <Link href={`/blog/${post.id}`} className="text-gray-700 hover:text-red-800 font-medium text-sm">
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio Items */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Latest Portfolio Items
                  </h3>
                  <ul className="space-y-2">
                    {portfolioItems.map((item, index) => (
                      <li key={index}>
                        <Link href="/portfolio" className="text-gray-700 hover:text-red-800 flex items-center">
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/thesquaredecorators?ref=embed_page" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/thesquaredecorators/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/the-square-decorators/about/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://x.com/thesquaredecor1" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/@TrinyDonneys/featured" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-600">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Stay updated with our latest projects and tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest design tips, DIY guides, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-200 focus:outline-none"
            />
            <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Site Designed by Sebastian Horta
          </p>
        </div>
      </section>
    </div>
  )
}
