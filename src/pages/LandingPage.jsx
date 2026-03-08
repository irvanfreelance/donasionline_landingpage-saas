import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Smartphone,
  PieChart,
  Share2,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Globe,
  PlayCircle,
  Wallet,
  LayoutDashboard,
  BarChart3,
  Users,
  User,
  TrendingUp,
  Database,
  Menu,
  X,
  Activity,
  Lock,
  RefreshCcw,
  BellRing,
  Star,
  Award,
  HandHeart,
  Info,
  MapPin,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "SaaS Platform Donasi Online - DonasiOnline";
    const icon = document.querySelector("link[rel~='icon']");
    if (icon) {
      icon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌍</text></svg>";
    }
  }, []);

  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-reveal');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Inject Custom Styles & Animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
      
      html { scroll-behavior: smooth; overflow-x: hidden; }
      body { font-family: 'Source Sans Pro', sans-serif; overflow-x: hidden; }
      
      /* Scroll Reveal Classes */
      .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
      }
      .show-reveal {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Staggered delays */
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
      .delay-400 { transition-delay: 400ms; }

      /* Custom UI Animations */
      .animate-float-slow { animation: float 6s ease-in-out infinite; }
      .animate-float-fast { animation: float 4s ease-in-out infinite; }
      .animate-progress-fill { animation: progressFill 2s ease-out forwards; animation-delay: 0.5s; }
      .animate-pulse-soft { animation: pulseSoft 3s infinite; }
      .animate-chart-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 3s ease-out forwards; animation-delay: 0.5s; }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      @keyframes progressFill {
        from { width: 0%; }
        to { width: 75%; }
      }
      @keyframes pulseSoft {
        0% { box-shadow: 0 0 0 0 rgba(16, 177, 111, 0.4); } /* Updated to #10B16F */
        70% { box-shadow: 0 0 0 15px rgba(16, 177, 111, 0); }
        100% { box-shadow: 0 0 0 0 rgba(16, 177, 111, 0); }
      }
      @keyframes drawLine {
        to { stroke-dashoffset: 0; }
      }
      
      /* Blob Backgrounds */
      .blob-shape { animation: blob-bounce 10s infinite alternate; }
      @keyframes blob-bounce {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Helmet>
        <title>SaaS Platform Donasi Online - DonasiOnline</title>
        <meta name="description" content="Platform Donasi Online White-Label #1 di Indonesia. Berhenti menumpang, miliki platform donasi Anda sendiri dengan ekosistem lengkap (Donor App, Affiliate, Admin Dashboard)." />
        <meta property="og:title" content="SaaS Platform Donasi Online - DonasiOnline" />
        <meta property="og:description" content="Platform Donasi Online White-Label #1 di Indonesia. Berhenti menumpang, miliki platform donasi Anda sendiri dengan ekosistem lengkap (Donor App, Affiliate, Admin Dashboard)." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593113589914-075990116daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#10B16F] to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-[#10B16F]/30">
              <Heart size={20} className="text-white fill-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">Donasi<span className="text-[#10B16F]">Online</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#masalah" className="hover:text-[#10B16F] transition-colors">Tantangan</a>
            <a href="#solusi" className="hover:text-[#10B16F] transition-colors">Solusi</a>
            <a href="#fitur" className="hover:text-[#10B16F] transition-colors">Fitur Ekosistem</a>
            <a href="#harga" className="hover:text-[#10B16F] transition-colors">Harga Berlangganan</a>
            <Link to="/marketing" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B16F] text-[#10B16F] transition-colors font-bold flex items-center gap-1">Gabung Partner</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="font-bold text-sm text-slate-700 hover:text-[#10B16F] transition-colors">Masuk</button>
            <button className="bg-[#10B16F] hover:bg-[#0e9f63] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-[#10B16F]/30">
              Jadwalkan Demo
            </button>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white text-slate-800 pt-24 px-6 flex flex-col gap-6 font-bold text-lg md:hidden animate-in fade-in duration-200">
          <a href="#masalah" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Tantangan NGO</a>
          <a href="#solusi" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Solusi DonasiOnline</a>
          <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Fitur Ekosistem</a>
          <a href="#harga" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Harga Berlangganan</a>
          <Link to="/marketing" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 text-[#10B16F]">Gabung Partner Edukasi</Link>
          <button className="bg-[#10B16F] text-white py-4 rounded-xl mt-4 shadow-lg">Jadwalkan Demo</button>
        </div>
      )}

      {/* 2. HERO SECTION DYNAMIC (Light Glassmorphism on #ECFDF5) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#ECFDF5] text-slate-800">
        {/* Abstract Background for Glass effect */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/60 blur-[80px] blob-shape"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#10B16F]/10 blur-[100px] blob-shape" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 text-[#10B16F] text-sm font-bold mb-8 backdrop-blur-md shadow-sm">
              <Zap size={16} className="text-[#10B16F]" />
              Platform Donasi Online #1 di Indonesia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-slate-900">
              Berhenti Menumpang.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B16F] to-emerald-400">
                Miliki Platform Donasi Anda Sendiri.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Bebaskan lembaga Anda dari potongan biaya platform yang mencekik (hingga 10%). Kendalikan penuh database donatur Anda dengan ekosistem aplikasi White-Label kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20mau%20konsultasi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#10B16F] hover:bg-[#0d945c] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(16,177,111,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                Hubungi via WhatsApp <ArrowRight size={20} />
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-600 text-sm font-semibold">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B16F]" /> 0% Potongan Platform</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B16F]" /> Setup Instan 15 menit</span>
            </div>
          </div>

          {/* Hero Interactive UI Mockup */}
          <div className="relative z-10 w-full max-w-[340px] mx-auto perspective-1000 reveal delay-200">
            {/* Phone Frame */}
            <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl p-3 shadow-[0_20px_50px_-12px_rgba(16,177,111,0.2)] border-4 border-white transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
              {/* Screen Content */}
              <div className="rounded-[2rem] overflow-hidden bg-slate-50 h-[600px] relative border border-slate-100 flex flex-col shadow-inner">
                {/* Header Mockup */}
                <div className="bg-[#10B16F] px-4 pt-10 pb-4 text-white rounded-b-3xl shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-black text-lg tracking-tighter">DonasiOnline</span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><User size={16} /></div>
                  </div>
                </div>
                {/* Campaign Card Mockup */}
                <div className="p-4 flex-1">
                  <div className="bg-white rounded-2xl shadow-sm p-3 mb-4 border border-slate-100">
                    <div className="w-full h-32 bg-slate-200 rounded-xl mb-3 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Campaign" />
                      <div className="absolute top-2 left-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Mendesak</div>
                    </div>
                    <div className="w-16 h-4 bg-emerald-100 rounded mb-2"></div>
                    <h3 className="font-bold text-slate-800 text-sm leading-tight mb-2">Pembangunan Sekolah Darurat Pelosok Negeri</h3>
                    {/* Progress Bar Animation */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-[#10B16F] rounded-full w-0 animate-progress-fill"></div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs font-bold text-[#10B16F]">Rp 105.000.000</div>
                      <div className="text-[10px] text-slate-400">75%</div>
                    </div>
                  </div>
                  {/* Donate Button Mockup */}
                  <div className="bg-[#10B16F] text-white font-bold text-center py-3 rounded-xl shadow-lg animate-pulse-soft">
                    Donasi Sekarang
                  </div>
                </div>
              </div>

              {/* Floating Notifications (Interactive feeling) */}
              <div className="absolute -left-12 top-32 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-[#10B16F] shrink-0"><CheckCircle2 size={20} /></div>
                <div><p className="text-[10px] text-slate-500 font-bold">Hamba Allah</p><p className="font-black text-slate-800 text-sm">Rp 500.000</p></div>
              </div>

              <div className="absolute -right-8 bottom-40 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 animate-float-fast" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0"><TrendingUp size={20} /></div>
                <div><p className="text-[10px] text-slate-500 font-bold">Target Tercapai</p><p className="font-black text-slate-800 text-sm">100%</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS: DIGGING THE WOUND */}
      <section id="masalah" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-[#10B16F] font-bold tracking-wider uppercase text-sm mb-3">Kenyataan Pahit NGO</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-6">Niat Mulia Anda Terhalang Oleh Sistem yang Salah.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">Kami sering mendengar keluhan pengurus yayasan yang frustrasi karena merasa "dijajah" di rumah sendiri. Apakah Anda mengalami salah satu dari 3 hal ini?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow reveal delay-100 group">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart size={32} />
              </div>
              <h4 className="font-black text-slate-800 text-xl mb-3">Potongan Platform Besar</h4>
              <p className="text-slate-600 leading-relaxed">Menggalang dana 1 Miliar di platform publik? Bersiaplah kehilangan <strong>Rp 50 Juta hingga Rp 100 Juta</strong> hanya untuk biaya admin platform. Uang umat terbuang sia-sia.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow reveal delay-200 group">
              <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock size={32} />
              </div>
              <h4 className="font-black text-slate-800 text-xl mb-3">Data Donatur Disandera</h4>
              <p className="text-slate-600 leading-relaxed">Siapa yang berdonasi ke NGO Anda? Platform publik seringkali menyembunyikan data kontak donatur. Anda <strong>tidak bisa menghubungi mereka</strong> untuk program selanjutnya.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow reveal delay-300 group">
              <div className="w-16 h-16 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <RefreshCcw size={32} />
              </div>
              <h4 className="font-black text-slate-800 text-xl mb-3">Repotnya Cek Mutasi Manual</h4>
              <p className="text-slate-600 leading-relaxed">Donatur transfer langsung ke rekening, lalu admin harus mengecek mutasi bank satu per satu, mencocokkan dengan WhatsApp. <strong>Sangat menguras waktu & rawan human error.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION */}
      <section id="solusi" className="py-24 bg-[#10B16F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[100px] -top-20 -right-20"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-md border border-white/20 mb-8">
            <Heart size={40} className="text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Saatnya Anda Membangun Rumah Sendiri.
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed font-medium">
            DonasiOnline bukan sekadar software. Kami adalah <strong>"Sayap Teknologi"</strong> yang membuat yayasan Anda terlihat sekelas lembaga nasional. 100% donasi masuk ke Anda, 100% database milik Anda.
          </p>
        </div>
      </section>

      {/* 5. ECOSYSTEM FEATURE 1: DONOR APP */}
      <section id="fitur" className="py-24 bg-[#ECFDF5] relative overflow-hidden border-b border-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative reveal">
            {/* UI Abstract Mockup for Donor App */}
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(16,177,111,0.15)] border border-white p-6 transform -rotate-1 transition-transform hover:rotate-0 duration-500 relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-[#10B16F]"><Wallet size={20} /></div>
                  <div><p className="font-bold text-slate-800 text-sm">Metode Pembayaran</p><p className="text-[10px] text-slate-400">Pilih channel donasi</p></div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex justify-between items-center">
                  <span className="font-bold text-emerald-800">QRIS (Otomatis)</span>
                  <div className="w-4 h-4 rounded-full border-2 border-[#10B16F] flex items-center justify-center"><div className="w-2 h-2 bg-[#10B16F] rounded-full"></div></div>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl flex justify-between items-center">
                  <span className="font-bold text-slate-700">BCA Virtual Account</span>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                </div>
              </div>
              <div className="bg-[#10B16F] text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-[#10B16F]/30">Bayar Rp 500.000</div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-float-slow z-20">
              <p className="text-xs font-bold text-[#10B16F] uppercase mb-1">Fitur Pintar</p>
              <h4 className="font-black text-slate-800 text-lg">Kalkulator Zakat</h4>
            </div>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-200/50 rounded-full blur-[60px] -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 reveal delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#10B16F] font-bold mb-6 uppercase tracking-wider text-xs">
              <Smartphone size={16} /> Aplikasi Donatur (Web-App)
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Pengalaman Donasi Semulus Checkout E-Commerce</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tinggalkan cara lama meminta donatur mengirim bukti transfer. Sistem kami memproses donasi secara *real-time* 24/7. Donatur cukup isi nominal, pilih metode, dan klik bayar.
            </p>
            <ul className="space-y-5">
              {[
                { title: 'Payment Gateway Otomatis', desc: 'Dukung QRIS, GoPay, OVO, ShopeePay, dan Virtual Account semua bank.' },
                { title: 'Checkout Tanpa Login (Guest)', desc: 'Menghilangkan hambatan donatur untuk berbuat baik secepat mungkin.' },
                { title: 'Bundling & Varian Qurban', desc: 'Jual paket Ramadhan atau sistem patungan 1/7 Sapi Qurban dengan mudah.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1"><CheckCircle2 size={16} className="text-[#10B16F]" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/demo/donasi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#10B16F] hover:bg-[#0e9f63] text-white px-8 py-4 rounded-full font-bold transition-transform active:scale-95 shadow-lg shadow-[#10B16F]/30">
                Lihat Demo <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ECOSYSTEM FEATURE 2: AFFILIATE PORTAL */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 font-bold mb-6 uppercase tracking-wider text-xs">
              <Share2 size={16} /> Portal Fundraiser / Afiliasi
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Lipatgandakan Pasukan Kebaikan Anda</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Jadikan relawan, jamaah, atau *influencer* sebagai ujung tombak penggalangan dana Anda. Berikan mereka portal khusus untuk melacak performa tautan mereka.
            </p>
            <ul className="space-y-5">
              {[
                { title: 'Tautan Unik Otomatis (Referral Link)', desc: 'Setiap Fundraiser memiliki link khusus untuk di-share ke WhatsApp atau Medsos.' },
                { title: 'Sistem Komisi (Ujrah) Transparan', desc: 'Atur komisi persentase atau flat nominal. Fundraiser bisa menarik dana (Withdraw) langsung dari dashboard mereka.' },
                { title: 'Tracking Performa Akurat', desc: 'Lacak berapa banyak klik dan donasi yang dihasilkan oleh masing-masing relawan.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-teal-50 rounded-full p-1 mt-1"><CheckCircle2 size={16} className="text-teal-500" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/demo/affiliate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#10B16F] hover:bg-[#0e9f63] text-white px-8 py-4 rounded-full font-bold transition-transform active:scale-95 shadow-lg shadow-[#10B16F]/30">
                Lihat Demo <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative reveal delay-200">
            {/* UI Abstract Mockup for Affiliate App */}
            <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-200 p-6 transform rotate-2 transition-transform hover:rotate-0 duration-500 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#10B16F] rounded-full flex items-center justify-center"><Users size={24} className="text-white" /></div>
                <div><p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Saldo Komisi</p><h3 className="text-2xl font-black text-slate-800">Rp 1.250.000</h3></div>
              </div>

              <div className="bg-white p-4 rounded-2xl mb-4 border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-400 mb-2">Tautan Promosi Anda</p>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-mono text-slate-600 flex justify-between items-center">
                  <span className="truncate pr-4">pedulisesama.org/c/bantu...</span>
                  <Share2 size={16} className="text-[#10B16F] shrink-0" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Total Klik</p>
                  <p className="text-xl font-bold text-slate-800">12,450</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Donatur</p>
                  <p className="text-xl font-bold text-slate-800">342</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100/50 rounded-full blur-[60px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* 7. ECOSYSTEM FEATURE 3: ADMIN DASHBOARD */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative reveal">
            {/* UI Abstract Mockup for Admin Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 w-full max-w-lg mx-auto relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800">Tren Pendanaan</h3>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">+12.5%</span>
              </div>
              {/* SVG Line Chart Animation Simulation */}
              <svg viewBox="0 0 400 150" className="w-full h-32 overflow-visible">
                <path d="M 0 130 L 50 100 L 100 110 L 150 60 L 200 80 L 250 30 L 300 50 L 350 10 L 400 40" fill="none" stroke="#10B16F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-chart-line" />
                <circle cx="350" cy="10" r="6" fill="#fff" stroke="#10B16F" strokeWidth="3" />
              </svg>

              <div className="mt-6 flex flex-col gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm hover:border-[#10B16F]/30 transition-colors">
                  <div className="flex items-center gap-3"><div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Users size={14} /></div><span className="font-bold text-sm text-slate-700">Data Donatur (CRM)</span></div>
                  <ArrowRight size={16} className="text-slate-400" />
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm hover:border-[#10B16F]/30 transition-colors">
                  <div className="flex items-center gap-3"><div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600"><BellRing size={14} /></div><span className="font-bold text-sm text-slate-700">Template Pesan WA</span></div>
                  <ArrowRight size={16} className="text-slate-400" />
                </div>
              </div>
            </div>

            {/* Blob Decor */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-200/40 rounded-full blur-[40px] z-0"></div>
          </div>

          <div className="order-1 lg:order-2 reveal delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 font-bold mb-6 uppercase tracking-wider text-xs">
              <PieChart size={16} /> Command Center Admin
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Kendalikan Sepenuhnya Database Anda</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Selamat tinggal file Excel yang berantakan. Dashboard admin kami menyediakan metrik *real-time* dan fitur CRM untuk mengelola hubungan dengan donatur secara profesional.
            </p>
            <ul className="space-y-5">
              {[
                { title: 'Database Milik Anda 100%', desc: 'Akses penuh ke email dan nomor telepon donatur untuk program retargeting donasi berikutnya.' },
                { title: 'Kustomisasi Brand (White-Label)', desc: 'Ganti logo, warna tema, dan gunakan nama domain yayasan Anda sendiri (misal: donasi.yayasan.org).' },
                { title: 'Update Kabar Otomatis', desc: 'Posting berita penyaluran dana langsung ke halaman kampanye untuk menjaga kepercayaan donatur.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-slate-200 rounded-full p-1 mt-1"><CheckCircle2 size={16} className="text-slate-700" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/demo/admin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#10B16F] hover:bg-[#0e9f63] text-white px-8 py-4 rounded-full font-bold transition-transform active:scale-95 shadow-lg shadow-[#10B16F]/30">
                Lihat Demo <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MORE FEATURES GRID */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">Satu Platform,<br />Semua Kebutuhan NGO Anda.</h2>
            <p className="text-lg text-slate-600">Tidak perlu menyewa programmer mahal. Semuanya sudah tersedia dari hari pertama.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Custom Domain', desc: 'Gunakan nama domain resmi yayasan Anda untuk meningkatkan profesionalitas.' },
              { icon: BellRing, title: 'Notifikasi Otomatis', desc: 'Kirim pesan terima kasih & tagihan via WhatsApp / Email secara otomatis.' },
              { icon: ShieldCheck, title: 'Verifikasi Aman', desc: 'Transaksi dienkripsi dengan standar keamanan industri perbankan.' },
              { icon: Database, title: 'Export Data CSV', desc: 'Unduh seluruh laporan keuangan dan database donatur kapan saja.' },
              { icon: Activity, title: 'Analitik Mendalam', desc: 'Pantau grafik pertumbuhan kampanye dan identifikasi kampanye terbaik.' },
              { icon: Heart, title: 'Multi-Campaign', desc: 'Buat kampanye tak terbatas untuk Zakat, Infaq, Qurban, Wakaf, hingga Bencana.' }
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 shadow-sm p-8 rounded-3xl hover:shadow-md hover:border-[#10B16F]/30 transition-all reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 bg-emerald-100 text-[#10B16F] rounded-xl flex items-center justify-center mb-6"><f.icon size={24} /></div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENTERPRISE INFRASTRUCTURE */}
      <section id="keunggulan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ShieldCheck size={56} className="text-[#10B16F] mx-auto mb-6 reveal" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight reveal delay-100">
            Infrastruktur Skala Besar.<br />Anti-Down Saat Kampanye Anda Viral.
          </h2>
          <p className="text-xl text-slate-400 mb-16 leading-relaxed font-medium reveal delay-200">
            Sering khawatir web *down* saat ada donasi massal (Flash Donation)? Sistem DonasiOnline dirancang dengan arsitektur tangguh yang siap melayani puluhan ribu transaksi secara bersamaan tanpa kendala.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal delay-300">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
              <Activity className="text-[#10B16F] mb-3" size={28} />
              <span className="font-bold text-lg mb-1">High Traffic</span>
              <span className="text-xs text-slate-400">Siap beban tinggi</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
              <Lock className="text-[#10B16F] mb-3" size={28} />
              <span className="font-bold text-lg mb-1">Enkripsi Data</span>
              <span className="text-xs text-slate-400">Setara perbankan</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
              <RefreshCcw className="text-[#10B16F] mb-3" size={28} />
              <span className="font-bold text-lg mb-1">Auto Sinkronisasi</span>
              <span className="text-xs text-slate-400">Mutasi instan</span>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
              <ShieldCheck className="text-[#10B16F] mb-3" size={28} />
              <span className="font-bold text-lg mb-1">Uptime 99.9%</span>
              <span className="text-xs text-slate-400">Selalu online 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRICING & VALUE PROP */}
      <section id="harga" className="py-24 bg-[#ECFDF5] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[#10B16F] font-bold tracking-wider uppercase text-sm mb-3">Model Bisnis Adil</h2>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">Berhenti Membayar Potongan Donasi.</h2>
            <p className="text-lg text-slate-600">Anda hanya membayar biaya langganan server bulanan yang sangat terjangkau. <br className="hidden md:block" /> Sisa 100% donasi milik lembaga Anda seutuhnya.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm reveal delay-100">
              <div className="text-rose-500 font-black mb-6 uppercase tracking-wider text-sm flex items-center gap-2 pb-4 border-b border-slate-100">
                <X size={18} /> Platform Publik (Cara Lama)
              </div>
              <ul className="space-y-5 text-slate-600 font-medium">
                <li className="flex items-start gap-3"><X size={20} className="text-rose-400 shrink-0 mt-0.5" /> Potongan biaya platform 5% - 10% dari setiap rupiah donasi umat.</li>
                <li className="flex items-start gap-3"><X size={20} className="text-rose-400 shrink-0 mt-0.5" /> Dana tertahan, pencairan butuh proses pengajuan dan review.</li>
                <li className="flex items-start gap-3"><X size={20} className="text-rose-400 shrink-0 mt-0.5" /> Data kontak donatur tidak diberikan kepada NGO Anda.</li>
                <li className="flex items-start gap-3"><X size={20} className="text-rose-400 shrink-0 mt-0.5" /> Branding menumpang nama platform penyedia layanan.</li>
              </ul>
            </div>

            {/* The DonasiOnline Way */}
            <div className="bg-[#10B16F] p-8 rounded-3xl border border-[#10B16F] shadow-2xl transform md:-translate-y-4 relative reveal delay-200">
              <div className="absolute -top-4 right-6 bg-emerald-100 text-emerald-900 text-xs font-black px-4 py-2 rounded-full uppercase shadow-lg shadow-emerald-900/10">
                Paling Untung
              </div>
              <div className="text-white font-black mb-6 uppercase tracking-wider text-sm flex items-center gap-2 pb-4 border-b border-emerald-400/50">
                <CheckCircle2 size={18} /> Berlangganan DonasiOnline
              </div>
              <ul className="space-y-5 text-emerald-50 font-medium mb-10">
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" /> <strong className="text-white">0% Potongan Donasi.</strong> Semua masuk ke NGO Anda.</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" /> Uang langsung cair (Direct settlement via Payment Gateway Anda).</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" /> Anda menguasai 100% Database Donatur untuk Retargeting.</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" /> Eksklusif menggunakan Domain dan Logo yayasan Anda sendiri.</li>
              </ul>
              <button className="w-full bg-white hover:bg-slate-50 text-[#10B16F] py-4 rounded-xl font-black transition-colors shadow-lg text-lg">
                Lihat Paket Harga Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA & FOOTER */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <Globe size={48} className="text-[#10B16F] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Siap Membangun Kemandirian<br />Lembaga Anda Hari Ini?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Bergabunglah dengan puluhan Yayasan, Masjid, dan NGO Cerdas yang telah bertransformasi digital sepenuhnya bersama DonasiOnline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20mau%20konsultasi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#10B16F] hover:bg-[#0e9f63] text-white px-10 py-5 rounded-full font-black text-lg transition-transform active:scale-95 shadow-[0_10px_30px_rgba(16,177,111,0.3)]">
              Konsultasi & Demo Gratis
            </a>
            <Link to="/marketing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-50 border-2 border-emerald-200 hover:border-[#10B16F] hover:bg-emerald-100 text-emerald-800 px-10 py-5 rounded-full font-bold text-lg transition-colors flex justify-center items-center gap-2">
              <Zap size={20} className="text-[#10B16F] fill-[#10B16F]" /> Gabung Jadi Partner
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-[#10B16F] fill-[#10B16F]" />
            <span className="font-black text-xl text-slate-800">Donasi<span className="text-[#10B16F]">Online</span></span>
          </div>
          <p className="text-sm text-slate-500 font-medium">© 2026 DonasiOnline SaaS Platform. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-[#10B16F] transition-colors">Syarat Ketentuan</a>
            <a href="#" className="hover:text-[#10B16F] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#10B16F] transition-colors">Pusat Bantuan</a>
          </div>
        </div>
      </footer>

    </div>
  );
}