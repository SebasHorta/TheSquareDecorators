import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-200">THE SQUARE</span> DECORATORS
            </h3>
            <p className="text-red-100 mb-4">
              Custom upholstery and Re-upholstery, Window Treatments, Slipcovers, 
              Cushions, Pillows, Furniture Restoration.
            </p>
            <p className="text-red-100">
              "Changing People's lives one space at a time"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-red-100 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-red-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/workshops" className="text-red-100 hover:text-white transition-colors">Workshops</Link></li>
              <li><Link href="/portfolio" className="text-red-100 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-red-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-red-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-200" />
                <span className="text-red-100">(516) 216-1630</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-red-200 mt-0.5" />
                <span className="text-red-100">
                  85 Franklin Ave.<br />
                  Franklin Square, NY 11010
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center">
          <p className="text-red-200">
            © 2025 The Square Decorators. All rights reserved. | 
            Site Designed by Sebastian Horta
          </p>
        </div>
      </div>
    </footer>
  )
}
