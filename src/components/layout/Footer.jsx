import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Fixed Vertical Social Bar (Right side) */}
      <div className="hidden lg:flex fixed top-2/3 right-4 flex-col gap-4 z-50">
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-600 transition"
        >
          <FaWhatsapp size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-600 transition"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition"
        >
          <FaFacebookF size={18} />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-yellow-100 border-t border-gray-200 py-10 mt-16 text-black select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-4">NoirCloth</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              NoirCloth offers stylish, quality clothing with an eye for detail and comfort.
              Fashion made simple and elegant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-3">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="hover:text-yellow-500 transition">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info + Icons */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-3">Contact Us</h4>
            <address className="not-italic text-gray-700 text-sm leading-relaxed mb-4">
              Email:{" "}
              <a href="mailto:support@noircloth.com" className="hover:text-yellow-500 transition">
                support@noircloth.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:text-yellow-500 transition">
                +91 12345 67890
              </a>
              <br />
              Address: 123 Fashion St, Jaipur, India
            </address>

            {/* Social Icons in Footer */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} NoirCloth. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
