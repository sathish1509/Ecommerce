import type { CartItem } from "./data";
import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 bg-[#191C1F] text-white flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-lg">
              <ShoppingBag size={20} className="text-[#FA8231]" />
              <span>Shopping Cart ({cartItems.length})</span>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-base font-semibold text-gray-700">Your cart is currently empty</p>
                <p className="text-xs text-gray-500 mt-1">Explore our latest electronics and best sellers!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-16 h-16 object-contain bg-white rounded p-1 border border-gray-100"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-800 line-clamp-1">{item.product.name}</h4>
                      <span className="text-xs font-bold text-[#2DA5F3] mt-1 block">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition"
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800">
                <span>Subtotal:</span>
                <span className="text-lg font-bold text-[#FA8231]">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-gray-500 text-center">Taxes and shipping calculated at checkout</p>
              
              <button
                onClick={onCheckout}
                className="w-full bg-[#FA8231] hover:bg-[#E07124] text-white py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 shadow transition"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
