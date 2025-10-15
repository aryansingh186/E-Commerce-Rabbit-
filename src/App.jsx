import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        {/* User layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin layout  */}
        {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
