import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Supplier from './pages/supplier';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/supplier" element={<Supplier />} />
    </Routes>
  );
};

export default App;
