import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: qty } : item
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                Koleksi Baru 2024
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                LANGKAH PASTI <br />
                <span className="text-blue-500">GAYA MANTAP.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg">
                Temukan koleksi sepatu terbaik untuk performa olahraga dan gaya hidup urban Anda. Kualitas premium dengan harga terjangkau.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                  Belanja Sekarang <ArrowRight className="h-5 w-5" />
                </button>
                <button className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  Lihat Katalog
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Gratis Ongkir</h4>
                <p className="text-sm text-gray-500">Seluruh wilayah Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Garansi Original</h4>
                <p className="text-sm text-gray-500">100% Produk asli atau uang kembali</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Pengiriman Cepat</h4>
                <p className="text-sm text-gray-500">Sampai dalam 1-3 hari kerja</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Produk Terpopuler</h2>
              <p className="text-gray-500">Pilihan terbaik untuk gaya harianmu</p>
            </div>
            <div className="hidden md:flex gap-2">
              {['Semua', 'Lari', 'Lifestyle', 'Basket'].map(cat => (
                <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter mb-6 block">
              MANTAP<span className="text-blue-500">SHOES</span>
            </span>
            <p className="text-slate-400 max-w-sm mb-6">
              Destinasi utama Anda untuk sepatu berkualitas di Indonesia. Kami berkomitmen memberikan kenyamanan di setiap langkah Anda.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Status Pesanan</a></li>
              <li><a href="#" className="hover:text-white">Pengiriman</a></li>
              <li><a href="#" className="hover:text-white">Pengembalian</a></li>
              <li><a href="#" className="hover:text-white">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">TikTok</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          &copy; 2024 Toko Sepatu Mantap. Dibuat dengan bangga di Indonesia.
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
}

export default App;