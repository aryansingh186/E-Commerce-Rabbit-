import React from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import CartContents from '../cart/CartContents';

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  const hasItems = true; // change to false to test empty state

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={toggleDrawer}
          className="text-gray-600 hover:text-black active:scale-90 transition"
        >
          <HiMiniXMark className="h-6 w-6" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow overflow-y-auto p-4">
        {hasItems ? (
          <CartContents />
        ) : (
          <div className="text-gray-600 text-center mt-10">Cart is empty</div>
        )}
      </div>

      {/* Checkout Button */}
      <div className="p-4 border-t bg-white">
        <button className="bg-black text-white w-full py-3 rounded-md font-medium hover:bg-gray-900 active:scale-95 transition">
          Checkout
        </button>
        <p className="flex justify-center text-xs text-gray-500 mt-2">
          Shipping and taxes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
