import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Share2, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191C1F] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      {/* Newsletter Subscribe Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#1B6392] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-sm text-blue-100 max-w-md">
              Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email address..." 
              className="px-4 py-3 rounded-md text-gray-900 text-sm outline-none w-full sm:w-80"
            />
            <button className="bg-[#FA8231] hover:bg-[#E07124] text-white px-6 py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 transition">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-[#FA8231] text-white font-extrabold text-xl px-3 py-1.5 rounded inline-block">
            CLICON
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Clicon is a premium eCommerce marketplace offering high quality electronics, laptops, consoles, accessories and more.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#FA8231]" />
              <span>(704) 555-0127</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#FA8231]" />
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#FA8231]" />
              <span>info@clicon-marketplace.com</span>
            </div>
          </div>
        </div>

        {/* Top Category */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Top Category</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition">Computer & Laptop</a></li>
            <li><a href="#" className="hover:text-white transition">SmartPhone</a></li>
            <li><a href="#" className="hover:text-white transition">Headphone</a></li>
            <li><a href="#" className="hover:text-white transition">Accessories</a></li>
            <li><a href="#" className="hover:text-white transition">Camera & Photo</a></li>
            <li><a href="#" className="hover:text-white transition">TV & Homes</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition">Shop Product</a></li>
            <li><a href="#" className="hover:text-white transition">Shopping Cart</a></li>
            <li><a href="#" className="hover:text-white transition">Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition">Compare</a></li>
            <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Help</a></li>
          </ul>
        </div>

        {/* Download App & Social */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Download App</h4>
          <div className="space-y-2 mb-6">
            <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs flex items-center gap-3 cursor-pointer text-white">
              <span>Google Play Store</span>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs flex items-center gap-3 cursor-pointer text-white">
              <span>Apple App Store</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 bg-gray-800 hover:bg-[#FA8231] hover:text-white rounded transition"><Share2 size={16} /></a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-[#FA8231] hover:text-white rounded transition"><Globe size={16} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        Kinbo - eCommerce Template © 2026. Design by TemplateCookie & Clicon React.
      </div>
    </footer>
  );
};
