import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import DonationApp from './pages/DonationApp';
import AdminApp from './pages/AdminApp';
import AffiliateApp from './pages/AffiliateApp';
import Marketing from './pages/Marketing';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page sebagai halaman utama (Root) */}
          <Route path="/" element={<LandingPage />} />

          {/* Halaman /marketing */}
          <Route path="/marketing" element={<Marketing />} />

          {/* Rute ke 3 Aplikasi lainnya */}
          <Route path="/demo/donasi" element={<DonationApp />} />
          <Route path="/demo/admin" element={<AdminApp />} />
          <Route path="/demo/affiliate" element={<AffiliateApp />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;