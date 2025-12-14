'use client';

import React from 'react';
import {
  Shield, FileKey, Cpu, Lock, Globe, Zap, ArrowRight, Check
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
    <Icon className="h-6 w-6 text-emerald-400 mb-4" />
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-emerald-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up hover:bg-emerald-500/20 transition-colors cursor-default">
            <Zap className="w-4 h-4 mr-2 fill-current" />
            Teknologi AES-256-GCM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Privasi Mutlak <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
              Di File Pribadi Anda
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Enkripsi file pribadi Anda tanpa perlu upload ke server. Keamanan tingkat militer, langsung dari perangkat Anda, tanpa jejak, tanpa database.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center group"
            >
              Lihat Cara Kerja
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-bold text-lg transition-all backdrop-blur-sm"
            >
              Pelajari Fitur
            </button>
          </div>

          {/* desain sniped kode */}
          <div className="mt-16 mx-auto max-w-4xl bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-xs text-slate-400 font-mono">crypto.js — Client Side Enkripsi</div>
            </div>
            <div className="p-6 text-left font-mono text-sm md:text-base overflow-x-auto">
                <div className="text-purple-400">
                    const <span className="text-yellow-400">encryptData</span> ={" "}
                    <span className="text-cyan-400">async</span> (file, password) ={'>'} {'{'}
                </div>

                <div className="pl-4 text-slate-500">
                    // Mengubah password menjadi key material menggunakan PBKDF2
                </div>
                <div className="pl-4 text-slate-300">
                    const keyMaterial = <span className="text-cyan-400">await</span>{" "}
                    crypto.subtle.<span className="text-blue-400">importKey</span>(
                    "raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]
                    )
                </div>

                <div className="pl-4 text-slate-500">
                    // Menurunkan kunci AES 256-bit dari password
                </div>
                <div className="pl-4 text-slate-300">
                    const key = <span className="text-cyan-400">await</span>{" "}
                    crypto.subtle.<span className="text-blue-400">deriveKey</span>(
                    {'{'} name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" {'}'},
                    keyMaterial,
                    {'{'} name: "AES-GCM", length: 256 {'}'},
                    false,
                    ["encrypt"]
                    )
                </div>

                <div className="pl-4 text-slate-500">
                    // Mengenkripsi data menggunakan algoritma AES-GCM
                </div>
                <div className="pl-4 text-slate-300">
                    const encrypted = <span className="text-cyan-400">await</span>{" "}
                    crypto.subtle.<span className="text-blue-400">encrypt</span>(
                    {'{'} name: "AES-GCM", iv {'}'},
                    key,
                    buffer
                    )
                </div>

                <div className="pl-4 text-emerald-400">
                    return <span className="text-white">encrypted;</span>
                </div>

                <div className="text-purple-400">{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-slate-900 py-24 relative border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Standar Keamanan Tertinggi</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Kami tidak membuat algoritma sendiri. Kami menggunakan standar industri yang telah teruji secara global.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield}
              title="AES-256-GCM"
              desc="Advanced Encryption Standard dengan kunci 256-bit dan Galois/Counter Mode untuk menjamin kerahasiaan dan integritas data Anda."
            />
            <FeatureCard 
              icon={FileKey}
              title="PBKDF2 Hashing"
              desc="Password-Based Key Derivation Function 2 dengan SHA-256 dan ribuan iterasi membuat password Anda tahan terhadap serangan brute-force."
            />
            <FeatureCard 
              icon={Globe}
              title="Client-Side Only"
              desc="Semua proses terjadi di browser. File asli maupun password Anda tidak pernah meninggalkan perangkat Anda sedetik pun."
            />
            <FeatureCard 
              icon={Lock}
              title="Zero Knowledge"
              desc="Kami tidak menyimpan data Anda. Jika Anda lupa password, data tidak dapat dipulihkan oleh siapapun, termasuk kami."
            />
            <FeatureCard 
              icon={Cpu}
              title="Performa Tinggi"
              desc="Menggunakan Web Crypto API native browser yang jauh lebih cepat daripada library JavaScript eksternal biasa."
            />
            <FeatureCard 
              icon={Zap}
              title="Tanpa Instalasi"
              desc="Tidak perlu mengunduh software tambahan. Cukup buka browser modern apapun dan mulai amankan data Anda."
            />
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-linear-to-b from-emerald-500/5 to-transparent blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Cara Kerja Sistem</h2>
                <p className="text-slate-400 mb-8">
                  Proses enkripsi yang rumit kami sederhanakan menjadi 3 langkah mudah bagi pengguna, tanpa mengorbankan keamanan sedikitpun.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Pilih File", desc: "Upload file sensitif atau pribadi Anda." },
                    { title: "Set Password", desc: "Ketik password rahasia (Pastikan Anda mengingatnya!)." },
                    { title: "Enkripsi Instan", desc: "Sistem mengunci file dan Anda bisa langsung mengunduhnya." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex group">
                      <div className="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-slate-900 text-emerald-400 font-bold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                        {idx + 1}
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                 {/* Decorative Terminal UI */}
                 <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
                 <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                        <div className="flex items-center space-x-2">
                           <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                           <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                        </div>
                        <div className="flex items-center text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-mono">
                          <Check className="w-3 h-3 mr-1" /> Secure Connection
                        </div>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-center text-slate-300">
                          <span className="text-emerald-500 mr-2">➜</span> 
                          <span>Initiating Handshake...</span>
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="text-emerald-500 mr-2">➜</span> 
                          <span>Salt Generated: <span className="text-slate-500">ae92f...8d1</span></span>
                        </div>
                         <div className="flex items-center text-slate-300">
                          <span className="text-emerald-500 mr-2">➜</span> 
                          <span>Deriving Key (PBKDF2-HMAC-SHA256)</span>
                        </div>
                        <div className="p-3 bg-slate-950/50 rounded border border-slate-800 text-slate-400 text-xs">
                          Hashing 100,000 iterations... Done.
                        </div>
                        <div className="flex items-center text-emerald-400 animate-pulse">
                          <span className="mr-2">✓</span> 
                          <span>Encryption Complete. Ready for download.</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-b from-slate-950 to-emerald-950/20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Mengamankan File Pribadi Anda?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Bergabunglah dengan standar keamanan masa depan. Sederhana, Cepat, dan Aman.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 hover:scale-105"
          >
            Enkripsi File
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
