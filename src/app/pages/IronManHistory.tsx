import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Clock, User, Share2, Facebook, Twitter, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const IronManHistory: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-700 text-xs font-black uppercase tracking-[0.3em] mb-6 rounded-md">
            The Ultimate History Series
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-8">
            The Complete History of <span className="text-red-700">Iron Man</span>: From Cave to Cosmos
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-100 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-black italic">AV</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Tony Stark Fan</p>
                <p className="text-[10px] text-slate-500 uppercase">March 4, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1 text-xs font-bold uppercase"><Clock size={14} /> 12 Min Read</span>
              <span className="flex items-center gap-1 text-xs font-bold uppercase"><MessageCircle size={14} /> 48 Comments</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors"><Facebook size={18} /></button>
              <button className="p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors"><Twitter size={18} /></button>
              <button className="p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors"><LinkIcon size={18} /></button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0" 
            alt="Iron Man Armor Suit"
            className="w-full h-[500px] object-cover"
          />
          <p className="p-4 bg-slate-900 text-white text-[10px] uppercase font-bold tracking-widest text-center italic">
            Visual History: The Evolution of the Invincible Iron Man Armors
          </p>
        </div>

        {/* Article Body (approx. 1000 words) */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-a:text-red-700">
          <p className="text-xl font-medium text-slate-600 mb-10 leading-relaxed italic first-letter:text-6xl first-letter:font-black first-letter:text-red-700 first-letter:mr-3 first-letter:float-left">
            In the annals of superhero history, few characters have undergone a transformation as radical and resonant as Anthony Edward Stark. From his first appearance in Tales of Suspense #39 in 1963 to his heroic sacrifice in Avengers: Endgame, Iron Man has evolved from a Cold War industrialist into a cosmic savior, defining the modern age of heroism along the way.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-slate-900 border-b-4 border-red-700 pb-2 inline-block">The Origin Story: A Genius in a Cave</h2>
          <p>
            The birth of Iron Man is legendary. Captured by enemy forces in a war zone, Tony Stark, a brilliant billionaire playboy and weapons manufacturer, finds himself with a chest full of shrapnel inching toward his heart. Alongside fellow captive and scientist Ho Yinsen, Stark builds a crude suit of iron armor and an arc reactor to keep himself alive and escape. This moment—building the Mark 1 with a "pile of scraps"—is the cornerstone of the character's ethos. It wasn't just about survival; it was the moment Tony Stark realized his intellect could be a shield rather than a sword.
          </p>
          <p>
            In the comics, this happened in Vietnam; in the 2008 film that launched the Marvel Cinematic Universe, it was Afghanistan. Regardless of the setting, the message remains the same: redemption through technology. Stark's realization that his company's weapons were causing more harm than good led to the shuttering of Stark Industries' weapons division and the birth of a new hero.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-slate-900 border-b-4 border-red-700 pb-2 inline-block">The Golden Avenger Emerges</h2>
          <p>
            Following his escape, Stark refined the armor. The bulky, grey Mark 1 gave way to the sleek, golden Mark 2, and eventually the iconic red-and-gold color scheme that would define him for decades. This era saw Stark balancing his dual life as a billionaire industrialist and a superhero, often acting as his own "bodyguard."
          </p>
          <p>
            Throughout the 60s and 70s, Iron Man became a founding member of the Avengers. He provided the funding, the technology, and the headquarters (Stark Mansion) for Earth's Mightiest Heroes. However, Stark's greatest battles weren't always against supervillains like the Mandarin or Justin Hammer; they were internal. The "Demon in a Bottle" storyline in 1979 remains one of the most poignant portrayals of alcoholism in comics, humanizing the "invincible" hero and showing that his greatest struggle was with himself.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-slate-900 border-b-4 border-red-700 pb-2 inline-block">The Tech War: Armor Wars and Extremis</h2>
          <p>
            As technology advanced, so did Iron Man. The 1980s brought the "Armor Wars," where Stark discovered his technology had been stolen and integrated into the suits of both heroes and villains. This period highlighted Stark's obsessive need to control his legacy, leading him to hunt down anyone using his tech, even clashing with the U.S. government and his fellow Avengers.
          </p>
          <p>
            In the 2000s, the "Extremis" storyline revolutionized the character. Stark integrated nanotechnology into his very biology, allowing him to store the undersuit of his armor within his bones and control the suit with his mind. This "Bio-Tech" era bridged the gap between man and machine, making Tony Stark literally the Iron Man. This upgrade was crucial for his survival during the "Civil War" event, where he stood in opposition to Captain America over the Superhero Registration Act.
          </p>

          <div className="my-16 p-8 bg-slate-900 rounded-2xl relative overflow-hidden text-white group">
            <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-2xl font-black uppercase italic mb-6 border-b border-slate-700 pb-4">Key Iron Man Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">1963</span>
                  <p className="text-sm">Tales of Suspense #39: First appearance and origin.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">1968</span>
                  <p className="text-sm">Iron Man #1: Debut of his own solo series.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">1979</span>
                  <p className="text-sm">Demon in a Bottle: Addressing Stark's alcoholism.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">2008</span>
                  <p className="text-sm">Iron Man Movie: Launch of the global MCU phenomenon.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">2012</span>
                  <p className="text-sm">The Avengers: Stark saves New York from a nuclear strike.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-black">2019</span>
                  <p className="text-sm">Avengers Endgame: The ultimate sacrifice of Tony Stark.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 text-slate-900 border-b-4 border-red-700 pb-2 inline-block">The MCU Revolution and Global Icon Status</h2>
          <p>
            While Iron Man was a major character in comics, the 2008 film directed by Jon Favreau and starring Robert Downey Jr. turned him into a global cultural phenomenon. Downey Jr.'s portrayal brought a wit, vulnerability, and charisma that perfectly captured the essence of Tony Stark. Over the next decade, through three solo films and four Avengers movies, audiences watched Tony Stark grow from an arrogant narcissist into a selfless mentor and father figure.
          </p>
          <p>
            His journey in the MCU is defined by his fear of the future—specifically, the threat of cosmic invasion. This fear drove him to create Ultron (a catastrophic mistake) and eventually pushed him toward the "Endgame." In his final moments, using the Infinity Stones to wipe out Thanos and his army, Tony Stark uttered the iconic line: "I am Iron Man." This wasn't just a callback to his first movie; it was a statement of identity. He was no longer just the man in the suit; he was the hero the universe needed.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-slate-900 border-b-4 border-red-700 pb-2 inline-block">The Legacy of Tony Stark</h2>
          <p>
            Even after his departure, Stark's influence looms large. In the MCU, characters like Peter Parker (Spider-Man) and Riri Williams (Ironheart) carry his torch. In the comics, the mantle of Iron Man has been held by Doctor Doom, James Rhodes (War Machine), and Victor von Doom, yet Tony Stark always returns, proving that his genius is irreplaceable.
          </p>
          <p>
            The history of Iron Man is a testament to the idea that our mistakes don't define us—our response to them does. Tony Stark spent his life trying to fix the world he helped break, and in doing so, he became its greatest protector. Whether it's through his hundreds of suits, his brilliant inventions, or his unwavering spirit, the Invincible Iron Man will forever be the heart of the Marvel Universe.
          </p>
          <p>
            As we look toward the next generation of heroes, we remember the man who started it all with a hammer and a dream in a cave. Tony Stark's legacy isn't just his technology; it's the hope that even the most flawed among us can become something truly marvelous.
          </p>

          <div className="mt-20 p-10 bg-red-700 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-black uppercase italic mb-6">What's Your Favorite Iron Man Armor?</h3>
            <p className="mb-8 opacity-90">From the Mark 1 to the Nano-tech Mark 85, tell us which suit you think is the ultimate version in the comments below!</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 font-black uppercase tracking-widest text-sm skew-x-[-10deg] hover:bg-slate-100 transition-all">Comment Now</button>
              <button className="px-8 py-3 bg-slate-900 text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] hover:bg-black transition-all">Share Article</button>
            </div>
          </div>
        </article>

        {/* Sidebar Related Posts (Mock) */}
        <div className="mt-24 border-t border-slate-100 pt-12">
          <h4 className="text-xl font-black uppercase italic mb-8">Related Intelligence</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <ImageWithFallback src="https://images.unsplash.com/photo-1705733071563-d9c380d3343c" alt="Cap Shield" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 uppercase text-sm mb-1 group-hover:text-red-700 transition-colors">Captain America: The First Avenger History</h5>
                <p className="text-xs text-slate-500">Discover the origin of the Super Soldier Serum.</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <ImageWithFallback src="https://images.unsplash.com/photo-1661799284030-77b9a67fa451" alt="Thor Hammer" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 uppercase text-sm mb-1 group-hover:text-red-700 transition-colors">Thor: The Mythology of the Thunder God</h5>
                <p className="text-xs text-slate-500">Exploring the Nordic roots of Marvel's favorite son.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
