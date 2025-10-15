import React, { useState } from 'react';

const CartContents = () => {
  const [cartProducts, setCartProducts] = useState([
    { id: 1, name: 'T-Shirt', size: 'M', color: 'Red', price: 29.99, quantity: 1, image: 'https://picsum.photos/200?random=1' },
    { id: 2, name: 'Jeans', size: 'M', color: 'Green', price: 39.99, quantity: 1, image: 'https://picsum.photos/200?random=2' },
    { id: 3, name: 'Shirt', size: 'L', color: 'Red', price: 24.99, quantity: 1, image: 'https://picsum.photos/200?random=3' },
    { id: 4, name: 'Jacket', size: 'XL', color: 'Blue', price: 49.99, quantity: 1, image: 'https://picsum.photos/200?random=4' },
    { id: 5, name: 'Shoes', size: '42', color: 'White', price: 79.99, quantity: 1, image: 'https://picsum.photos/200?random=5' },
    { id: 6, name: 'Cap', size: 'One Size', color: 'Black', price: 19.99, quantity: 1, image: 'https://picsum.photos/200?random=6' },
    { id: 7, name: 'Socks', size: 'L', color: 'Gray', price: 9.99, quantity: 1, image: 'https://picsum.photos/200?random=7' },
    { id: 8, name: 'Sweater', size: 'M', color: 'Orange', price: 59.99, quantity: 1, image: 'https://picsum.photos/200?random=8' },
    { id: 9, name: 'Watch', size: 'Standard', color: 'Black', price: 199.99, quantity: 1, image: 'https://picsum.photos/200?random=9' },
    { id: 10, name: 'Bag', size: 'M', color: 'Brown', price: 89.99, quantity: 1, image: 'https://picsum.photos/200?random=10' },
  ]);

  const incrementQty = (id) => {
    setCartProducts(cartProducts.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrementQty = (id) => {
    setCartProducts(cartProducts.map(p => p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  const removeItem = (id) => {
    setCartProducts(cartProducts.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-4">
      {cartProducts.map(product => (
        <div key={product.id} className="flex items-center justify-between border-b pb-3">
          <img src={product.image} alt={product.name} className="w-28 h-32 rounded-md object-cover" />
          <div className="flex-1 ml-3">
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">Size: {product.size} • Color: {product.color}</p>
            <div className="flex items-center mt-2 space-x-2">
              <button onClick={() => decrementQty(product.id)} className="px-2 py-1 border rounded hover:bg-gray-200">-</button>
              <span className="px-2">{product.quantity}</span>
              <button onClick={() => incrementQty(product.id)} className="px-2 py-1 border rounded hover:bg-gray-200">+</button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-semibold text-gray-900">₹{(product.price * product.quantity).toFixed(2)}</span>
            <button onClick={() => removeItem(product.id)} className="text-red-500 text-sm mt-1 hover:text-red-600">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
