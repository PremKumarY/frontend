import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t dark:bg-gray-900 border-gray-700 text-gray-300 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-white">ClimaTalk</h2>
            <p className="mt-2 text-gray-400">
              Empowering debates with AI. Join us in creating impactful discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} ClimaTalk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
