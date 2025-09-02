import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: "WINDOW TREATMENTS",
      description: "Premium custom drapes, valances, shades, and cornices tailored to your style.",
      image: "/images/Window-Treatments8-1030x773.jpg"
    },
    {
      title: "CUSTOM UPHOLSTERY",
      description: "Transform worn furniture into stunning, comfortable pieces that match your home.",
      image: "/images/custom_upholstery-1030x724.jpg"
    },
    {
      title: "CUSTOM SLIPCOVERS",
      description: "Perfect-fit slipcovers that protect and enhance your existing furniture.",
      image: "/images/custom_Slipcovers-1030x724.jpg"
    },
    {
      title: "CUSHIONS & PILLOWS",
      description: "Custom cushions and decorative pillows for indoor and outdoor spaces.",
      image: "/images/Patio-Cushions4.jpg"
    },
    {
      title: "FURNITURE RESTORATION",
      description: "Expert care for wooden furniture, antiques, and family heirlooms.",
      image: "/images/sofa_the_Square_Decorators.jpg"
    },
    {
      title: "CUSTOM SEWING SERVICES",
      description: "Professional seamstress services for all your fabric and tailoring needs.",
      image: "/images/Plastic_Slipcovers-Recovered-1030x724.jpg"
    }
  ]

  const testimonials = [
    {
      name: "Robert Maurice",
      service: "Indoor/Outdoor Cushions",
      text: "The quality of workmanship was outstanding. They completed my sofa in one week for a very reasonable price! I'm beyond happy with their work and I highly recommend The Square Decorators."
    },
    {
      name: "Jennifer Sanders",
      service: "Window Treatments",
      text: "I have used this company in the past for my home. Now I ordered window treatments for my business. Great eye for design, very quick and professional service. Thank you Square Decorators"
    },
    {
      name: "Loraine Carlson",
      service: "Slip covers",
      text: "Beautiful, beautiful…you cannot go wrong with The Square Decorators…so comfy and classic. Have a wonderful weekend! Stay warm and safe!"
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
            THE SQUARE DECORATORS
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-red-100">
            "Changing People's lives one space at a time"
          </p>
          <p className="text-lg mb-8 text-red-200">
            PREMIUM CUSTOM UPHOLSTERY • LUXURY WINDOW TREATMENTS • PROFESSIONAL SLIPCOVERS • EXPERT FURNITURE RESTORATION • CUSTOM CUSHIONS & PILLOWS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              EXPLORE OUR SERVICES
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors">
              GET FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Franklin Square's Premier Upholstery & Design Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Professional custom upholstery, window treatments, slipcovers, cushions, pillows, and furniture restoration services in Franklin Square, NY.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Located at 85 Franklin Ave in Franklin Square, New York, The Square Decorators brings your design ideas to life with expert craftsmanship and attention to detail.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to create exceptional, one-of-a-kind pieces for every client that embody luxury and quality. We believe every home deserves furniture and decor that reflects your unique style.
              </p>
              <p className="text-gray-700">
                The Square Decorators proudly serves as the go-to resource for Interior Designers and Decorators throughout Long Island.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Beautiful Vibrant Teal Vintage Sofa.png"
                alt="Beautiful custom upholstery and furniture restoration work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Professional Services We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From custom upholstery to window treatments, we provide comprehensive home decor solutions with quality craftsmanship.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reupholstery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Expert Reupholstery & Custom Upholstery Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Give your furniture a complete transformation with our professional reupholstery services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                We specialize in bringing "New Life" to any existing furniture piece. Our reupholstery services refresh rooms, introduce new colors, and completely transform old furniture into something spectacular.
              </p>
              <p className="text-gray-700 mb-6">
                We transform tired furniture into stylish pieces using premium fabrics, high-quality foam, updated springs, custom arm caps, accent cushions, and professional wood touch-ups.
              </p>
              <p className="text-gray-700">
                All work is completed on-site. Bring your own fabric or choose from our extensive collection of sample books.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Hello Kitty Head Board.png"
                alt="Custom upholstery and furniture restoration work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Transparent Pricing - What's Included?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We believe in complete transparency when it comes to pricing.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Always get detailed estimates in writing. Some upholsterers claim "the price includes everything," but without specifics, how do you know what you're getting?
            </p>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                • Will existing cushion fill be replaced or just wrapped?</p>
              <p className="text-gray-700">
                • Will old covers be removed or covered over?</p>
              <p className="text-gray-700">
                • Will the frame be stripped to bare wood for complete restoration?</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-800 p-4">
              <p className="text-gray-700 font-semibold">
                At The Square Decorators, we provide detailed, written estimates so you know exactly what you're getting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yelp Reviews & YouTube Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews & Educational Content
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              See what our customers say and learn from our expert workshops!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Yelp Reviews */}
            <div className="bg-red-800 text-white rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-400 fill-current mr-2" />
                <h3 className="text-2xl font-bold">Yelp Reviews</h3>
              </div>
              <p className="text-red-100 mb-6">
                "The owner, Triny is incredibly professional, kind, and easy to work with. Her workmanship is BEYOND superb! Highly recommended.....10 out of 10." - Elena M.
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <a 
                href="https://www.yelp.com/writeareview/biz/0fwIrUth1-FYyo2u2nWxyQ?return_url=/biz/0fwIrUth1-FYyo2u2nWxyQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Read More Reviews
              </a>
            </div>

            {/* YouTube Workshop */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Youtube className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-2xl font-bold">Learn From Triny</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Watch our workshop video: "Learn how to sew Project SOS, Course of cutting and preparation focused on business"
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="aspect-video bg-gray-700 rounded flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/psqcd1qOJ6M/maxresdefault.jpg" 
                    alt="YouTube Workshop Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.youtube.com/watch?v=psqcd1qOJ6M&t=43s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Watch Workshop Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-red-100 mb-12 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-red-700 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-red-100 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-red-600 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-red-200 text-sm">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Help Us Grow - Share Your Experience</h3>
            <p className="text-red-100 mb-8 max-w-3xl mx-auto">
              Thank you for being one of our valued clients! We're building our online presence and would love for you to share your experience. Your testimonials help others understand the value we bring.
            </p>
            <p className="text-red-100 mb-8">
              Best regards,<br />
              <span className="font-semibold">Helmer & Triny</span>
            </p>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Refer a Friend & Save 20%
          </h2>
          <p className="text-gray-600 mb-8">
            Love our work? Share it with friends and family and save on your next project!
          </p>
          <div className="bg-red-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Claim Your 20% Discount</h3>
            <p className="text-xl mb-6">Every time you refer a new customer, you both save!</p>
            <Link href="/contact" className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              START REFERRING TODAY
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Contact The Square Decorators today for professional upholstery and design services in Franklin Square, NY.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential & Commercial Services</h3>
              <p className="text-gray-700 mb-6">
                We have the materials, expertise, and craftsmanship to handle all your residential and commercial furniture and window treatment needs.
              </p>
              <p className="text-gray-700 mb-8">
                Call us at (516) 216-1630 or visit our showroom at 85 Franklin Ave, Franklin Square NY 11010 to browse our fabric samples.
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
