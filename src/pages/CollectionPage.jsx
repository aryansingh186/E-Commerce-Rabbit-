import React, { useEffect, useState, useRef } from "react";
import { FaFilter, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import FilterSideBar from "../components/products/FilterSideBar";
import { toast } from "sonner"; // <- import sonner

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const SidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  // Use Sonner toast instead of alert
  const handleAddToCart = (product) => {
    const qty = quantities[product._id] || 1;
    const size = selectedSize[product._id] || "Not selected";
    const color = selectedColor[product._id] || "Not selected";

    toast.success(
      `${qty} × ${product.name} added to cart\nSize: ${size}, Color: ${color}`
    );
  };

  const handleWishlist = (product) => {
    toast(`❤️ ${product.name} added to wishlist`);
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        { _id: 1, name: "Leather Jacket", price: 89.99, image: "https://picsum.photos/id/1022/400/400" },
        { _id: 2, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1023/400/400" },
        { _id: 3, name: "Hoodie", price: 59.99, image: "https://picsum.photos/id/1024/400/400" },
        { _id: 4, name: "Sneakers", price: 79.99, image: "https://picsum.photos/id/1035/400/400" },
      ];
      setProducts(fetchedProducts);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Mobile Filter Button */}
      <div className="flex justify-between items-center p-4 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FaFilter className="mr-2" /> Filters
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={SidebarRef}
        className={`fixed lg:static top-0 left-0 h-full bg-white z-40 transform transition-transform duration-300 w-3/4 sm:w-1/2 lg:w-1/4 p-4 shadow-lg lg:shadow-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <FilterSideBar />
      </div>

      {/* Overlay (Mobile only) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        ></div>
      )}

      {/* Product Grid */}
      <div className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />

            {/* Product Info */}
            <div className="p-3 flex flex-col space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">${product.price}</p>

              {/* Size Selector */}
              <div className="flex items-center space-x-2 mt-1">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize((prev) => ({ ...prev, [product._id]: size }))
                    }
                    className={`px-2 py-1 border text-xs rounded-md ${
                      selectedSize[product._id] === size
                        ? "bg-black text-white"
                        : "text-gray-600 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Color Selector */}
              <div className="flex items-center space-x-2 mt-1">
                {["#000000", "#D97706", "#2563EB"].map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor((prev) => ({ ...prev, [product._id]: color }))
                    }
                    className={`w-5 h-5 rounded-full border-2 ${
                      selectedColor[product._id] === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between mt-3 space-x-2">
                {/* Quantity */}
                <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
                  <button
                    onClick={() => decreaseQty(product._id)}
                    className="px-2 text-lg text-gray-700 hover:text-black"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold">
                    {quantities[product._id] || 0}
                  </span>
                  <button
                    onClick={() => increaseQty(product._id)}
                    className="px-2 text-lg text-gray-700 hover:text-black"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center bg-black text-white rounded-md px-3 py-2 text-xs hover:bg-gray-800 transition"
                >
                  <HiOutlineShoppingBag className="mr-1 w-4 h-4" />
                  Add
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => handleWishlist(product)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  <FaHeart className="text-gray-600 hover:text-red-500 transition" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
