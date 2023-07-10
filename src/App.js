import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function App() {
    return (
      <>
      <Routes>
         <Route path="/" element={<Dashboard />} />
         {/* <Route path="/products" element={<Products />} />
         <Route path="/about" element={<About />} /> */}
      </Routes>
   </>
  );
}
