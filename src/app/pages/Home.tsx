import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Sword, Star, Info, Layout as LayoutIcon, Globe, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BlogCard } from '../components/BlogCard';

export const Home: React.FC = () => {
  const blogNames = [
    { name: "AvengerVault", tag: "The ultimate archives of earth's mightiest heroes." },
    { name: "MarvelousVerse", tag: "Exploring every corner of the Marvel multiverse." },
    { name: "HeroesAssemble", tag: "Where fan theories and comic history collide." },
    { name: "The Stark Files", tag: "Deep dives into tech, magic, and heroism." },
    { name: "Endgame HQ", tag: "The definitive guide to the MCU and beyond." },
  ];

  const domains = [
    "avengervault.com",
    "marvelousverse.net",
    "heroesassemble.org",
    "thestarkfiles.io",
    "marvelbloghq.com"
  ];

  const featuredPosts = [
    {
      title: "The Complete History of Iron Man: From Cave to Cosmos",
      excerpt: "Tony Stark started with a pile of scraps and a box of tools. Decades later, his legacy spans the entire universe. Explore the full evolution of the Invincible Iron Man.",
      image: "https://images.unsplash.com/photo-1636840438199-9125cd03c3b0",
      date: "Mar 4, 2026",
      author: "Admin",
      category: "Origins",
      slug: "/blog/iron-man-history"
    },
    {
      title: "How Captain America's Shield Defies All Known Physics",
      excerpt: "Is it Vibranium? Is it Proto-Adamantium? We dive into the science (and pseudo-science) behind Steve Rogers' iconic weapon of choice.",
      image: "https://images.unsplash.com/photo-1705733071563-d9c380d3343c",
      date: "Mar 1, 2026",
      author: "Stan F.",
      category: "Tech & Gear",
      slug: "#"
    },
    {
      title: "The Mythology of Mjolnir: Thor's Journey Through the Nine Realms",
      excerpt: "Whosoever holds this hammer, if they be worthy, shall possess the power of Thor. But what exactly defines 'worthiness' in the Marvel Universe?",
      image: "https://images.unsplash.com/photo-1661799284030-77b9a67fa451",
      date: "Feb 28, 2026",
      author: "Odin-son",
      category: "Lore",
      slug: "#"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1725465447900-a2b5164b6a43" 
            alt="Superheroes background"
            className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-red-700 text-white text-xs font-black uppercase tracking-[0.3em] mb-6 skew-x-[-10deg]">
              Earth's Mightiest Blog
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 drop-shadow-2xl">
              Assemble Your <span className="text-red-600">Knowledge</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              The ultimate fan portal for Marvel superheroes, cinematic deep-dives, and comic book history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all transform hover:scale-105 shadow-[6px_6px_0_0_rgba(255,255,255,0.2)]">
                Explore Archives
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all transform hover:scale-105 shadow-[6px_6px_0_0_rgba(185,28,28,0.5)]">
                About The Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900 italic underline decoration-red-600 decoration-8 underline-offset-8">
              Portal Branding Options
            </h2>
            <p className="text-slate-600">Choose the identity that resonates with your vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 uppercase tracking-wide text-red-700">
                <Info size={20} /> Top 5 Name Suggestions
              </h3>
              <div className="space-y-4">
                {blogNames.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border-l-4 border-red-700 rounded-r-lg group hover:bg-red-50 transition-colors">
                    <h4 className="font-black text-slate-900 uppercase group-hover:text-red-700">{item.name}</h4>
                    <p className="text-sm text-slate-500 italic">{item.tag}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 uppercase tracking-wide text-red-700">
                <Globe size={20} /> Domain Name Ideas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domains.map((domain, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 rounded flex items-center gap-2 text-sm font-bold text-slate-700 hover:border-red-300 hover:text-red-700 transition-colors">
                    <CheckCircle size={16} className="text-green-500" /> {domain}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg relative overflow-hidden group">
                <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform">
                  <Shield size={120} />
                </div>
                <h4 className="font-black uppercase italic mb-2">Pro SEO Tip</h4>
                <p className="text-sm text-slate-400 relative z-10">
                  Always opt for .com if available. It's the most trusted TLD and easiest for users to remember. Keywords like "Marvel" or "Superheroes" in the domain can help with initial SEO ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900 italic">
                Latest From The <span className="text-red-700">Vault</span>
              </h2>
              <p className="text-slate-600">The most recent updates from the world of superheroes.</p>
            </div>
            <button className="text-red-700 font-bold uppercase text-sm flex items-center gap-2 hover:gap-3 transition-all">
              View All Articles <Zap size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-700 font-black uppercase text-xs tracking-widest mb-4 block italic">Blueprint</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 text-slate-900 italic">
                Website Structure & <span className="text-red-700">Architecture</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit text-red-700"><LayoutIcon size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Modern Homepage</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Dynamic hero slider, trending news ticker, category-wise grid layout, and a prominent newsletter sign-up.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit text-red-700"><Shield size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Character Encyclopedia</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Dedicated sub-pages for every major hero with power levels, comic history, and MCU appearances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit text-red-700"><Star size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Interactive Community</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Comment sections, fan art galleries, and weekly polls to keep the audience engaged and returning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="text-white font-black uppercase italic mb-8 border-b border-slate-700 pb-4">Main Menu Pages</h3>
              <ul className="space-y-4">
                {['Home', 'Character Bios', 'Movie Reviews', 'Comic Lore', 'News & Rumors', 'Merch Store', 'About Us', 'Contact'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors">
                    <span className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-red-500">{idx + 1}</span>
                    <span className="font-bold text-sm tracking-wide uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-700 relative overflow-hidden">
        <div className="absolute right-[-100px] top-[-100px] opacity-10">
          <Sword size={400} className="rotate-45 text-white" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">
            Ready To Launch Your <span className="underline decoration-slate-900 underline-offset-8">Universe?</span>
          </h2>
          <p className="text-xl text-red-100 mb-10 opacity-90 max-w-2xl mx-auto">
            From zero to hero. Start building the ultimate fan portal today with our comprehensive strategy guide.
          </p>
          <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-lg skew-x-[-10deg] transition-all transform hover:scale-105 shadow-2xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};
