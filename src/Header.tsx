import type { CartItem } from "./data";
import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Phone, 
  ChevronDown, 
  Menu, 
  ArrowRight,
  X,
  Check,
  Share2,
  Globe
} from 'lucide-react';

interface HeaderProps {
  cartItems: CartItem[];
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearch: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSearch,
  selectedCategory,
  onSelectCategory,
  onNavigate,
  activePage
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCatMenu, setShowCatMenu] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'deals', label: 'Best Deals' },
    { id: 'customer-support', label: 'Customer Support' },
    { id: 'need-help', label: 'Need Help' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      {/* Top Discount Banner */}
      {showBanner && (
        <div className="bg-[#191C1F] text-white text-xs md:text-sm py-2 px-4 flex items-center justify-between">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center w-full">
            <span className="bg-[#EBC80C] text-[#191C1F] font-bold px-2 py-0.5 rounded text-xs">Black Friday</span>
            <span className="text-gray-300">Up to <strong className="text-white font-semibold">59% OFF</strong> for Electronics & Home Appliances!</span>
            <button 
              onClick={() => onNavigate('shop')} 
              className="bg-[#FA8231] hover:bg-[#E07124] text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-all"
            >
              Shop Now <ArrowRight size={14} />
            </button>
          </div>
          <button 
            onClick={() => setShowBanner(false)}
            className="text-gray-400 hover:text-white p-1 rounded"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className="bg-[#191C1F] text-gray-300 text-xs py-2 px-4 border-t border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>Welcome to Clicon online eCommerce store.</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-gray-700 pr-4">
              <span>Follow us:</span>
              <a href="#" className="hover:text-[#FA8231] transition"><Share2 size={14} /></a>
              <a href="#" className="hover:text-[#FA8231] transition"><Globe size={14} /></a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 cursor-pointer hover:text-white">USD <ChevronDown size={12} /></span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-white">Eng <ChevronDown size={12} /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#191C1F] text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-[#FA8231] p-2 rounded-lg font-extrabold text-white text-xl tracking-wider">
              CLICON
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-2xl hidden md:flex items-center">
            <div className="relative w-full flex items-center bg-white rounded-md overflow-hidden text-gray-800">
              <input 
                type="text" 
                placeholder="Search for anything... (e.g. Xbox, Bose, Laptop)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 outline-none text-sm"
              />
              <button 
                type="submit" 
                className="bg-[#FA8231] hover:bg-[#E07124] text-white px-5 py-2.5 transition flex items-center gap-1 font-medium text-sm"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button 
              onClick={onOpenWishlist} 
              className="relative p-2 text-gray-200 hover:text-[#FA8231] transition"
              title="Wishlist"
            >
              <Heart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#FA8231] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenCart} 
              className="relative flex items-center gap-2 p-2 text-gray-200 hover:text-[#FA8231] transition"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FA8231] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:block text-left text-xs">
                <div className="text-gray-400">Shopping cart:</div>
                <div className="font-bold text-white">${cartSubtotal.toFixed(2)}</div>
              </div>
            </button>

            <button className="p-2 text-gray-200 hover:text-[#FA8231] transition" title="Account">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links & Categories */}
      <div className="bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Category Dropdown Toggle */}
            <div className="relative">
              <button 
                onClick={() => setShowCatMenu(!showCatMenu)}
                className="bg-[#F2F4F5] hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded text-sm flex items-center gap-2 transition"
              >
                <Menu size={18} />
                <span>All Category</span>
                <ChevronDown size={16} />
              </button>

              {showCatMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-2 animate-fade-in">
                  {['All', 'Consoles', 'Audio', 'Wearables', 'Laptops', 'Cameras', 'Tablets', 'Accessories'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onSelectCategory(cat);
                        setShowCatMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 ${
                        selectedCategory === cat ? 'text-[#FA8231] font-semibold bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check size={16} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-medium transition py-1 ${
                    activePage === link.id
                      ? 'text-[#FA8231] font-semibold border-b-2 border-[#FA8231]'
                      : 'text-gray-600 hover:text-[#FA8231]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact phone */}
          <div className="hidden lg:flex items-center gap-2 text-gray-700 text-sm font-medium">
            <Phone size={18} className="text-[#FA8231]" />
            <span>+1-202-555-0184</span>
          </div>
        </div>
      </div>
    </header>
  );
};
