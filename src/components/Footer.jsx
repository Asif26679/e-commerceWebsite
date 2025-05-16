import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-2">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">ShopMate</h2>
          <p className="text-sm">Your trusted destination for modern shopping experience. Discover your style, anywhere, anytime.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/help" className="hover:text-white">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@shopmate.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Newsletter</h3>
          <p className="text-sm mb-2">Subscribe to get latest updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-l bg-gray-800 text-white outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;