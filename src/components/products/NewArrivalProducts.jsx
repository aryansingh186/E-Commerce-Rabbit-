import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const products = [
  { id: 1, name: 'Classic T-Shirt', price: '₹799', image: 'https://picsum.photos/400/400?random=1' },
  { id: 2, name: 'Denim Jacket', price: '₹1499', image: 'https://picsum.photos/400/400?random=2' },
  { id: 3, name: 'Casual Shirt', price: '₹999', image: 'https://picsum.photos/400/400?random=3' },
  { id: 4, name: 'Chinos Pants', price: '₹1299', image: 'https://picsum.photos/400/400?random=4' },
  { id: 5, name: 'Hoodie', price: '₹1199', image: 'https://picsum.photos/400/400?random=5' },
  { id: 6, name: 'Sneakers', price: '₹1999', image: 'https://picsum.photos/400/400?random=6' },
  { id: 7, name: 'Leather Jacket', price: '₹2499', image: 'https://picsum.photos/400/400?random=7' },
  { id: 8, name: 'Formal Shirt', price: '₹1099', image: 'https://picsum.photos/400/400?random=8' },
  { id: 9, name: 'Jeans', price: '₹1399', image: 'https://picsum.photos/400/400?random=9' },
  { id: 10, name: 'Sweater', price: '₹999', image: 'https://picsum.photos/400/400?random=10' },
];

const NewArrivalProducts = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Explore New Arrivals</h2>
        <p className="text-sm text-center text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on trend.
        </p>

        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
        >
          <FiChevronRight className="text-2xl" />
        </button>

        {/* Product Scroll Area */}
<div className="relative overflow-hidden">
  <div
    ref={scrollRef}
    className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
  >
    {products.map((product) => (
      <div
        key={product.id}
        className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition relative group flex-shrink-0"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.price}</p>
        </div>
        <Link
          to="#"
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 text-white font-semibold transition"
        >
          Shop Now
        </Link>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default NewArrivalProducts;
