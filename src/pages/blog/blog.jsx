import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const Blog = ({ blogs = [] }) => {
  // Utility to extract text from HTML content for the preview description
  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  return (
    <div className="pb-24 pt-32 relative min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(225, 48, 108, 0.1) 0%, transparent 60%)' }}></div>
      
      <div className="container relative z-10">
        
        {/* Header Section */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse"></div>
            <span className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight font-heading leading-none">
            NOTES FROM <br/>
            <span className="text-gradient">THE FIELD</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-16 font-light leading-relaxed">
            Short, practical reads on shooting, editing, and marketing — for business owners, not filmmakers.
          </p>
        </FadeIn>

        {/* 3-Column Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogs.map((post, idx) => (
            <FadeIn key={post.id || idx} delay={idx * 0.1}>
              <div className="glass rounded-[24px] overflow-hidden flex flex-col h-full border border-white/5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group bg-white/[0.01]">
                
                {/* Image Section */}
                <div className="h-48 bg-[#0a0510] relative overflow-hidden group-hover:bg-[#0a0510]/80 transition-colors">
                  {post.image && (
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06030a]/80 to-transparent pointer-events-none"></div>
                  <div className="absolute top-6 left-6">
                    <div 
                      className="border text-xs font-bold px-3 py-1.5 uppercase tracking-[0.2em] inline-block bg-black/50 backdrop-blur-md"
                      style={{ borderColor: post.badgeColor || '#E1306C', color: post.badgeColor || '#E1306C' }}
                    >
                      {post.badge || 'BLOG'}
                    </div>
                  </div>
                </div>
                
                {/* Hazard Stripe Divider */}
                <div 
                  className="h-3 w-full" 
                  style={{ background: `repeating-linear-gradient(45deg, ${post.badgeColor}, ${post.badgeColor} 15px, #0a0510 15px, #0a0510 30px)` }}
                ></div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 bg-white/[0.02]">
                  <div className="text-white/50 font-mono text-[0.8rem] tracking-wider mb-4 uppercase">
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-snug font-heading group-hover:text-[var(--accent-light)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-[1rem] leading-relaxed mb-8 flex-1 font-light line-clamp-3">
                    {stripHtml(post.content)}
                  </p>
                  <a href="#" className="text-[var(--accent)] text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors flex items-center gap-2 w-max">
                    READ MORE 
                    <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
