import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiMiniXMark
} from 'react-icons/hi2';
import Searchbar from './Searchbar';
import CartDrawer from '../layout/CartDrawer';
import CollectionPage from '../../pages/CollectionPage';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return ( 
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="collections/:collection" className="hover:text-black text-gray-700 text-sm font-medium uppercase">Men</Link>
          <Link to="/" className="hover:text-black text-gray-700 text-sm font-medium uppercase">Women</Link>
          <Link to="/" className="hover:text-black text-gray-700 text-sm font-medium uppercase">Top wear</Link>
          <Link to="/" className="hover:text-black text-gray-700 text-sm font-medium uppercase">Bottom wear</Link>
        </div>

        {/* Right: Icon Links */}
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <HiOutlineUser className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black" />
          </Link>

          {/* Shopping Cart */}
          <button onClick={toggleDrawer} className="relative">
            <HiOutlineShoppingBag className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-[#ea2e0e] text-xs text-white rounded-full px-1.5 py-0.5">
              0
            </span>
          </button>

          <Searchbar />

          {/* Hamburger Menu */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleNavDrawer}>
            <HiMiniXMark className='h-6 w-6 text-gray-600 hover:text-black'/>
          </button>
        </div>

        {/* Mobile Links */}
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-4'>Menu</h2>
          <nav>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={toggleNavDrawer} className="text-gray-700 hover:text-black text-lg font-medium uppercase">Men</Link>
              <Link to="/" onClick={toggleNavDrawer} className="text-gray-700 hover:text-black text-lg font-medium uppercase">Women</Link>
              <Link to="/" onClick={toggleNavDrawer} className="text-gray-700 hover:text-black text-lg font-medium uppercase">Top wear</Link>
              <Link to="/" onClick={toggleNavDrawer} className="text-gray-700 hover:text-black text-lg font-medium uppercase">Bottom wear</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
