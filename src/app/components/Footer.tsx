import React from 'react';
import { Shield, Twitter, Youtube, Instagram, Facebook, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-red-700 p-1 rounded-md">
              <Shield className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic text-white">AvengerVault</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 opacity-75">
            Your ultimate destination for everything Marvel. From character origins to MCU deep dives, we cover the legends that saved the universe.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link to="/categories" className="hover:text-red-500 transition-colors">Categories</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            <li><Link to="/strategy" className="hover:text-red-500 transition-colors">SEO & Strategy</Link></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">Key Characters</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/blog/iron-man-history" className="hover:text-red-500 transition-colors">Iron Man</Link></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Captain America</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Thor Odinson</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Black Widow</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">The Incredible Hulk</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">Newsletter</h3>
          <p className="text-xs mb-4 opacity-75">Assemble with our monthly newsletter for the latest theories and news.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-800 border-none rounded-l-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-red-600 outline-none"
            />
            <button className="bg-red-700 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>&copy; 2026 AvengerVault Fan Portal. Not affiliated with Marvel Entertainment or Disney.</p>
        <p className="mt-4 md:mt-0 flex items-center gap-2">
          Made for the fans <ExternalLink size={12} />
        </p>
      </div>
    </footer>
  );
};
