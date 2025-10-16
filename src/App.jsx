import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import { Toaster } from 'sonner';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>

        {/* User layout */}

        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Collections/:collection" element ={<CollectionPage />} />
        </Route>

        {/* Admin layout (optional) */}
        {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
