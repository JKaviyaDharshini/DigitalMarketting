import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { industriesData } from '../../data/industriesData';

gsap.registerPlugin(ScrollTrigger);

const IndustryLanding = () => {
  const { industryId } = useParams();
  const data = industriesData[industryId];
  const heroRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (data && heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.hero-text', 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
        );
        
        gsap.to('.hero-bg', {
          y: '30%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }, heroRef.current);
      return () => ctx.revert();
    }
  }, [data, industryId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06030a] text-white flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <p className="mb-4">Debug ID: {industryId}</p>
          <Link to="/services" className="text-[var(--accent)] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#06030a] min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[80vh] md:h-screen flex items-center overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06030a] via-[#06030a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06030a]/80 via-transparent to-transparent" />
        
        <div className="container relative z-10 pt-20">
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 hero-text group bg-transparent border-none cursor-pointer">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hero-text">
              <div className="w-2 h-2 rounded-full bg-[var(--grad-2)] shadow-[0_0_8px_var(--grad-2)]"></div>
              <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">{data.tagline}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] font-heading mb-6 hero-text">
              {data.title}
            </h1>
            <p className="text-white/70 text-lg md:text-2xl font-light max-w-2xl leading-relaxed hero-text">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center py-4 text-center">
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-2 font-heading tracking-tighter">
                  {stat.value}
                  <span className="text-[var(--accent)]">{stat.suffix}</span>
                </h3>
                <p className="text-white/50 text-sm tracking-widest uppercase font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-Categories Section (For Showrooms) */}
      {data.subCategories && (
        <div className="py-20 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Our Specialized Showroom Services</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Tailored strategies for different showroom types.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.subCategories.map((sub, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative rounded-3xl overflow-hidden h-[500px]"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${sub.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">{sub.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">{sub.desc}</p>
                    
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--accent-light)] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <div ref={processRef} className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Our Process</h2>
            <p className="text-white/50 max-w-2xl mx-auto">How we deliver exceptional results for {data.title}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all hover:border-white/10"
              >
                <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-white/10 transition-colors font-heading tracking-tighter">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[var(--accent)]" /> {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container pb-32">
        <div className="p-12 md:p-20 rounded-3xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--grad-2)]/20 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Ready to scale?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">Let's discuss how our marketing can transform your {data.title.toLowerCase()} business.</p>
            <Link to="/contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-bold tracking-wider hover:scale-105 transition-transform uppercase text-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryLanding;
