import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {products.map((product) => (
        <div
          key={product._id}
          className="min-w-[150px] flex-shrink-0 p-2 rounded-sm hover:shadow-lg transition hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-sm mb-2"
          />
          <h4 className="font-medium text-sm">{product.name}</h4>
          <p className="font-semibold text-sm">₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
