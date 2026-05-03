import React from 'react';
import { motion } from 'motion/react';
import { Sword, Shield, Zap, BookOpen, Star, Film, Search, Target, Layout as LayoutIcon } from 'lucide-react';

export const Categories: React.FC = () => {
  const categories = [
    {
      title: "Hero Profiles & Origins",
      icon: <Shield size={24} />,
      subcategories: ["MCU Versions", "Comic Origins", "Power Levels", "Alternate Realities"],
      color: "border-red-600 bg-red-50 text-red-700"
    },
    {
      title: "Movie & Series Deep Dives",
      icon: <Film size={24} />,
      subcategories: ["MCU Timelines", "Phase Breakdowns", "Hidden Easter Eggs", "Deleted Scenes"],
      color: "border-slate-800 bg-slate-50 text-slate-800"
    },
    {
      title: "Comic Book Lore",
      icon: <BookOpen size={24} />,
      subcategories: ["Key Issues", "Story Arcs", "Variant Covers", "Writer/Artist Spotlights"],
      color: "border-blue-600 bg-blue-50 text-blue-700"
    },
    {
      title: "Tech, Gear & Magic",
      icon: <Zap size={24} />,
      subcategories: ["Iron Man Armors", "Asgardian Artifacts", "Vibranium Tech", "The Multiverse"],
      color: "border-yellow-600 bg-yellow-50 text-yellow-700"
    },
    {
      title: "Villains & Anti-Heroes",
      icon: <Sword size={24} />,
      subcategories: ["Thanos' Quest", "Loki's Schemes", "Thunderbolts", "Symbiote Files"],
      color: "border-purple-600 bg-purple-50 text-purple-700"
    },
    {
      title: "News, Rumors & Theories",
      icon: <Star size={24} />,
      subcategories: ["Casting News", "Fan Theories", "Future Phases", "SDCC Updates"],
      color: "border-green-600 bg-green-50 text-green-700"
    }
  ];

  const postIdeas = [
    { cat: "Origins", title: "Iron Man: The Complete Comic vs. Movie History Breakdown", keywords: "Iron Man history, Tony Stark MCU, comic origins" },
    { cat: "Lore", title: "Top 10 Most Powerful Avengers of All Time (Ranked)", keywords: "powerful avengers, strongest marvel heroes" },
    { cat: "Movies", title: "MCU Phase 1 to 6: The Ultimate Chronological Watch Order", keywords: "MCU watch order, marvel movies timeline" },
    { cat: "Tech", title: "The Science of Vibranium: Real-World Tech vs. Marvel Magic", keywords: "vibranium science, black panther tech" },
    { cat: "Villains", title: "Was Thanos Right? A Deep Dive Into the Mad Titan's Philosophy", keywords: "Thanos philosophy, infinity gauntlet theory" },
    { cat: "Origins", title: "Captain America: From Steve Rogers to Sam Wilson Explained", keywords: "Captain America history, new captain america" },
    { cat: "Movies", title: "Every Hidden Easter Egg in 'Avengers: Endgame' You Missed", keywords: "avengers endgame easter eggs, mcu secrets" },
    { cat: "Lore", title: "The Multiverse Saga: Explaining Every Reality in the MCU", keywords: "marvel multiverse, mcu earth 616" },
    { cat: "Tech", title: "Iron Man's 50+ Suits: A Visual Evolution from Mark 1 to Mark 85", keywords: "iron man armors, tony stark suits" },
    { cat: "Villains", title: "Who is Dr. Doom? Everything You Need to Know Before the Movie", keywords: "dr doom origins, fantastic four villain" },
    { cat: "Origins", title: "Black Widow's Darkest Secrets: The Red Room History Revealed", keywords: "black widow history, natasha romanoff lore" },
    { cat: "Lore", title: "The History of Wakanda: From Meteor to Global Power", keywords: "wakanda history, black panther lore" },
    { cat: "Movies", title: "The Future of the MCU: Everything We Know About Phase 6", keywords: "mcu phase 6, upcoming marvel movies" },
    { cat: "Tech", title: "Mjolnir vs Stormbreaker: Which is Thor's Ultimate Weapon?", keywords: "thor hammer vs axe, thor weapons" },
    { cat: "Villains", title: "Kang the Conqueror: Every Variant Explained (Simple Guide)", keywords: "kang variants, council of kangs" },
    { cat: "Origins", title: "The Incredible Hulk: Why Bruce Banner is Marvel's Best Hero", keywords: "hulk origins, bruce banner story" },
    { cat: "Lore", title: "The Celestial Saga: How the Creators of the Universe Shaped Earth", keywords: "marvel celestials, eternals lore" },
    { cat: "Movies", title: "10 Reasons Why 'The Avengers' (2012) Still Holds Up Today", keywords: "the avengers 2012 review, mcu history" },
    { cat: "Tech", title: "S.H.I.E.L.D. Tech: The Most Iconic Gadgets from the Helicarrier", keywords: "shield gadgets, nick fury tech" },
    { cat: "Villains", title: "Loki's Redemption: From Villain to God of Stories Breakdown", keywords: "loki character arc, god of stories" },
    { cat: "Origins", title: "Scarlet Witch vs. Agatha: The History of Chaos Magic", keywords: "wanda maximoff history, chaos magic" },
    { cat: "Lore", title: "The Illuminati: Who Really Controls the Marvel Universe?", keywords: "marvel illuminati, secret society marvel" },
    { cat: "Movies", title: "Spider-Man No Way Home: Every Cameo and Its Significance", keywords: "spider-man cameos, multiverse spider-man" },
    { cat: "Tech", title: "Pym Particles Explained: The Science of Shrinking in the MCU", keywords: "pym particles science, ant-man tech" },
    { cat: "Villains", title: "Ultron's Legacy: Why He's a Bigger Threat Than You Think", keywords: "ultron history, age of ultron review" },
    { cat: "Origins", title: "Hawkeye's Origin: The Man Who Never Misses a Shot", keywords: "hawkeye history, clint barton lore" },
    { cat: "Lore", title: "The X-Men in the MCU: How They Will Finally Be Introduced", keywords: "x-men mcu introduction, mutants in marvel" },
    { cat: "Movies", title: "Daredevil: Born Again - Everything We Know About the Return", keywords: "daredevil born again news, mcu daredevil" },
    { cat: "Tech", title: "The Infinity Stones: Origins, Powers, and Current Status", keywords: "infinity stones history, where are the stones" },
    { cat: "Villains", title: "Venom vs. Carnage: The History of Symbiotes in Marvel", keywords: "marvel symbiotes, venom lore" },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-6 underline decoration-red-700 decoration-8 underline-offset-8">
            The Content <span className="text-red-700">Universe</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Master-planned categories and 30 high-impact post ideas to dominate search results.
          </p>
        </div>

        {/* Categories Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b-2 border-slate-200 pb-4">
            <LayoutIcon className="text-red-700" size={28} />
            <h2 className="text-2xl font-black uppercase italic tracking-wide text-slate-900">6 Core Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-8 border-t-8 rounded-xl shadow-lg flex flex-col h-full bg-white transition-all ${cat.color.split(' ')[0]}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-slate-900">{cat.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {cat.subcategories.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-sm text-slate-600 font-medium group cursor-pointer hover:text-red-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-red-600"></div>
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SEO Post Ideas */}
        <section>
          <div className="flex items-center justify-between mb-10 border-b-2 border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <Target className="text-red-700" size={28} />
              <h2 className="text-2xl font-black uppercase italic tracking-wide text-slate-900">30 SEO-Optimized Post Ideas</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600">
              <Search size={14} /> Ready for Google Ranking
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest italic">#</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest italic">Category</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest italic">Target Headline (SEO Friendly)</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest italic hidden md:table-cell">Primary Keywords</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {postIdeas.map((post, idx) => (
                  <tr key={idx} className="hover:bg-red-50 transition-colors group">
                    <td className="px-6 py-4 text-xs font-bold text-slate-400 group-hover:text-red-600">{idx + 1}</td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md text-slate-600">
                        {post.cat}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800 text-sm md:text-base">{post.title}</td>
                    <td className="px-6 py-4 text-xs italic text-slate-500 hidden md:table-cell">{post.keywords}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
