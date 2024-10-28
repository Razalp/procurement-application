import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Supplier from './pages/SupplierPage/Supplier';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/supplier" element={<Supplier />} />
    </Routes>
  );
};

export default App;
