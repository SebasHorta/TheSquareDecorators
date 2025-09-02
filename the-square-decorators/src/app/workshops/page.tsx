import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, MapPin, CheckCircle, BookOpen, Users, Clock, Wrench } from 'lucide-react'

export default function Workshops() {
  const materials = [
    "Wood for the frame",
    "Jute webbing strap", 
    "Stapler and staples",
    "Good and strong scissors",
    "Pins with round heads",
    "Fabric (upholstery, bottom, interior)",
    "Dacron fiber",
    "Firm density foam"
  ]

  const workshopSteps = [
    {
      step: "STEP 1",
      title: "WE PLACE OUR JUTE WEBBING IN THE FRAME",
      description: "The first thing is to place the straps on the wood base. With the help of a stapler and the webbing stretcher, we fix the strips to the wood.",
      note: "Place the straps leaving a few centimeters between them."
    },
    {
      step: "STEP 2", 
      title: "PLACING THE FOAM",
      description: "On our Jute webbing strap place a piece of fabric that will serve to protect the interior and staple it around the wood and place the foam on it.",
      note: "You have to take into the final height. Each layer has specific dimensions that we are going to add up to reach the height of the feel that we like the most."
    },
    {
      step: "STEP 3",
      title: "PLACING THE FABRIC", 
      description: "This step involves carefully placing and securing the main upholstery fabric to create the finished look.",
      note: "Take your time to ensure smooth, wrinkle-free application."
    },
    {
      step: "STEP 4",
      title: "BLACK CLOTH ON THE BOTTOM",
      description: "The final step involves adding the black cloth to the bottom for a professional finish.",
      note: "This gives your piece a clean, professional appearance."
    }
  ]

  const objectives = [
    "Define upholstery work",
    "State and explain the types of upholstery work", 
    "Appreciate upholstery work as another method of furniture design"
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
            UPHOLSTERY WORKSHOPS
          </h1>
          <p className="text-xl text-red-100 mb-4">
            Hosted by The Square Decorators
          </p>
          <p className="text-lg text-red-200 max-w-3xl mx-auto">
            Learn different techniques and take lots of interesting ideas from our expert-led workshops.
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
                <span className="text-gray-700 ml-2">Workshops</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              WELCOME TO OUR UPHOLSTERY WORKSHOP
            </h2>
            <div className="bg-red-800 text-white rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">CALL: (516) 216-1630</span>
              </div>
              <p className="text-red-100">Ask for Triny – Preguntar por Triny</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Learn to Upholster a Beautiful Footstool
              </h3>
              <p className="text-gray-700 mb-6">
                This workshop is a great opportunity to learn different techniques and take lots of interesting ideas. On this workshop, we are going to make a beautiful footstool.
              </p>
              <p className="text-gray-700 mb-6">
                To learn more about how to make this wonderful piece or other projects it is best to go through Triny's workshops, but I'm going to summarize everything that we experienced in that interesting workshop in which we learned how to upholster.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 font-semibold">
                  The key to helping you to upholster at home a footstool or any other piece of furniture
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="/images/custom_upholstery-1030x724.jpg"
                  alt="Upholstery Workshop"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Upholstery Workshop</p>
              </div>
              <div className="relative">
                <Image
                  src="/images/custom_Slipcovers-1030x724.jpg"
                  alt="Upholstery Workshop"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Upholstery Workshop</p>
              </div>
              <div className="relative">
                <Image
                  src="/images/Window-Treatments8-1030x773.jpg"
                  alt="Upholstery Workshop"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Upholstery Workshop</p>
              </div>
              <div className="relative">
                <Image
                  src="/images/Patio-Cushions4.jpg"
                  alt="Upholstery Workshop"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Upholstery Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Important Considerations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-red-800 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">FIRST THING</h3>
              </div>
              <p className="text-gray-700">
                That you have to take into consideration is that it is a work full of fun, patience and in which any detail is important.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-800 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">NOTE</h3>
              </div>
              <p className="text-gray-700">
                Even if you do not see inside, you have to take care of the whole process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-red-800 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">SUGGESTION</h3>
              </div>
              <p className="text-gray-700">
                Make a detailed list of what we are going to need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            WORKSHOP MATERIALS
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These are the basic materials for upholstery, but there are other tools that can be very useful like a webbing stretcher, staple remover, and more.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Materials</h3>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-red-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Safety Note:</strong> When using the staple remover, be careful with your hands. Never put your hand in front of you because we can finish nailing the tool.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/Hello Kitty Head Board.png"
                alt="Upholstery materials and tools"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Workshop Process
          </h2>
          
          <div className="space-y-8">
            {workshopSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.step}</h3>
                    <h4 className="text-xl text-red-800 font-semibold">{step.title}</h4>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{step.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-gray-700 font-semibold">NOTE: {step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Workshop Objectives
          </h2>
          <p className="text-center text-gray-600 mb-8">
            At the end of this workshop you will be able to:
          </p>
          
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-red-800 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Workshop Video */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch Our Workshop Video
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Learn how to sew Project SOS - Course of cutting and preparation focused on business
          </p>
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
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
            <a 
              href="https://www.youtube.com/watch?v=psqcd1qOJ6M&t=43s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block"
            >
              Watch Full Workshop Video
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            QUESTIONS BEFORE YOU REGISTER?
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-200 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-200 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-200 focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Get in touch with The Square Decorators
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to join our workshop? Contact us today for more information.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential & Commercial Services</h3>
              <p className="text-gray-700 mb-8">
                We look forward to hearing from you!
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Can We Help You With?</h3>
              <Link href="/contact" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block">
                Get in Contact
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
