import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, author, category, slug }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-b-4 border-slate-100 hover:border-red-600 group">
      <Link to={slug} className="block aspect-video overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-3 group-hover:text-red-700 transition-colors">
          <Link to={slug}>{title}</Link>
        </h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1 uppercase"><Calendar size={12} /> {date}</span>
            <span className="flex items-center gap-1 uppercase"><User size={12} /> {author}</span>
          </div>
          <Link to={slug} className="text-red-700 hover:text-red-800 flex items-center gap-1 text-xs font-bold uppercase">
            Read <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};
