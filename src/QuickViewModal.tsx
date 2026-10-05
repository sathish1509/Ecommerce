import type { Product } from "./data";
import React, { useState } from 'react';
import { X, Plus, Minus, Heart, ShoppingCart, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState<'desc' | 'specs'>('desc');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto p-6 md:p-8 gap-8">
          {/* Product Image */}
          <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 object-contain hover:scale-105 transition-transform"
            />
            {product.discountPercent && (
              <span className="mt-4 bg-[#EE5858] text-white text-xs font-bold px-3 py-1 rounded-full">
                Save {product.discountPercent}%
              </span>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Rating & Stock */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1 text-xs">
                  <div className="flex text-[#EBC80C]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        className={i < Math.floor(product.rating) ? "text-[#EBC80C]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700 ml-1">{product.rating} Star Rating</span>
                  <span className="text-gray-400">({product.reviewsCount} User Feedback)</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded">
                  In Stock ({product.stock})
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-extrabold text-[#2DA5F3]">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <hr className="my-4 border-gray-200" />

              {/* Tabs: Description vs Specs */}
              <div className="flex border-b border-gray-200 mb-3">
                <button
                  onClick={() => setSelectedTab('desc')}
                  className={`pb-2 px-1 mr-4 font-semibold text-sm border-b-2 transition ${
                    selectedTab === 'desc'
                      ? 'border-[#FA8231] text-[#FA8231]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setSelectedTab('specs')}
                  className={`pb-2 px-1 font-semibold text-sm border-b-2 transition ${
                    selectedTab === 'specs'
                      ? 'border-[#FA8231] text-[#FA8231]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Specifications
                </button>
              </div>

              {selectedTab === 'desc' ? (
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {product.description || "High performance genuine product with official brand warranty."}
                </p>
              ) : (
                <div className="text-xs space-y-2 mb-6">
                  {product.specs && Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">{key}:</span>
                      <span className="text-gray-800 font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1 text-sm font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 bg-[#FA8231] hover:bg-[#E07124] text-white font-semibold py-3 px-6 rounded-md shadow flex items-center justify-center gap-2 transition"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 border rounded-md transition ${
                    isWishlisted 
                      ? 'border-[#FA8231] bg-orange-50 text-[#FA8231]' 
                      : 'border-gray-300 text-gray-600 hover:border-[#FA8231] hover:text-[#FA8231]'
                  }`}
                  title="Wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center text-[11px] text-gray-600">
                <div className="flex flex-col items-center">
                  <Truck size={18} className="text-[#FA8231] mb-1" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck size={18} className="text-[#FA8231] mb-1" />
                  <span>100% Money Back</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw size={18} className="text-[#FA8231] mb-1" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
