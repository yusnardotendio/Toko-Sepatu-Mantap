import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" />
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              MANTAP<span className="text-blue-600">SHOES</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 font-medium text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">Pria</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Wanita</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Anak-anak</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Promo</a>
          </div>

          <div className="flex items-center gap-5">
            <Search className="h-5 w-5 cursor-pointer text-gray-600 hover:text-slate-900" />
            <User className="h-5 w-5 cursor-pointer text-gray-600 hover:text-slate-900" />
            <button 
              onClick={onOpenCart}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}