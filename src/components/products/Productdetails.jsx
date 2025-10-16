import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { toast, Toaster } from "sonner";
import ProductGrid from "./ProductGrid";

const Productdetails = () => {
  const selectedProduct = {
    id: 1,
    name: "Denim Jacket",
    price: 59.99,
    description: "A stylish denim jacket perfect for casual wear.",
    brand: "Rabbit",
    colors: ["Blue", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      { url: "https://picsum.photos/id/1011/800/800", alt: "Denim Jacket Image 1" },
      { url: "https://picsum.photos/id/1012/800/800", alt: "Denim Jacket Image 2" },
    ],
  };

  const similarProducts = [
    {
      _id: 1,
      name: "Leather Jacket",
      price: 89.99,
      image: "https://picsum.photos/id/1013/400/400",
    },
    {
      _id: 2,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://picsum.photos/id/1014/400/400",
    },
        {
      _id: 3,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://picsum.photos/id/1015/400/400",
    },
        {
      _id: 4,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://picsum.photos/id/1016/400/400",
    },
        {
      _id: 5,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://picsum.photos/id/1019/400/400",
    },
        {
      _id: 6,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://picsum.photos/id/1018/400/400",
    },
  ];

  // States
  const [selectedImage, setSelectedImage] = useState(selectedProduct.images[0].url);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(""); 
  const [selectedColor, setSelectedColor] = useState(""); 

  // Quantity handlers
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Add to Cart Handler
  const handleAddTocart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color!");
      return;
    }
    toast.success("Item added to cart!");
  };

  return (
    <div className="p-6">
      <Toaster /> 

      <div className="max-w-6xl mx-auto  rounded-sm p-6 flex flex-col md:flex-row">
        {/* ---------- LEFT SECTION: IMAGES ---------- */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:w-1/2">
          {/* Thumbnails */}
          <div className="flex gap-4 sm:flex-row-reverse md:flex-col sm:space-x-4 md:space-y-4">
            {selectedProduct.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.alt}
                onClick={() => setSelectedImage(img.url)}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md border-2 transition 
                  ${selectedImage === img.url ? "border-black" : "border-gray-200 hover:border-gray-400"}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-[450px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* ---------- RIGHT SECTION: DETAILS ---------- */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
          <p className="text-gray-500 mb-4">Brand: {selectedProduct.brand}</p>
          <p className="text-gray-700 text-lg mb-4">{selectedProduct.description}</p>
          <p className="text-2xl font-semibold text-black mb-6">₹{selectedProduct.price}</p>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Color:</h3>
            <div className="flex gap-2">
              {selectedProduct.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded-md ${
                    selectedColor === color ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Size:</h3>
            <div className="flex gap-2">
              {selectedProduct.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md ${
                    selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleDecrement}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              <FiMinus />
            </button>

            <span className="text-lg font-medium">{quantity}</span>

            <button
              onClick={handleIncrement}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              <FiPlus />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddTocart}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ---------- You may Also Like Section ---------- */}
      <div>
        <h2 className=" text-center text-3xl font-bold mt-2 mb-6">You may also like</h2>
        <ProductGrid products={similarProducts} />
      </div>
    </div>
  );
};

export default Productdetails;
