import React from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../common/Navbar'; // import Navbar

const Header = () => {
  return (
    <header className="border-b border-gray-200 shadow-md">
      {/* Top Bar */}
      <Topbar />

      {/* Navbar */}
      <Navbar /> 

      {/* Cart Drawer */}
      {/*  CartDrawer component here */}
    </header>
  );
};

export default Header;
