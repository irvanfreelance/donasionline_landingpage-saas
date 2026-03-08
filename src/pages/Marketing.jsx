import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Heart,
    Clock,
    Briefcase,
    Banknote,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Users,
    ShieldCheck,
    Building2,
    Smartphone,
    PieChart,
    Laptop,
    Menu,
    X,
    Wallet,
    Target,
    Coffee,
    Code2,
    Share2,
    BellRing
} from 'lucide-react';

export default function MERecruitmentPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      body { font-family: 'Source Sans Pro', sans-serif; overflow-x: hidden; background-color: #f8fafc; }

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

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
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
        <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#10B16F] selection:text-white">
            <Helmet>
                <title>Program Mitra Edukasi-DonasiOnline</title>
                <meta name="description" content="Bergabunglah sebagai Mitra Edukasi DonasiOnline dan bantu NGO bertransformasi digital sambil mendapatkan potensi penghasilan tak terbatas." />
                <meta property="og:title" content="Program Mitra Edukasi-DonasiOnline" />
                <meta property="og:description" content="Bergabunglah sebagai Mitra Edukasi DonasiOnline dan bantu NGO bertransformasi digital sambil mendapatkan potensi penghasilan tak terbatas." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* 1. NAVBAR */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'} `}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#10B16F] to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-[#10B16F]/30">
                            <Heart size={20} className="text-white fill-white" />
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-slate-800">Donasi<span className="text-[#10B16F]">Online</span> <span className="text-sm font-semibold text-slate-400">Partners</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
                        <a href="#benefit" className="hover:text-[#10B16F] transition-colors">Keuntungan</a>
                        <a href="#produk" className="hover:text-[#10B16F] transition-colors">Apa yang Dijual?</a>
                        <a href="#komisi" className="hover:text-[#10B16F] transition-colors">Simulasi Komisi</a>
                        <a href="#carakerja" className="hover:text-[#10B16F] transition-colors">Cara Kerja</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20tertarik%20gabung%20jadi%20Marketing%20Executive" target="_blank" rel="noopener noreferrer" className="bg-[#10B16F] hover:bg-[#0e9f63] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-[#10B16F]/30 block text-center">
                            Daftar Sekarang
                        </a>
                    </div>

                    <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white text-slate-800 pt-24 px-6 flex flex-col gap-6 font-bold text-lg md:hidden animate-in fade-in duration-200">
                    <a href="#benefit" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Keuntungan</a>
                    <a href="#produk" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Apa yang Dijual?</a>
                    <a href="#komisi" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Simulasi Komisi</a>
                    <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20tertarik%20gabung%20jadi%20Marketing%20Executive" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#10B16F] text-white py-4 rounded-xl mt-4 shadow-lg">Daftar Sekarang</a>
                </div>
            )}

            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#ECFDF5]">
                {/* Abstract Background for Glass effect */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/60 blur-[80px] blob-shape"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#10B16F]/10 blur-[100px] blob-shape" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 text-center lg:text-left reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white text-[#10B16F] text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
                            <Briefcase size={16} /> Peluang Kemitraan Eksekutif B2B
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-slate-900">
                            Ubah Relasi Anda Menjadi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B16F] to-emerald-500">
                                Passive Income Berkelanjutan.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Bantu Masjid, Panti Asuhan, dan Yayasan di kota Anda memiliki platform donasi digital sendiri. Cukup referensikan, dan nikmati gaji pasif setiap bulan selama mereka berlangganan.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20tertarik%20gabung%20jadi%20Marketing%20Executive" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#10B16F] hover:bg-[#0d945c] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(16,177,111,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                                Gabung Jadi Mitra <ArrowRight size={20} />
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-600 text-sm font-semibold">
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B16F]" /> Fleksibel (Tanpa Jam Kantor)</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B16F]" /> 100% Kerja Remote / Digital</span>
                        </div>
                    </div>

                    {/* Hero Illustration: Floating Cards */}
                    <div className="relative z-10 w-full h-[400px] hidden sm:block perspective-1000 reveal delay-200">

                        {/* Card 1: Uang Kaget */}
                        <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(16,177,111,0.2)] border border-slate-100 w-64 transform rotate-y-[-5deg] rotate-x-[5deg] animate-float-slow z-20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Banknote size={24} /></div>
                                <div><p className="text-xs font-bold text-slate-400 uppercase">Komisi Awal</p><p className="font-black text-slate-800 text-lg">Rp 500.000</p></div>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Cair seketika saat Yayasan membayar biaya Setup sistem.</p>
                        </div>

                        {/* Card 2: Passive Income */}
                        <div className="absolute bottom-10 left-0 bg-white p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-72 transform rotate-y-[5deg] rotate-x-[5deg] animate-float-fast z-10" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600"><TrendingUp size={24} /></div>
                                <div><p className="text-xs font-bold text-slate-400 uppercase">Passive Income</p><p className="font-black text-slate-800 text-lg">Rp 1.398.000 / bln</p></div>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2"><div className="w-3/4 h-full bg-[#10B16F]"></div></div>
                            <p className="text-[10px] text-slate-500">Dari 10 yayasan aktif berlangganan.</p>
                        </div>

                        {/* Card 3: Target Market */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white w-48 z-0">
                            <div className="flex -space-x-3 mb-3 justify-center">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad&backgroundColor=b6e3f4" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&backgroundColor=c0aede" className="w-10 h-10 rounded-full border-2 border-white" />
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+10k</div>
                            </div>
                            <p className="text-xs text-center font-bold text-slate-700">Target Market Luas: Masjid & NGO</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. WHO IS THIS FOR (Target Audience Alignment) */}
            <section id="benefit" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                        <h2 className="text-[#10B16F] font-bold tracking-wider uppercase text-sm mb-3">Dirancang Untuk Anda</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-6">Peluang Bisnis B2B Tanpa Risiko.</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Berbeda dengan jualan eceran yang mengharuskan Anda menyetok barang. Kami mengajak Anda memasarkan "Infrastruktur Teknologi" yang amat krusial bagi NGO.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 reveal delay-100 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Coffee size={28} />
                            </div>
                            <h4 className="font-bold text-slate-800 text-xl mb-3">Karyawan Profesional</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">Kerjakan di luar jam kantor. Gunakan *networking* di DKM Masjid Perusahaan atau yayasan sosial tempat Anda biasa berdonasi.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 reveal delay-200 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
                                <Clock size={28} />
                            </div>
                            <h4 className="font-bold text-slate-800 text-xl mb-3">Ibu Rumah Tangga (IRT)</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">Waktu fleksibel dari rumah. Anda cukup membuka percakapan via WA, lalu biar tim kami yang melakukan Zoom *meeting* presentasi.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 reveal delay-300 hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                                <Target size={28} />
                            </div>
                            <h4 className="font-bold text-slate-800 text-xl mb-3">Freelancer & Mahasiswa</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">Punya *skill* komunikasi yang baik? Anda memegang posisi eksekutif untuk menawarkan teknologi mutakhir ke lembaga sosial.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE PRODUCT CONTEXT (What are they selling?) - REPLACED WITH 3 DETAILED SECTIONS */}

            {/* SECTION JUALAN 1: APLIKASI DONATUR */}
            <section id="produk" className="py-24 bg-[#ECFDF5] relative overflow-hidden border-b border-emerald-50">
                {/* Intro Header for the whole Product section */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-20 reveal">
                    <h2 className="text-[#10B16F] font-bold tracking-wider uppercase text-sm mb-3">Senjata Jualan Anda</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-6">Bantu NGO Memiliki 3 Pilar Ekosistem Ini.</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Produk yang Anda tawarkan sangat mudah dijual karena memberikan <strong>100% kendali</strong> ke tangan Yayasan dan menghapus potongan biaya admin 5-10% dari platform lama mereka.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative reveal">
                        {/* UI Abstract Mockup for Donor App */}
                        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(16,177,111,0.2)] border-8 border-white p-2 transform -rotate-2 transition-transform hover:rotate-0 duration-500 relative z-10 w-full max-w-[320px] mx-auto">
                            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                                <div className="bg-[#10B16F] px-4 pt-8 pb-4 text-white text-center font-bold">Donasi Cepat</div>
                                <div className="p-4">
                                    <div className="w-full h-24 bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Campaign" />
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <div className="bg-white border border-teal-500 p-3 rounded-xl flex justify-between items-center shadow-[0_0_0_1px_rgba(16,177,111,1)]">
                                            <span className="font-bold text-teal-700">Rp 100.000</span>
                                            <div className="w-4 h-4 rounded-full border-2 border-teal-500 flex items-center justify-center"><div className="w-2 h-2 bg-teal-500 rounded-full"></div></div>
                                        </div>
                                        <div className="bg-white border border-slate-200 p-3 rounded-xl flex justify-between items-center text-slate-500">
                                            <span>Rp 50.000</span><div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                                        </div>
                                    </div>
                                    <div className="bg-[#10B16F] text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-[#10B16F]/30 animate-pulse-soft">Bayar via QRIS</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-6 -right-4 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 animate-float-slow z-20 flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-[#10B16F]"><Wallet size={20} /></div>
                            <div><p className="text-[10px] font-bold text-slate-400 uppercase">Auto-Verifikasi</p><h4 className="font-black text-slate-800 text-sm">24 Jam Nonstop</h4></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/40 rounded-full blur-[60px] -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-2 reveal delay-200">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#10B16F] font-bold mb-6 uppercase tracking-wider text-xs">
                            <Smartphone size={16} /> Argumen Sales 1
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Aplikasi Donatur Web-App</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Yakinkan NGO bahwa mereka akan memiliki platform secanggih e-commerce raksasa. Donatur mereka tidak perlu lagi kirim bukti transfer ke WhatsApp.
                        </p>
                        <ul className="space-y-5">
                            {[
                                { title: 'Sistem Pembayaran Instan', desc: 'Terintegrasi dengan QRIS, Virtual Account (BCA, Mandiri, dll), dan E-Wallet (GoPay, OVO).' },
                                { title: 'Checkout Tanpa Hambatan', desc: 'Tidak wajib bikin akun/login. Konversi donatur yang berhasil bayar akan naik drastis.' },
                                { title: 'Branding Milik Sendiri', desc: 'Sistem menggunakan Logo dan Nama Domain Yayasan mereka sendiri. Sangat profesional.' }
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
                    </div>
                </div>
            </section>

            {/* SECTION JUALAN 2: PORTAL AFFILIATE */}
            <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold mb-6 uppercase tracking-wider text-xs">
                            <Share2 size={16} /> Argumen Sales 2
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Portal Pasukan Relawan (Affiliate)</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Ini adalah fitur favorit Yayasan. Beritahu mereka bahwa mereka bisa melipatgandakan donasi dengan memberi relawan/jamaah sebuah <em>dashboard</em> khusus.
                        </p>
                        <ul className="space-y-5">
                            {[
                                { title: 'Tautan Unik Otomatis', desc: 'Tiap relawan punya Link khusus untuk disebar. Jika ada yang donasi dari link itu, sistem mencatatnya otomatis.' },
                                { title: 'Bagi Hasil (Ujrah) Transparan', desc: 'Yayasan bisa atur komisi relawan (misal 5%). Relawan bisa menarik saldonya langsung dari aplikasi.' },
                                { title: 'Gamifikasi Kebaikan', desc: 'Relawan akan lebih semangat promosi karena mereka bisa melihat "Total Orang yang Berhasil Diajak" secara realtime.' }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="bg-indigo-50 rounded-full p-1 mt-1"><CheckCircle2 size={16} className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative reveal delay-200">
                        {/* UI Abstract Mockup for Affiliate App */}
                        <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-200 p-8 transform rotate-2 transition-transform hover:rotate-0 duration-500 relative z-10 w-full max-w-[380px] mx-auto">
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6">
                                <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center"><Users size={24} className="text-white" /></div>
                                <div><p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Komisi Relawan</p><h3 className="text-2xl font-black text-slate-800">Rp 1.250.000</h3></div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl mb-6 border border-slate-100 shadow-sm">
                                <p className="text-xs text-slate-500 font-semibold mb-2">Tautan Promosi Anda</p>
                                <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl text-sm font-mono text-indigo-700 flex justify-between items-center">
                                    <span className="truncate pr-4">yayasan.org/c/ref=budi</span>
                                    <Share2 size={16} className="text-indigo-600 shrink-0" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Total Klik</p>
                                    <p className="text-xl font-bold text-slate-800">1.450</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Donatur</p>
                                    <p className="text-xl font-bold text-emerald-600">342</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200/40 rounded-full blur-[60px] -z-10"></div>
                    </div>
                </div>
            </section>

            {/* SECTION JUALAN 3: ADMIN DASHBOARD */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative reveal">
                        {/* UI Abstract Mockup for Admin Dashboard */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 w-full max-w-lg mx-auto relative z-10">
                            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                <div>
                                    <h3 className="font-black text-slate-800">Tren Pendanaan (Bulan Ini)</h3>
                                    <p className="text-xs text-slate-400">Total: Rp 124.000.000</p>
                                </div>
                                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">+12.5%</span>
                            </div>
                            {/* SVG Line Chart Animation Simulation */}
                            <svg viewBox="0 0 400 120" className="w-full h-24 overflow-visible mb-6">
                                <path d="M 0 100 L 50 80 L 100 90 L 150 50 L 200 60 L 250 20 L 300 40 L 350 10 L 400 30" fill="none" stroke="#10B16F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="350" cy="10" r="6" fill="#fff" stroke="#10B16F" strokeWidth="3" />
                            </svg>

                            <div className="flex flex-col gap-3">
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                                    <div className="flex items-center gap-3"><div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Users size={14} /></div><span className="font-bold text-sm text-slate-700">Akses Database Donatur</span></div>
                                    <CheckCircle2 size={16} className="text-emerald-500" />
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                                    <div className="flex items-center gap-3"><div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600"><BellRing size={14} /></div><span className="font-bold text-sm text-slate-700">Kirim Tagihan WA Otomatis</span></div>
                                    <CheckCircle2 size={16} className="text-emerald-500" />
                                </div>
                            </div>
                        </div>

                        {/* Blob Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/40 rounded-full blur-[60px] -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-2 reveal delay-200">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 font-bold mb-6 uppercase tracking-wider text-xs">
                            <PieChart size={16} /> Argumen Sales 3
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">Admin Command Center</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Tawarkan mereka kemerdekaan data. Berikan panel admin modern untuk mengontrol setiap rupiah yang masuk dari mana saja.
                        </p>
                        <ul className="space-y-5">
                            {[
                                { title: 'Database Donatur 100% Milik Yayasan', desc: 'Bisa diunduh ke Excel. Yayasan bisa mem-follow up donatur lama untuk kampanye baru.' },
                                { title: 'Notifikasi WhatsApp Tagihan', desc: 'Ingatkan donatur yang lupa transfer Virtual Account secara otomatis menggunakan template sopan.' },
                                { title: 'Infrastruktur Anti-Down', desc: 'Sistem dirancang untuk menahan puluhan ribu trafik serentak saat kampanye mendadak viral di Medsos.' }
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
                    </div>
                </div>
            </section>

            {/* 5. COMMISSION STRUCTURE (The Hook) */}
            <section id="komisi" className="py-24 bg-[#ECFDF5] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                        <h2 className="text-[#10B16F] font-bold tracking-wider uppercase text-sm mb-3">Skema Pendapatan</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-6">Kerja Sekali, Dibayar Berkali-kali.</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">Kami menerapkan model komisi <strong>Hybrid</strong> yang sangat menguntungkan. Anda mendapat uang besar di depan, dan mendapat gaji pasif di bulan-bulan berikutnya.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                        {/* Uang Kaget */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(16,177,111,0.1)] border border-emerald-100 reveal delay-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 font-black text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">Dibayar H+1</div>
                            <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                                <Banknote size={32} />
                            </div>
                            <h4 className="font-black text-slate-800 text-2xl mb-2">"Uang Kaget" (Closing)</h4>
                            <p className="text-slate-600 mb-6 font-medium">Cair seketika saat Yayasan deal dan membayar invoice setup pertama.</p>
                            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                                <p className="text-sm text-amber-800 font-semibold mb-1">Komisi Anda:</p>
                                <p className="text-3xl font-black text-amber-600">Rp 500.000 <span className="text-sm font-bold text-amber-800">/ Yayasan</span></p>
                            </div>
                        </div>

                        {/* Passive Income */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(16,177,111,0.1)] border border-emerald-100 reveal delay-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#10B16F] text-white font-black text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">Tiap Bulan</div>
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp size={32} />
                            </div>
                            <h4 className="font-black text-slate-800 text-2xl mb-2">"Passive Income"</h4>
                            <p className="text-slate-600 mb-6 font-medium">Yayasan berlangganan sewa server bulanan. Anda mendapat potongan dari sana.</p>
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                                <p className="text-sm text-blue-800 font-semibold mb-1">Komisi Anda:</p>
                                <p className="text-3xl font-black text-blue-600">20% <span className="text-sm font-bold text-blue-800">dari tagihan bulanan klien</span></p>
                            </div>
                        </div>
                    </div>

                    {/* SIMULATION BOARD */}
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-5xl mx-auto reveal delay-300 relative z-20">
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                            <Laptop size={24} className="text-[#10B16F]" />
                            <h3 className="font-bold text-2xl text-slate-800">Simulasi Realistis (Paruh Waktu)</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    Katakanlah Anda meluangkan waktu luang dan berhasil mereferensikan hingga closing <strong>4 Yayasan</strong> di bulan pertama.
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <CheckCircle2 size={20} className="text-[#10B16F] shrink-0 mt-0.5" />
                                        <div><p className="font-bold text-slate-800 text-sm">Bulan 1 (Closing 4 Yayasan)</p><p className="text-xs text-slate-500 mt-1">Anda langsung mencairkan komisi awal total <strong>Rp 2.379.000</strong>.</p></div>
                                    </li>
                                    <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <CheckCircle2 size={20} className="text-[#10B16F] shrink-0 mt-0.5" />
                                        <div><p className="font-bold text-slate-800 text-sm">Bulan 2 (Tanpa Cari Klien Baru)</p><p className="text-xs text-slate-500 mt-1">Meski Anda libur, Anda tetap menerima transfer <strong>Rp 379.200</strong> dari perpanjangan 4 klien tersebut.</p></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-teal-800 to-emerald-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#10B16F]/40 rounded-full blur-2xl"></div>
                                <h4 className="font-bold text-emerald-300 mb-2 uppercase tracking-wide text-xs">Target Bulan ke-6</h4>
                                <p className="text-teal-50 text-sm mb-6">Jika Anda konsisten membangun portofolio hingga memiliki 20 klien Yayasan aktif:</p>

                                <p className="text-xs text-emerald-200 font-semibold mb-1">Gaji Pasif Anda Setiap Bulan:</p>
                                <h2 className="text-4xl font-black text-white mb-2">Rp 1.716.000</h2>
                                <p className="text-[10px] text-teal-100 border-t border-teal-700/50 pt-3 mt-4">Angka ini murni uang masuk tanpa mencari klien baru. Inilah kekuatan bisnis perangkat lunak (SaaS).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CUSTOM PROJECT OPPORTUNITY */}
            <section className="py-20 bg-white relative border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 reveal">
                    <div className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-sm transition-all hover:bg-amber-50">
                        <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                            <Code2 size={40} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">Bonus Durian Runtuh: <span className="text-amber-600">Proyek Custom</span></h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Sebagai mitra, posisi Anda setara dengan <strong>Customer Representative</strong>. Terus rawat hubungan baik dengan Yayasan yang sudah Anda bantu.
                            </p>
                            <p className="text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                Jika di kemudian hari Yayasan tersebut bertumbuh pesat dan membutuhkan pembuatan <strong>Aplikasi Android/iOS Khusus</strong>, Sistem ERP Manajemen, atau integrasi IT senilai puluhan hingga ratusan juta rupiah... kami siap mengeksekusinya. <br /><br />
                                Tugas Anda hanya mengkomunikasikan kebutuhannya ke kami. Anda akan mendapat <strong>Komisi Proyek 15% - 20%</strong> dari total nilai *deal* di depan!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW IT WORKS (Cara Kerja-Disederhanakan) */}
            <section id="carakerja" className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Sesederhana Apa Pekerjaannya?</h2>
                        <p className="text-lg text-slate-600">Anda cukup membuka jalan dan mereferensikan. <strong>Tim spesialis kami yang akan mengambil alih presentasi hingga sistem online.</strong></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

                        {[
                            { step: '01', title: 'Buka Obrolan', desc: 'Sapa pengurus Yayasan/Masjid di jaringan Anda. Tanyakan apakah mereka lelah dengan potongan donasi 5-10%.' },
                            { step: '02', title: 'Jadwal Meeting', desc: 'Cukup atur jadwal Zoom. Tim ahli kami yang akan presentasi dan mendemokan aplikasi kepada mereka.' },
                            { step: '03', title: 'Deal & Setup', desc: 'Yayasan setuju dan membayar invoice setup. Tim teknis kami akan mengurus semua instalasi.' },
                            { step: '04', title: 'Terima Komisi', desc: 'Begitu tervalidasi, komisi closing langsung cair, disusul passive income rutin setiap bulannya.' }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 rounded-3xl relative z-10 hover:border-[#10B16F]/40 hover:-translate-y-1 transition-all reveal text-center" style={{ transitionDelay: `${i * 100} ms` }}>
                                <div className="w-14 h-14 bg-[#ECFDF5] text-[#10B16F] rounded-full flex items-center justify-center font-black text-xl mb-4 mx-auto border-4 border-white shadow-sm">{f.step}</div>
                                <h4 className="font-bold text-slate-800 text-lg mb-2">{f.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA & FOOTER */}
            <section className="py-24 bg-gradient-to-br from-emerald-800 to-teal-900 text-white relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B16F]/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px]"></div>

                <div className="max-w-4xl mx-auto px-6 text-center reveal relative z-10">
                    <Building2 size={56} className="text-emerald-300 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Amankan Kuota Kota Anda.
                    </h2>
                    <p className="text-xl text-teal-100 mb-10 font-medium">
                        Kami membatasi jumlah Mitra Eksekutif di tiap kota agar persaingan tetap sehat. Jadilah yang pertama membawa revolusi digital filantropi di wilayah Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20tertarik%20gabung%20jadi%20Marketing%20Executive" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#10B16F] hover:bg-[#0e9f63] text-white px-10 py-5 rounded-full font-black text-lg transition-transform active:scale-95 shadow-[0_10px_30px_rgba(16,177,111,0.4)] flex items-center justify-center gap-2">
                            Daftar Sekarang (Gratis)
                        </a>
                        <a href="https://wa.me/6281462206437?text=Assalamualaikum%20tim%20donasi%20online%20saya%20tertarik%20gabung%20jadi%20Marketing%20Executive" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-teal-600/50 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-colors text-center block whitespace-nowrap">
                            Hubungi Admin Kami
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-50 border-t border-slate-200 py-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <Heart size={16} className="text-[#10B16F] fill-[#10B16F]" />
                        <span className="font-black text-lg text-slate-800">Donasi<span className="text-[#10B16F]">Online</span></span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">© 2026 DonasiOnline Partner Network. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}