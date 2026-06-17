import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemove, onUpdateQty }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" /> Keranjang Belanja
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Keranjang Anda masih kosong.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-blue-600 font-semibold"
                  >
                    Mulai Belanja
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">{formatPrice(item.price)}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-lg">
                            <button 
                              onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-50"
                            >-</button>
                            <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-50"
                            >+</button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Total Pembayaran</span>
                  <span className="text-xl font-bold">{formatPrice(total)}</span>
                </div>
                <button className="w-full btn-primary py-4 text-lg">
                  Checkout Sekarang
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Pajak dan biaya pengiriman dihitung saat checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}