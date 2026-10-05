import React from 'react';
import { 
  Truck, 
  Trophy, 
  CreditCard, 
  Headphones, 
  ArrowRight, 
  Tag, 
  Sparkles 
} from 'lucide-react';
import { CATEGORIES } from './data';
import type { Product } from './data';
import { ProductCard } from './ProductCard';

interface HeroAndFeaturesProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: number[];
  onQuickView: (product: Product) => void;
  onSelectCategory: (cat: string) => void;
  onShopNow: () => void;
}

export const HeroAndFeatures: React.FC<HeroAndFeaturesProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  onSelectCategory,
  onShopNow
}) => {
  const featuredProduct = products.find(p => p.id === 1) || products[0];
  const dealsProducts = products.slice(0, 4);

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner Grid */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Large Hero Banner */}
          <div className="lg:col-span-2 bg-[#F2F4F5] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm">
            <div className="z-10 max-w-md space-y-4">
              <div className="flex items-center gap-2 text-[#2DA5F3] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={16} /> THE BEST PLACE TO SHOP
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Xbox Series S – <span className="text-[#FA8231]">512 GB</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Next-gen performance in the smallest Xbox ever. Includes Xbox Wireless Controller.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <button 
                  onClick={onShopNow}
                  className="bg-[#FA8231] hover:bg-[#E07124] text-white font-bold px-7 py-3 rounded-md shadow-md flex items-center gap-2 transition transform hover:-translate-y-0.5"
                >
                  Shop Now <ArrowRight size={18} />
                </button>
                <div className="text-left">
                  <span className="text-xs text-gray-500 block">Starting at</span>
                  <span className="text-xl font-extrabold text-[#2DA5F3]">$299.99</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 relative z-10 flex justify-center">
              <img 
                src={featuredProduct.image} 
                alt="Featured Product" 
                className="max-h-72 object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Secondary Banners (Stacked) */}
          <div className="flex flex-col gap-6">
            {/* Banner 1 */}
            <div className="bg-[#191C1F] text-white rounded-2xl p-6 flex items-center justify-between relative overflow-hidden">
              <div className="space-y-2 z-10 max-w-[60%]">
                <span className="text-[#EBC80C] text-xs font-bold uppercase">SUMMER SALE</span>
                <h3 className="text-lg font-bold leading-snug">New Google Pixel 6 Pro</h3>
                <button 
                  onClick={onShopNow} 
                  className="text-xs text-[#FA8231] font-bold flex items-center gap-1 hover:underline pt-1"
                >
                  Shop Now <ArrowRight size={14} />
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80" 
                alt="Smartphone" 
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Banner 2 */}
            <div className="bg-[#FFE7D6] rounded-2xl p-6 flex items-center justify-between relative overflow-hidden">
              <div className="space-y-2 z-10 max-w-[60%]">
                <span className="text-[#FA8231] text-xs font-bold uppercase">29% OFF</span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">Xiaomi FlipBuds Pro</h3>
                <button 
                  onClick={onShopNow} 
                  className="text-xs text-[#FA8231] font-bold flex items-center gap-1 hover:underline pt-1"
                >
                  Shop Now <ArrowRight size={14} />
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80" 
                alt="Earbuds" 
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value Props Strip */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-[#FA8231] rounded-lg">
              <Truck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Fasted Delivery</h4>
              <p className="text-xs text-gray-500">Delivery in 24 Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-[#2DA5F3] rounded-lg">
              <Trophy size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">24 Hours Return</h4>
              <p className="text-xs text-gray-500">100% money-back guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 text-[#2DB224] rounded-lg">
              <CreditCard size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Secure Payment</h4>
              <p className="text-xs text-gray-500">Your money is safe</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <Headphones size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Support 24/7</h4>
              <p className="text-xs text-gray-500">Live contact & chat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
          <button onClick={onShopNow} className="text-sm text-[#FA8231] font-semibold flex items-center gap-1 hover:underline">
            Browse All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES.slice(0, 6).map((cat) => (
            <div
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="bg-white border border-gray-200 hover:border-[#FA8231] rounded-xl p-4 text-center cursor-pointer transition-all hover:shadow-md group flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-700 group-hover:text-[#FA8231] transition">
                <Tag size={22} />
              </div>
              <span className="text-xs font-semibold text-gray-800 line-clamp-1">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Deals Flash Sale Section */}
      <section className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">Best Deals</h2>
            <div className="flex items-center gap-2 bg-[#FFE7D6] text-[#FA8231] px-3 py-1 rounded text-xs font-bold">
              <span>Deals ends in:</span>
              <span className="bg-[#FA8231] text-white px-1.5 py-0.5 rounded">16d : 21h : 57m</span>
            </div>
          </div>
          <button onClick={onShopNow} className="text-sm text-[#FA8231] font-semibold flex items-center gap-1 hover:underline">
            Browse All Products <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
