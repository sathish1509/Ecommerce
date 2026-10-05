import { PRODUCTS, CATEGORIES } from "./data";
import type { Product, CartItem } from "./data";
import { useState, useMemo } from 'react';
import { Header } from './Header';
import { HeroAndFeatures } from './HeroAndFeatures';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { CartDrawer } from './CartDrawer';
import { WishlistModal } from './WishlistModal';
import { Footer } from './Footer';
import { SlidersHorizontal, Check } from 'lucide-react';

export function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[1], quantity: 2 }
  ]);
  const [wishlist, setWishlist] = useState<Product[]>([PRODUCTS[4]]);

  // Modals & Panels state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  // Shop Filter States
  const [priceRange, setPriceRange] = useState<number>(2500);

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, priceRange]);

  // Handlers
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const wishlistIds = wishlist.map((p) => p.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Header */}
      <Header
        cartItems={cartItems}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearch={(query) => {
          setSearchQuery(query);
          setActivePage('shop');
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActivePage('shop');
        }}
        onNavigate={(page) => setActivePage(page)}
        activePage={activePage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HeroAndFeatures
            products={PRODUCTS}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActivePage('shop');
            }}
            onShopNow={() => setActivePage('shop')}
          />
        )}

        {(activePage === 'shop' || activePage === 'deals') && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Breadcrumb Header */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-center justify-between">
              <div className="text-xs text-gray-600">
                <span className="cursor-pointer hover:text-[#FA8231]" onClick={() => setActivePage('home')}>Home</span> / <span className="font-semibold text-gray-900">{selectedCategory} Category</span>
              </div>
              <div className="text-xs font-semibold text-gray-700">
                Showing {filteredProducts.length} results
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-fit space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100 font-bold text-gray-900">
                  <SlidersHorizontal size={18} className="text-[#FA8231]" /> Filter Products
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase mb-3">Category</h4>
                  <div className="space-y-1 text-sm">
                    {['All', ...CATEGORIES.map((c) => c.name)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-2 py-1.5 rounded text-xs flex justify-between items-center transition ${
                          selectedCategory === cat ? 'bg-orange-50 text-[#FA8231] font-semibold' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase mb-3">Price Range</h4>
                  <input
                    type="range"
                    min="50"
                    max="2500"
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-[#FA8231]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                    <span>$50</span>
                    <span className="font-bold text-[#FA8231]">${priceRange}</span>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange(2500);
                    setSearchQuery('');
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded text-xs transition"
                >
                  Reset All Filters
                </button>
              </div>

              {/* Product Grid Area */}
              <div className="lg:col-span-3">
                {filteredProducts.length === 0 ? (
                  <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500">
                    <p className="text-lg font-bold text-gray-800">No products match your criteria</p>
                    <p className="text-xs text-gray-500 mt-1">Try adjusting your category or price filter slider.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={(p) => handleAddToCart(p, 1)}
                        onToggleWishlist={handleToggleWishlist}
                        isWishlisted={wishlistIds.includes(product.id)}
                        onQuickView={(p) => setQuickViewProduct(p)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {(activePage === 'customer-support' || activePage === 'need-help') && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
            <h1 className="text-3xl font-extrabold text-gray-900">How can we help you?</h1>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Our 24/7 dedicated customer success team is available to assist you with order tracking, returns, and product technical specifications.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-sm text-gray-900 mb-1">Track Order</h3>
                <p className="text-xs text-gray-500">Check current delivery status of your package</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-sm text-gray-900 mb-1">Returns & Refund</h3>
                <p className="text-xs text-gray-500">Initiate easy 24-hour return requests</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-sm text-gray-900 mb-1">Live Chat</h3>
                <p className="text-xs text-gray-500">Chat directly with product specialists</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-out Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          alert('Order placed successfully! Thank you for purchasing from Clicon.');
          setCartItems([]);
          setIsCartOpen(false);
        }}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />
    </div>
  );
}

export default App;
