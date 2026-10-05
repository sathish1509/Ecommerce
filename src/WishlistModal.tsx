import type { Product } from "./data";
import React from 'react';
import { X, Trash2, Heart, ShoppingCart } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#191C1F] text-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base">
            <Heart size={20} className="text-[#FA8231]" fill="currentColor" />
            <span>My Wishlist ({wishlistItems.length})</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistItems.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center text-gray-500">
              <Heart size={48} className="text-gray-300 mb-2" />
              <p className="font-semibold text-gray-700">Your wishlist is empty</p>
              <p className="text-xs text-gray-500">Save items you like to view them later.</p>
            </div>
          ) : (
            wishlistItems.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 gap-4">
                <img src={product.image} alt={product.name} className="w-14 h-14 object-contain bg-white rounded p-1" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-gray-800 truncate">{product.name}</h4>
                  <span className="text-xs font-bold text-[#2DA5F3]">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveFromWishlist(product);
                    }}
                    className="bg-[#FA8231] hover:bg-[#E07124] text-white text-xs font-medium px-3 py-1.5 rounded flex items-center gap-1 transition"
                  >
                    <ShoppingCart size={14} /> Add
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="p-1.5 text-gray-400 hover:text-red-500 rounded transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
