import React from 'react';
import MyOrderPage from './MyOrderPage';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-6">
          {/* Left Side: Profile Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Aryan Singh</h1>
            <p className="text-lg text-gray-600 mb-4">aryansingh700108@gmail.com</p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 transition">
              Logout
            </button>
          </div>

          {/* Right Side: Order Table */}
          <div className="w-full md:w-2/3 lg:w-3/4 bg-white shadow-md rounded-lg p-6">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
