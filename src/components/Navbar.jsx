'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="ml-2 text-xl font-bold text-white tracking-wider">
              Secure<span className="text-emerald-400">File</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/"
                className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
                >
                    Beranda
                </Link>
                <Link href="/enkripsi"
                className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
                >
                    Enkripsi
                </Link>
                <Link href="/dekripsi"
                className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
                >
                    Dekripsi
                </Link>
                
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/"
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 border-b border-slate-800 last:border-0"
            >
                Beranda
            </Link>
            <Link href="/enkripsi"
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 border-b border-slate-800 last:border-0"
            >
                Enkripsi
            </Link>
            <Link href="/dekripsi"
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 border-b border-slate-800 last:border-0"
            >
                Dekripsi
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
