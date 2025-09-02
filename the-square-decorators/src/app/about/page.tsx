import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Facebook, Instagram, Phone, MapPin, Award, Users, Clock } from 'lucide-react'

export default function About() {
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

  const values = [
    {
      icon: <Award className="h-8 w-8 text-red-800" />,
      title: "Quality Craftsmanship",
      description: "Every project receives our full attention to detail and commitment to excellence."
    },
    {
      icon: <Users className="h-8 w-8 text-red-800" />,
      title: "Personalized Service",
      description: "We work closely with each client to bring their unique vision to life."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-800" />,
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule without compromising quality."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About The Square Decorators
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-red-100">
            "Changing People's lives one space at a time"
          </p>
          <p className="text-lg text-red-200 max-w-3xl mx-auto">
            Your one-stop resource for creating a new look for your home or workspace in Franklin Square, NY.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Franklin Square's Trusted Upholstery Experts
              </h2>
              <p className="text-gray-700 mb-6">
                Located at 85 Franklin Ave in Franklin Square, New York, The Square Decorators is your trusted partner for transforming living spaces. We bring your design ideas to life with expert craftsmanship and attention to detail.
              </p>
              <p className="text-gray-700 mb-6">
                Our goal is to create something amazing for each client that is completely unique and steeped in luxury, through and through.
              </p>
              <p className="text-gray-700">
                The Square Decorators proudly serves as the one-stop resource for Interior Designers and Decorators throughout Long Island, providing professional-grade services that exceed expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/l.jpg"
                alt="The Square Decorators custom upholstery work"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer a full range of upholstery and design services to meet all your home and commercial needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Upholstery</h3>
              <p className="text-gray-600">Transform your furniture with premium fabrics and expert craftsmanship.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Window Treatments</h3>
              <p className="text-gray-600">Custom drapes, valances, shades, and cornices for every style.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Slipcovers</h3>
              <p className="text-gray-600">Perfect-fit slipcovers that protect and enhance your furniture.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cushions & Pillows</h3>
              <p className="text-gray-600">Custom cushions and decorative pillows for indoor and outdoor spaces.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Restoration</h3>
              <p className="text-gray-600">Expert care for wooden furniture, antiques, and family heirlooms.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Sewing</h3>
              <p className="text-gray-600">Professional seamstress services for all your fabric needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Always Something Different */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Always Something Different
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Every project is unique, and we approach each one with fresh creativity and attention to your specific needs and style preferences.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/images/Hello Kitty Head Board.png"
                alt="Unique custom upholstery project"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">Custom Upholstery Excellence</h3>
              <p className="text-red-100 mb-6">
                From traditional elegance to modern innovation, we create pieces that reflect your personality and enhance your space.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-red-100">Google Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-red-100">Facebook Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-red-100">Yelp Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-red-100">FourSquare Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Get in Touch with The Square Decorators
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
                  <a href="#" className="text-red-800 hover:text-red-600">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-red-800 hover:text-red-600">
                    <Instagram className="h-6 w-6" />
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
