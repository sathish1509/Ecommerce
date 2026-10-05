import type { Product } from "./data";
import React from 'react';
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView
}) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
        {product.discountPercent && (
          <span className="bg-[#EE5858] text-white text-[11px] font-bold px-2 py-0.5 rounded">
            {product.discountPercent}% OFF
          </span>
        )}
        {product.isHot && (
          <span className="bg-[#FA8231] text-white text-[11px] font-bold px-2 py-0.5 rounded">
            HOT
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#2DB224] text-white text-[11px] font-bold px-2 py-0.5 rounded">
            BEST SELLER
          </span>
        )}
      </div>

      {/* Image container & quick actions */}
      <div className="relative p-4 bg-gray-50 flex items-center justify-center h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover action overlay buttons */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onToggleWishlist(product)}
            className={`p-2.5 rounded-full shadow-md transition ${
              isWishlisted ? 'bg-[#FA8231] text-white' : 'bg-white text-gray-700 hover:bg-[#FA8231] hover:text-white'
            }`}
            title="Add to Wishlist"
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-white text-gray-700 hover:bg-[#FA8231] hover:text-white rounded-full shadow-md transition"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-2.5 bg-white text-gray-700 hover:bg-[#FA8231] hover:text-white rounded-full shadow-md transition"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1 text-xs">
            <div className="flex text-[#EBC80C]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating) ? "text-[#EBC80C]" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-gray-500 font-medium">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-[#FA8231] cursor-pointer transition mb-2"
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Add button */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#2DA5F3]">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2 bg-[#FFE7D6] text-[#FA8231] hover:bg-[#FA8231] hover:text-white rounded transition"
            title="Add to Cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
