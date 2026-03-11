import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Home,
  Megaphone,
  Wallet,
  User,
  Share2,
  Copy,
  TrendingUp,
  MousePointerClick,
  Users,
  CheckCircle,
  ChevronLeft,
  LogOut,
  BellRing,
  ArrowRight,
  Gift,
  Banknote,
  Stethoscope,
  Building2,
  Landmark,
  Settings,
  X
} from 'lucide-react';

// --- MOCK DATA ---
const affiliateUser = {
  id: 'AFF-992',
  name: 'Budi Marketer',
  email: 'budi.marketer@email.com',
  balance: 1250000,
  commissionRate: 5, // 5% komisi
  stats: {
    clicks: 12450,
    donors: 342,
    raised: 25000000
  }
};

const campaigns = [
  {
    id: 1,
    slug: 'bantu-adik-rina',
    title: "Bantu Adik Rina Sembuh dari Gagal Ginjal",
    category: "Medis",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    target: 150000000,
    collected: 105000000,
    commissionRate: 5
  },
  {
    id: 2,
    slug: 'zakat-profesi-maal',
    title: "Tunaikan Zakat Profesi & Maal Anda",
    category: "Zakat",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
    target: 500000000,
    collected: 125000000,
    commissionRate: 2
  },
  {
    id: 3,
    slug: 'qurban-sapi-utuh',
    title: "Qurban Pedalaman: 1 Ekor Sapi Utuh",
    category: "Qurban",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=800",
    target: 420000000,
    collected: 63000000,
    commissionRate: 5
  },
  {
    id: 4,
    slug: 'infaq-operasional',
    title: "Infaq Operasional & Pengembangan Dakwah",
    category: "Infaq",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800",
    target: null,
    collected: 15450000,
    commissionRate: 10
  }
];

const withdrawalHistory = [
  { id: 'WD-001', date: '01 Okt 2026', amount: 500000, status: 'Berhasil', account: 'BCA - 1234xxxx' },
  { id: 'WD-002', date: '15 Sep 2026', amount: 750000, status: 'Berhasil', account: 'GoPay - 0812xxxx' },
];

// --- HELPER FORMATTER ---
const formatIDR = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount || 0);
const formatCompact = (num) => Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(num);

export default function AffiliateApp() {
  // --- STATES ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // home, campaigns, wallet, profile
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [shareModal, setShareModal] = useState({ show: false, campaign: null, link: '' });

  // Inject Font Source Sans Pro
  useEffect(() => {
    document.title = "Portal Fundraiser - DonasiOnline";
    const icon = document.querySelector("link[rel~='icon']");
    if (icon) {
      icon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📢</text></svg>";
    }
    const style = document.createElement('style');
    style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // --- HANDLERS ---
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleShareClick = (campaign) => {
    const timestamp = Date.now();
    // Gunakan URL donasionline.web.id agar WhatsApp membaca URL Landing Page
    const affiliateLink = `https://www.donasionline.web.id/demo/donasi?ref=${affiliateUser.id}&t=${timestamp}`;
    setShareModal({ show: true, campaign, link: affiliateLink });
  };

  const closeShareModal = () => {
    setShareModal({ show: false, campaign: null, link: '' });
  };

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = shareModal.link;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Tautan berhasil disalin!');
      closeShareModal();
    } catch (err) {
      showToast('Gagal menyalin tautan', 'error');
    }
    document.body.removeChild(textArea);
  };

  const handleWithdrawal = () => {
    showToast('Permintaan pencairan dana diproses!');
  };

  // --- COMPONENTS ---

  const renderToast = () => {
    if (!toast.show) return null;
    return (
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[70] animate-in slide-in-from-top-5 fade-in duration-300">
        <div className={`px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold text-white ${toast.type === 'success' ? 'bg-slate-800' : 'bg-rose-600'}`}>
          <CheckCircle size={16} /> {toast.message}
        </div>
      </div>
    );
  };

  const renderShareModal = () => {
    if (!shareModal.show) return null;
    return (
      <div className="absolute inset-0 z-[60] flex items-start justify-center bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200 pt-10 px-4">
        <div className="bg-white w-full sm:max-w-md rounded-3xl p-6 shadow-2xl transform transition-transform animate-in slide-in-from-top-10 sm:zoom-in-95 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">Bagikan Kampanye</h3>
            <button onClick={closeShareModal} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0"><img src={shareModal.campaign.image} alt="Campaign" className="w-full h-full object-cover" /></div>
            <p className="text-sm font-bold text-slate-800 line-clamp-2">{shareModal.campaign.title}</p>
          </div>

          <div className="mb-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tautan Khusus Anda</p>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-1">
              <div className="flex-1 px-3 py-2 text-sm text-slate-600 truncate bg-transparent outline-none select-all font-mono">
                {shareModal.link}
              </div>
              <button onClick={copyToClipboard} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg flex items-center justify-center transition-colors shadow-sm shrink-0">
                <Copy size={16} />
              </button>
            </div>
          </div>

          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Atau Bagikan Ke:</p>
          <div className="grid grid-cols-4 gap-3 mb-2">
            {/* WhatsApp */}
            <button onClick={() => { showToast('Membuka WhatsApp...'); closeShareModal(); }} className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.446-.272.371-1.04 1.015-1.04 2.476 0 1.46 1.065 2.87 1.213 3.069.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-600">WhatsApp</span>
            </button>
            {/* Instagram */}
            <button onClick={() => { showToast('Membuka Instagram...'); closeShareModal(); }} className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Instagram size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-600">Instagram</span>
            </button>
            {/* TikTok */}
            <button onClick={() => { showToast('Membuka TikTok...'); closeShareModal(); }} className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-600">TikTok</span>
            </button>
            {/* X / Twitter */}
            <button onClick={() => { showToast('Membuka X...'); closeShareModal(); }} className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-600">X (Twitter)</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderBottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0 w-full bg-white border-t border-slate-100 flex justify-around px-2 py-2 pb-safe z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center flex-1 py-1 transition-colors ${activeTab === 'home' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-500'}`}>
        <div className={`transition-all duration-300 ${activeTab === 'home' ? 'bg-indigo-50 px-4 py-1.5 rounded-full mb-1' : 'mb-1.5'}`}>
          <Home size={20} className={activeTab === 'home' ? 'fill-indigo-100' : ''} />
        </div>
        <span className={`text-[10px] ${activeTab === 'home' ? 'font-bold' : 'font-medium'}`}>Dashboard</span>
      </button>

      <button onClick={() => setActiveTab('campaigns')} className={`flex flex-col items-center flex-1 py-1 transition-colors ${activeTab === 'campaigns' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-500'}`}>
        <div className={`transition-all duration-300 ${activeTab === 'campaigns' ? 'bg-indigo-50 px-4 py-1.5 rounded-full mb-1' : 'mb-1.5'}`}>
          <Megaphone size={20} className={activeTab === 'campaigns' ? 'fill-indigo-100' : ''} />
        </div>
        <span className={`text-[10px] ${activeTab === 'campaigns' ? 'font-bold' : 'font-medium'}`}>Promosi</span>
      </button>

      <button onClick={() => setActiveTab('wallet')} className={`flex flex-col items-center flex-1 py-1 transition-colors ${activeTab === 'wallet' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-500'}`}>
        <div className={`transition-all duration-300 ${activeTab === 'wallet' ? 'bg-indigo-50 px-4 py-1.5 rounded-full mb-1' : 'mb-1.5'}`}>
          <Wallet size={20} className={activeTab === 'wallet' ? 'fill-indigo-100' : ''} />
        </div>
        <span className={`text-[10px] ${activeTab === 'wallet' ? 'font-bold' : 'font-medium'}`}>Komisi</span>
      </button>

      <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center flex-1 py-1 transition-colors ${activeTab === 'profile' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-500'}`}>
        <div className={`transition-all duration-300 ${activeTab === 'profile' ? 'bg-indigo-50 px-4 py-1.5 rounded-full mb-1' : 'mb-1.5'}`}>
          <User size={20} className={activeTab === 'profile' ? 'fill-indigo-100' : ''} />
        </div>
        <span className={`text-[10px] ${activeTab === 'profile' ? 'font-bold' : 'font-medium'}`}>Profil</span>
      </button>
    </div>
  );

  // --- SCREENS ---

  const renderLogin = () => (
    <div className="flex flex-col h-full bg-slate-50 relative justify-center p-6 text-center">
      <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mb-8 mx-auto shadow-lg shadow-indigo-600/30">
        <Share2 size={48} />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-800 mb-3 leading-tight">Portal<br />Fundraiser</h1>
      <p className="text-slate-500 text-sm mb-12 leading-relaxed px-4">
        Sebarkan tautan kebaikan, pantau traffic donasi, dan dapatkan komisi jariyah Anda secara transparan.
      </p>

      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 w-full max-w-sm mx-auto">
        <h2 className="text-lg font-bold text-slate-800 mb-2">Masuk atau Daftar</h2>
        <p className="text-xs text-slate-500 mb-6">Gunakan akun Google Anda untuk akses cepat.</p>

        <button
          onClick={() => setIsLoggedIn(true)}
          className="w-full bg-white border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 text-slate-700 font-bold text-base py-4 rounded-xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Lanjutkan dengan Google
        </button>
      </div>

      <p className="text-[10px] text-slate-400 mt-8 px-8">
        Dengan masuk, Anda menyetujui Syarat Ketentuan & Kebijakan Privasi platform kami.
      </p>
    </div>
  );

  const renderHome = () => (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        {/* Header */}
        <div className="bg-indigo-600 px-5 pt-8 pb-16 rounded-b-[2.5rem] relative shadow-md">
          <div className="flex justify-between items-center relative z-10 mb-6">
            <div>
              <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-0.5">Selamat Datang,</p>
              <h1 className="text-xl font-bold text-white">{affiliateUser.name}</h1>
            </div>
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20">
              <BellRing size={20} />
            </div>
          </div>
        </div>

        {/* Balance Card Floating */}
        <div className="px-5 -mt-10 relative z-20 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-50">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Saldo Komisi Aktif</p>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-3xl font-extrabold text-slate-800">{formatIDR(affiliateUser.balance)}</h2>
            </div>
            <div className="w-full h-px bg-slate-100 mb-4"></div>
            <div className="flex gap-3">
              <button onClick={() => setActiveTab('wallet')} className="flex-1 bg-indigo-50 text-indigo-700 font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-indigo-100 transition-colors">
                <Landmark size={16} /> Tarik Dana
              </button>
              <button onClick={() => setActiveTab('campaigns')} className="flex-1 bg-slate-800 text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:bg-slate-900 transition-colors">
                <Share2 size={16} /> Promosi
              </button>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="px-5 mb-8">
          <h3 className="font-bold text-slate-800 mb-4 text-base">Performa Link Anda (Bulan Ini)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3"><MousePointerClick size={16} /></div>
              <p className="text-2xl font-bold text-slate-800">{formatCompact(affiliateUser.stats.clicks)}</p>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Total Klik Link</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3"><Users size={16} /></div>
              <p className="text-2xl font-bold text-slate-800">{affiliateUser.stats.donors}</p>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Donatur Berhasil</p>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl shadow-md text-white flex justify-between items-center">
              <div>
                <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-wider mb-1">Total Dana Tergalang</p>
                <p className="text-xl font-bold">{formatIDR(affiliateUser.stats.raised)}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Campaign List */}
        <div className="px-5 pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 text-base">Rekomendasi Promosi</h3>
            <button onClick={() => setActiveTab('campaigns')} className="text-xs font-bold text-indigo-600 hover:underline">Lihat Semua</button>
          </div>
          <div className="flex flex-col gap-4">
            {campaigns.slice(0, 2).map(camp => (
              <div key={camp.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex gap-3">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0"><img src={camp.image} className="w-full h-full object-cover" /></div>
                <div className="flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">{camp.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="bg-indigo-50 text-indigo-700 text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">Komisi {camp.commissionRate}%</span>
                    <button onClick={() => handleShareClick(camp)} className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"><Share2 size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {renderBottomNav()}
    </div>
  );

  const renderCampaigns = () => (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="bg-white px-5 pt-8 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100">
        <h1 className="text-xl font-bold text-slate-800 text-center">Katalog Kampanye</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-24 no-scrollbar">
        <p className="text-sm text-slate-500 mb-6">Pilih kampanye di bawah ini, bagikan link unik Anda, dan dapatkan komisi dari setiap donasi yang berhasil.</p>

        <div className="flex flex-col gap-5">
          {campaigns.map(camp => {
            const progress = camp.target ? (camp.collected / camp.target) * 100 : 0;
            return (
              <div key={camp.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="h-36 w-full relative">
                  <img src={camp.image} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-indigo-700 text-[10px] font-black px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                    {camp.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 leading-snug mb-3 text-base">{camp.title}</h3>

                  <div className="flex items-center gap-2 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <Banknote size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-600 flex-1">Komisi Fundraiser:</span>
                    <span className="font-bold text-indigo-600 text-sm">{camp.commissionRate}%</span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                  </div>
                  <div className="flex justify-between items-end mb-5">
                    <p className="font-bold text-slate-800 text-sm">{formatIDR(camp.collected)}</p>
                    {camp.target && <p className="text-[10px] text-slate-400 font-semibold">{progress.toFixed(0)}%</p>}
                  </div>

                  <button
                    onClick={() => handleShareClick(camp)}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md"
                  >
                    <Share2 size={18} /> Bagikan & Promosikan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {renderBottomNav()}
    </div>
  );

  const renderWallet = () => (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="bg-white px-5 pt-8 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100">
        <h1 className="text-xl font-bold text-slate-800 text-center">Dompet Komisi</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-24 no-scrollbar">

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-1">Saldo Tersedia</p>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">{formatIDR(affiliateUser.balance)}</h2>
            <button
              onClick={handleWithdrawal}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-all text-sm"
            >
              Cairkan Dana
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-base">Riwayat Pencairan</h3>
        </div>

        <div className="flex flex-col gap-3">
          {withdrawalHistory.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 border border-slate-200">
                <Landmark size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 mb-0.5 font-medium">{item.date}</p>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{item.account}</h4>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-800 text-sm">{formatIDR(item.amount)}</p>
                <span className="text-[10px] font-bold text-emerald-600">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderBottomNav()}
    </div>
  );

  const renderProfile = () => (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="bg-indigo-600 pt-10 pb-20 px-5 rounded-b-[2.5rem] relative shadow-md">
        <h1 className="text-xl font-bold text-white mb-6 text-center relative z-10">Profil Affiliate</h1>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-white rounded-full p-1 shadow-md">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&backgroundColor=e2e8f0" alt="avatar" className="w-full h-full rounded-full bg-slate-100" />
          </div>
          <div className="text-white">
            <h2 className="font-bold text-lg mb-0.5">{affiliateUser.name}</h2>
            <p className="text-indigo-200 text-xs mb-1.5">{affiliateUser.email}</p>
            <span className="bg-white/20 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">ID: {affiliateUser.id}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-5 -mt-8 relative z-20 no-scrollbar">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden mb-6">
          {[
            { icon: User, label: 'Edit Informasi Data Diri', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: Landmark, label: 'Rekening Pencairan', color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { icon: Megaphone, label: 'Panduan Fundraiser', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { icon: Settings, label: 'Pengaturan Akun', color: 'text-slate-600', bg: 'bg-slate-100' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-4 ${i !== 3 ? 'border-b border-slate-50' : ''} active:bg-slate-50 cursor-pointer transition-colors`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
              </div>
              <ArrowRight size={16} className="text-slate-300" />
            </div>
          ))}
        </div>

        <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-4 rounded-2xl active:scale-[0.98] transition-all">
          <LogOut size={20} />
          Keluar Akun
        </button>
      </div>
      {renderBottomNav()}
    </div>
  );

  // Icon Components for Social Media
  function Instagram(props) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
  }


  // --- RENDER CONTROLLER ---
  return (
    // Removed frame styling, now uses full width on mobile and centered max-width on desktop
    <div className="min-h-screen bg-slate-100 flex justify-center font-sans" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <Helmet>
        <title>Portal Fundraiser - DonasiOnline</title>
        <meta name="description" content="Sebarkan tautan kebaikan, pantau traffic donasi, dan dapatkan komisi jariyah Anda secara transparan." />
        <meta property="og:title" content="Portal Fundraiser - DonasiOnline" />
        <meta property="og:description" content="Sebarkan tautan kebaikan, pantau traffic donasi, dan dapatkan komisi jariyah Anda secara transparan." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="website" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }` }} />

      <div className="w-full max-w-md h-[100dvh] bg-white relative flex flex-col sm:shadow-2xl overflow-hidden">
        {renderToast()}
        {renderShareModal()}

        {!isLoggedIn ? renderLogin() : (
          <>
            {activeTab === 'home' && renderHome()}
            {activeTab === 'campaigns' && renderCampaigns()}
            {activeTab === 'wallet' && renderWallet()}
            {activeTab === 'profile' && renderProfile()}
          </>
        )}
      </div>
    </div>
  );
}