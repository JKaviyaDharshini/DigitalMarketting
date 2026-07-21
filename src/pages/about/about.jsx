import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/MagneticButton';

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

const SectionHeader = ({ badge, title, subtitle }) => (
  <FadeIn>
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse"></div>
        <span className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase">
          {badge}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight font-heading leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </FadeIn>
);

const About = () => {
  return (
    <div className="pb-24 pt-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(225, 48, 108, 0.1) 0%, transparent 60%)' }}></div>

      <div className="container relative z-10">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tight font-heading leading-tight">
              Built for brands that <br/>
              <span className="text-gradient">need it all done right</span>
            </h1>
            
            <div className="glass p-10 md:p-14 rounded-[32px] border border-white/10 bg-black/40 shadow-2xl flex flex-col gap-6 text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              <p className="text-white/80 text-xl font-light leading-relaxed relative z-10">
                <span className="text-white font-semibold">Frame & Forge</span> started with a simple frustration: businesses were paying three vendors for one story — a photographer who never saw the ad plan, an editor working off notes, and a marketer distributing footage they didn't shoot.
              </p>
              <p className="text-white/80 text-xl font-light leading-relaxed relative z-10">
                We closed that gap. Our crews shoot with the final platform already in mind, our editors cut for attention spans, and our marketing team knows exactly which frame will stop the scroll — because they were on set for it.
              </p>
              <p className="text-white/80 text-xl font-light leading-relaxed relative z-10">
                Today we work across real estate, jewelry, hospitality, education, construction, and retail showrooms — industries where trust is built one clear photo and one honest ad at a time.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center py-12">
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 font-heading tracking-tighter">10+</div>
                <div className="text-[var(--accent-light)] text-sm font-bold tracking-[0.2em] uppercase">Industries Served</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 font-heading tracking-tighter">3-IN-1</div>
                <div className="text-[var(--accent-light)] text-sm font-bold tracking-[0.2em] uppercase">Shoot • Edit • Market</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 font-heading tracking-tighter">360&deg;</div>
                <div className="text-[var(--accent-light)] text-sm font-bold tracking-[0.2em] uppercase">Full Media Coverage</div>
              </div>
            </div>
          </FadeIn>


        </div>

        {/* The Crew */}
        <div className="mb-32">
          <SectionHeader 
            badge="The Crew" 
            title="Who's Behind The Camera" 
            subtitle="Small team, every role covered — no handing your project between strangers." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Lead / Founder', title: 'Director of Photography', desc: 'Runs every shoot — DSLR, drone, and mobile — and signs off on every frame before it leaves the studio.' },
              { role: 'Post-Production', title: 'Lead Editor', desc: 'Cuts reels, vlogs, and wedding films — the one deciding what stays and what gets trimmed.' },
              { role: 'Growth', title: 'Marketing Strategist', desc: 'Plans the SEO, ad, and social rollout — makes sure the shoot actually reaches the right people.' }
            ].map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass p-10 rounded-[24px] h-full border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <span className="text-[#F7B045] font-mono text-sm tracking-wider uppercase mb-3 block group-hover:text-[var(--accent)] transition-colors">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase font-heading tracking-tight">
                    {member.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {member.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Client Words */}
        <div className="mb-32">
          <SectionHeader 
            badge="Client Words" 
            title="What it's like to work with us" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Real Estate', quote: '"Our listing photos finally look like the property we\'re actually selling."', author: 'Property Developer, Madurai' },
              { tag: 'Showroom', quote: '"They shot, edited, and ran the ads. I didn\'t have to manage three different people."', author: 'Bike Showroom Owner' },
              { tag: 'Hospital', quote: '"Our social page finally feels trustworthy instead of just clinical."', author: 'Clinic Administrator' }
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass p-10 rounded-[24px] h-full border border-white/[0.05] bg-white/[0.02] hover:border-[var(--accent)]/30 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-lg">
                  <div>
                    <span className="text-[var(--grad-2)] font-mono text-xs tracking-widest uppercase mb-6 block">
                      {testimonial.tag}
                    </span>
                    <p className="text-white/90 text-xl font-light italic leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>
                  </div>
                  <p className="text-white/50 font-mono text-sm tracking-widest">
                    — {testimonial.author}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>


        {/* Footer CTA */}
        <FadeIn>
          <div className="glass rounded-[40px] p-12 md:p-16 lg:p-20 border border-white/10 relative overflow-hidden bg-[#0a0510] shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Background Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(225,48,108,0.05)] to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase font-heading tracking-tight">Ready to shoot something?</h2>
              <p className="text-white/60 text-lg md:text-xl font-light">
                Tell us what you're working on and we'll put a plan and a quote together.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary px-12 py-6 text-lg font-bold tracking-[0.1em] shadow-[0_10px_30px_rgba(225,48,108,0.3)]">
                  TALK TO US
                </Link>
              </MagneticButton>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default About;
