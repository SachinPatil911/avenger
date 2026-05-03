import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, DollarSign, Share2, Calendar, Search, Smartphone, Users, BarChart, CheckCircle } from 'lucide-react';

export const Strategy: React.FC = () => {
  const seoTactics = [
    { title: "Keyword Research (LSI & Long-Tail)", desc: "Focus on specific character versions (e.g., 'Iron Man Mark 85 features') rather than just 'Iron Man' to capture high-intent traffic." },
    { title: "High-Quality Backlink Building", desc: "Collaborate with other comic news sites and fan forums for guest posts and natural link insertion." },
    { title: "On-Page Optimization", desc: "Use schema markup for 'Article' and 'Person' to show up in Google's Knowledge Graph snippets." },
    { title: "Speed & Core Web Vitals", desc: "Ensure fast loading on mobile since 80% of Marvel fans browse on smartphones while watching movies." }
  ];

  const monetization = [
    { title: "Display Ads (AdSense/Ezoic)", desc: "Primary revenue source once traffic hits 10k+ sessions/month." },
    { title: "Affiliate Marketing", desc: "Links to Amazon for comics, Funko Pops, and high-end collectibles from Sideshow/Hot Toys." },
    { title: "Custom Merchandise", desc: "Launch 'AvengerVault' branded gear (shirts, mugs) via Print-on-Demand (Printful)." },
    { title: "Sponsorships", desc: "Paid collaborations with gaming companies (e.g., Marvel Snap, Marvel Rivals) for dedicated reviews." }
  ];

  const socialStrategy = [
    { platform: "Instagram", focus: "Visual character infographics, armor evolution reels, and high-res fan art features.", icon: <Smartphone /> },
    { platform: "YouTube", focus: "Deep-dive video essays (10-15 mins) and shorts covering latest MCU trailer breakdowns.", icon: <BarChart /> },
    { platform: "Twitter/X", focus: "Real-time news updates, live-tweeting movie premieres, and engaging in fan debates.", icon: <Share2 /> }
  ];

  const postingPlan = [
    { week: "Week 1-2", focus: "Foundation: 10 Pillar Articles on Core Avengers (Iron Man, Cap, Thor, Hulk, etc.)" },
    { week: "Week 3-4", focus: "Niche Expansion: Villains, Side Characters, and MCU Timeline breakdowns." },
    { week: "Week 5-6", focus: "Interactive: Fan theories, polls, and 'Top 10' listicles for shareability." },
    { week: "Week 7-8", focus: "Scaling: Guest posts, SEO auditing, and launching the Newsletter." }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-6 underline decoration-red-700 decoration-8 underline-offset-8">
            Growth & <span className="text-red-700">Monetization</span> Strategy
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg italic">
            "A goal without a plan is just a wish." — Tony Stark (Probably)
          </p>
        </div>

        {/* SEO Strategy */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12 border-b-2 border-slate-200 pb-4">
            <Search className="text-red-700" size={32} />
            <h2 className="text-3xl font-black uppercase italic tracking-wide text-slate-900">1. SEO Dominance Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoTactics.map((tactic, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-red-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black uppercase italic mb-3 text-slate-900">{tactic.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{tactic.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Monetization */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12 border-b-2 border-slate-200 pb-4">
            <DollarSign className="text-red-700" size={32} />
            <h2 className="text-3xl font-black uppercase italic tracking-wide text-slate-900">2. Monetization Blueprint</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monetization.map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl text-white group hover:bg-red-700 transition-colors duration-500">
                <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-red-700 transition-colors">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-lg font-black uppercase italic mb-3">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Growth */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12 border-b-2 border-slate-200 pb-4">
            <Users className="text-red-700" size={32} />
            <h2 className="text-3xl font-black uppercase italic tracking-wide text-slate-900">3. Social Media Growth (Instagram, YT, Twitter)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialStrategy.map((social, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-6">
                  {social.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{social.platform}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{social.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 60-Day Posting Plan */}
        <section>
          <div className="flex items-center gap-3 mb-12 border-b-2 border-slate-200 pb-4">
            <Calendar className="text-red-700" size={32} />
            <h2 className="text-3xl font-black uppercase italic tracking-wide text-slate-900">4. Content Posting Plan (First 60 Days)</h2>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-700 opacity-5 rounded-bl-full"></div>
            <div className="space-y-12 relative z-10">
              {postingPlan.map((plan, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black italic group-hover:bg-red-700 transition-colors">
                      {idx + 1}
                    </div>
                    {idx !== postingPlan.length - 1 && <div className="w-1 h-full bg-slate-100 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-black uppercase italic text-red-700 mb-2">{plan.week}</h4>
                    <p className="text-slate-700 font-bold text-lg mb-2">{plan.focus}</p>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-400"><CheckCircle size={12} className="text-green-500" /> SEO Optimized</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-400"><CheckCircle size={12} className="text-green-500" /> High Shareability</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-24 p-12 bg-red-700 rounded-3xl text-white text-center shadow-[0_20px_50px_rgba(185,28,28,0.3)]">
          <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-8 leading-tight">Scale Your Fan <span className="underline decoration-slate-900 underline-offset-8">Empire</span></h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Following this blueprint will position AvengerVault as a top-tier authority in the Marvel fandom within 6 months.
          </p>
          <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-lg skew-x-[-10deg] hover:bg-black transition-all transform hover:scale-105">
            Download Full Roadmap
          </button>
        </div>
      </div>
    </div>
  );
};
