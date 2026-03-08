import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonationApp from './pages/DonationApp';
import AdminApp from './pages/AdminApp';
import AffiliateApp from './pages/AffiliateApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page sebagai halaman utama (Root) */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute ke 3 Aplikasi lainnya */}
        <Route path="/demo/donasi" element={<DonationApp />} />
        <Route path="/demo/admin" element={<AdminApp />} />
        <Route path="/demo/affiliate" element={<AffiliateApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;