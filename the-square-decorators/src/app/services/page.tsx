import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "WINDOW TREATMENTS",
      subtitle: "Window Treatments",
      description: "The Square Decorators pleased to offer you quality drapes, valances, jabots, shades, cornices and more.",
      image: "/images/Window-Treatments8-1030x773.jpg",
      features: [
        "Custom drapes and curtains",
        "Valances and jabots",
        "Roman shades and blinds",
        "Cornices and hardware",
        "Professional installation"
      ]
    },
    {
      title: "CUSTOM UPHOLSTERY",
      subtitle: "Window Treatments",
      description: "Upholstery can also be a unique & smart way to reinvigorate an old piece of furniture.",
      image: "/images/custom_upholstery-1030x724.jpg",
      features: [
        "Complete furniture reupholstery",
        "Fabric selection guidance",
        "Spring and cushion replacement",
        "Frame repair and reinforcement",
        "On-site work available"
      ]
    },
    {
      title: "CUSTOM SLIPCOVERS",
      subtitle: "Custom Slipcovers",
      description: "TSD has mastered the art of slipcovers, fitting to protect the beauty of your existing furniture.",
      image: "/images/custom_Slipcovers-1030x724.jpg",
      features: [
        "Perfect-fit slipcovers",
        "Furniture protection",
        "Easy maintenance",
        "Seasonal style changes",
        "Custom fabric options"
      ]
    },
    {
      title: "CUSHIONS & PILLOWS",
      subtitle: "Cushions & Pillows",
      description: "Give your home or office a whole new look with our amazing collection of gorgeous Custom Cushions and decorative pillows.",
      image: "/images/Patio-Cushions4.jpg",
      features: [
        "Indoor and outdoor cushions",
        "Decorative throw pillows",
        "Custom sizes and shapes",
        "Weather-resistant materials",
        "Design consultation"
      ]
    },
    {
      title: "FURNITURE RESTORATION",
      subtitle: "Furniture Restoration",
      description: "We provide professional care for all of your wooden furniture, whether it's an antique or a family legacy.",
      image: "/images/sofa_the_Square_Decorators.jpg",
      features: [
        "Antique furniture restoration",
        "Wood repair and refinishing",
        "Family heirloom preservation",
        "Professional craftsmanship",
        "Value enhancement"
      ]
    },
    {
      title: "CUSTOM SEWING SERVICES",
      subtitle: "Custom Sewing",
      description: "Quality service to clients who wish to have a customized product. Also available professional seamstress services.",
      image: "/images/Plastic_Slipcovers-Recovered-1030x724.jpg",
      features: [
        "Professional seamstress services",
        "Custom fabric projects",
        "Alterations and repairs",
        "Home decor sewing",
        "Specialized projects"
      ]
    }
  ]

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
            The Square Decorators Upholstery Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Professional upholstery, window treatments, and furniture restoration services in Franklin Square, NY.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From custom upholstery to window treatments, we provide comprehensive solutions for all your home and commercial needs.
          </p>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg text-red-800 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-red-800 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Refinishing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Furniture Refinishing
              </h2>
              <p className="text-gray-700 mb-6">
                Our expert furniture refinishing services bring new life to your wooden furniture pieces. Whether it's an antique that needs restoration or a family heirloom that deserves preservation, our skilled craftsmen handle each project with care and precision.
              </p>
              <p className="text-gray-700 mb-6">
                We use traditional techniques combined with modern materials to ensure your furniture not only looks beautiful but also maintains its structural integrity for years to come.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-800 mr-3" />
                  <span className="text-gray-700">Wood repair and restoration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-800 mr-3" />
                  <span className="text-gray-700">Staining and finishing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-800 mr-3" />
                  <span className="text-gray-700">Antique preservation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Beautiful Vibrant Teal Vintage Sofa.png"
                alt="Furniture refinishing and restoration work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Get in touch with The Square Decorators
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for professional upholstery and design services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential & Commercial Services</h3>
              <p className="text-gray-700 mb-6">
                We have the materials, expertise, and craftsmanship to handle all your residential and commercial furniture and window treatment needs.
              </p>
              <p className="text-gray-700 mb-8">
                Call us at (516) 216-1630 or visit our showroom at 85 Franklin Ave, Franklin Square NY 11010 to browse our extensive collection of fabric, vinyl, and leather samples.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-red-800" />
                  <span className="text-gray-700 font-semibold">(516) 216-1630</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-red-800 mt-0.5" />
                  <span className="text-gray-700">
                    85 Franklin Ave<br />
                    Franklin Square, NY 11010
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Can We Help You Today?</h3>
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">• Custom upholstery and reupholstery</p>
                <p className="text-gray-700">• Window treatments and drapery</p>
                <p className="text-gray-700">• Custom slipcovers</p>
                <p className="text-gray-700">• Cushions and pillows</p>
                <p className="text-gray-700">• Furniture restoration</p>
                <p className="text-gray-700">• Custom sewing services</p>
              </div>
              <Link href="/contact" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block">
                Get Your Free Quote
              </Link>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Work</h4>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Blog Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Latest Portfolio Work</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Design Tips & Insights</h3>
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
    </div>
  )
}
