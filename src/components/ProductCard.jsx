import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden card-shadow transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-1 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{formatPrice(product.price)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="p-2 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}