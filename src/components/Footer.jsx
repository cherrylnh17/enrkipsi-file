'use client';
import { Shield } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Shield className="h-6 w-6 text-emerald-500 mr-2" />
          <span className="text-lg font-bold text-white">SecureVault</span>
        </div>
        <div className="flex space-x-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-8 text-center md:text-left text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} SecureVault Project. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
