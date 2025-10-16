import React, { useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "Patna", country: "IN" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
              quantity: 2,
              price: 50,
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "67890",
          createdAt: new Date(),
          shippingAddress: { city: "Delhi", country: "IN" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
              quantity: 1,
              price: 75,
            },
          ],
          totalPrice: 75,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>Loading orders...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:justify-between gap-4"
            >
              {/* Left Side: Order Info */}
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Order ID: {order._id}</span>
                <span className="text-gray-500">
                  Date: {order.createdAt.toLocaleDateString()}
                </span>
                <span className="text-gray-500">
                  City: {order.shippingAddress.city}
                </span>
                <span className="font-medium">Total: ${order.totalPrice}</span>
                <span
                  className={
                    order.isPaid
                      ? "text-green-600  bg-green-100 bg-block font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </div>

              {/* Right Side: Product Images */}
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {order.orderItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-38 object-cover rounded"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrderPage;
