import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Heart, Zap, Sword, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760578456490-9cf37f1f1830" 
            alt="Comic book red blue"
            className="w-full h-full object-cover opacity-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 drop-shadow-2xl">
              About The <span className="text-red-600">Vault</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto mb-10 leading-relaxed italic">
              "Heroes are made by the path they choose, not the powers they are graced with."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section (500 words) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8 text-lg text-slate-700 leading-relaxed">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 border-l-8 border-red-700 pl-6 mb-8">
                Welcome to AvengerVault: The Ultimate Fan Portal
              </h2>
              <p>
                Founded in the heart of a comic book enthusiast's dream, <strong>AvengerVault</strong> was born from a simple realization: the stories of Marvel superheroes aren't just entertainment; they are modern myths that inspire millions. What started as a small personal project to track Iron Man's suit evolution has transformed into a comprehensive digital archive dedicated to the entire Marvel Universe.
              </p>
              <p>
                At AvengerVault, our mission is clear: to provide fans—from lifelong collectors to casual moviegoers—with the most detailed, accurate, and engaging content available. We believe that every character, from the iconic Captain America to the most obscure cosmic entity, deserves a spotlight that honors their legacy. Our team is comprised of writers who are first and foremost fans, spending countless hours scouring back-issues of comics, dissecting frame-by-one frame MCU trailers, and debating power levels with a passion that only true believers understand.
              </p>
              <p>
                We go beyond the surface-level news. While others might report on a casting rumor, we dive into the implications for the multiverse. When a new trailer drops, we don't just watch it—we decode it, finding the hidden Easter eggs that connect the dots across decades of storytelling. Our "Character Deep Dives" are more than just biographies; they are psychological profiles and historical records that track the growth of these legends through the lens of human experience.
              </p>
              <p>
                But AvengerVault is more than just a blog; it's a community. We've built this portal to be a sanctuary where fans can assemble to share theories, celebrate triumphs, and mourn the heroes who have fallen. We understand that Marvel is a shared language, a culture that transcends borders and generations. Whether you're looking for the complete history of Iron Man, the latest news on Phase 6 of the MCU, or a breakdown of the most obscure comic book lore, you've found your headquarters.
              </p>
              <p>
                As we look to the future, our goals are ambitious. We are expanding our coverage into interactive maps of the Marvel multiverse, exclusive interviews with creators, and a merchandise guide that focuses on quality and authenticity. We are building a scalable platform that will grow alongside the ever-expanding cinematic and comic book landscape. 
              </p>
              <p>
                Thank you for being part of this journey. Your support keeps us inspired to keep digging, keep writing, and keep believing in the heroes that teach us what it means to be truly extraordinary. Excelsior!
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black uppercase italic text-red-700 mb-6 flex items-center gap-2">
                  <Target size={20} /> Our Core Values
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-red-700 text-white p-2 rounded-lg h-fit"><Shield size={18} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Fan Integrity</h4>
                      <p className="text-xs text-slate-500">Always accurate, always passionate, and always putting the fans first.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-slate-900 text-white p-2 rounded-lg h-fit"><Zap size={18} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Deep Analysis</h4>
                      <p className="text-xs text-slate-500">Going beyond the headlines to provide meaningful insights and lore.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-red-700 text-white p-2 rounded-lg h-fit"><Heart size={18} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Community Focus</h4>
                      <p className="text-xs text-slate-500">Creating a safe and engaging space for the Marvel fandom worldwide.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-700 p-8 rounded-2xl text-white relative overflow-hidden group">
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:rotate-12 transition-transform">
                  <Star size={120} />
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 relative z-10">Founder's Note</h3>
                <p className="text-sm italic opacity-90 leading-relaxed relative z-10">
                  "I started this blog with a single post about Iron Man's Mark 1 armor. Seeing this community grow has been the greatest adventure of my life. We're just getting started."
                </p>
                <div className="mt-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-700 font-black italic">AV</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">Tony S.</p>
                    <p className="text-[10px] opacity-75 uppercase">Editor-in-Chief</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-16">
            Meet The <span className="text-red-700">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Natasha R.", role: "Lead Investigator", color: "bg-red-700" },
              { name: "Steve R.", role: "History Expert", color: "bg-blue-700" },
              { name: "Bruce B.", role: "Tech & Science", color: "bg-green-700" },
              { name: "Wanda M.", role: "Magic & Lore", color: "bg-purple-700" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full ${member.color} flex items-center justify-center text-white text-3xl font-black italic`}>
                  {member.name[0]}
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
