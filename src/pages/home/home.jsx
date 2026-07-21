import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight, Users, Briefcase, BarChart, Target, Zap, Globe, MessageSquare, CheckCircle, Smartphone, Camera, Film, Palette } from 'lucide-react';
import Counter from '../../components/Counter';

gsap.registerPlugin(ScrollTrigger);

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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = React.memo(({ service, idx, cardsRef }) => {
  return (
    <div 
      ref={el => cardsRef.current[idx] = el}
      className="px-10 py-12 md:px-16 md:py-16 rounded-[32px] flex items-center gap-10 bg-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/5 flex-wrap"
      style={{ 
        position: 'sticky',
        top: `calc(120px + ${idx * 20}px)`,
        zIndex: idx + 1,
        transformOrigin: 'top center'
      }}
    >
      <div 
        className="p-8 rounded-3xl flex items-center justify-center min-w-[80px]" 
        style={{ background: service.color, color: 'white' }}
      >
        {service.icon}
      </div>
      <div className="flex-1 min-w-[250px]">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed text-lg max-w-[700px] mb-6">{service.desc}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {service.features.map((feature, fIdx) => (
            <span key={fIdx} className="bg-white/[0.03] border border-white/5 px-4 py-1.5 rounded-full text-sm text-white/90">
              ✔ {feature}
            </span>
          ))}
        </div>

        <Link to="/services" className="inline-flex items-center gap-2 text-white font-semibold text-lg transition-colors hover:text-[var(--accent-light)] group">
          Explore Service <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
});

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      cards.forEach((card, index) => {
        // Fading out/scaling down when next card comes up
        if (index < cards.length - 1) {
          gsap.fromTo(card,
            { scale: 1, opacity: 1 },
            {
              scale: 0.9,
              opacity: 0,
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top bottom-=100",
                end: "top top+=120",
                scrub: true,
              }
            }
          );
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ paddingBottom: '0' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundImage: 'url("/images/img_037.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        
        {/* Dark overlay to make text readable against the chart */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10, 5, 20, 0.75), rgba(10, 5, 20, 0.95))', zIndex: 0 }}></div>

        {/* Background glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at center, rgba(225, 48, 108, 0.25) 0%, rgba(0,0,0,0) 60%)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', maxWidth: '800px' }}
          >
            <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, marginTop: '16px' }}>
              Grow Your Business with <span className="text-gradient">Creative</span> <br/>Digital Marketing Solutions
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6, margin: '8px 0' }}>
              We help businesses grow through SEO, Google Ads, Meta Ads, Professional Shoots, Creative Editing, and Branding.
            </p>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn btn-glass" style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '16px 36px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                  Get Free Consultation
                </button>
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '40px' }}>
              {[
                'Digital Marketing',
                'Professional Shoots',
                'Creative Editing',
                'Branding Solutions'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: 'rgba(225, 48, 108, 0.2)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
                    <CheckCircle size={16} color="var(--accent-light)" />
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '120+', label: 'Global Clients' },
              { number: '$50M+', label: 'Revenue Generated' },
              { number: '98%', label: 'Client Retention' },
              { number: '35+', label: 'Team Experts' }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '8px' }}>
                  <Counter value={stat.number} />
                </h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. SERVICES SECTION */}
      <section className="container" style={{ padding: '120px 0', position: 'relative' }}>
        <FadeIn>
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '24px' }}>Our <span className="text-accent">Services</span></h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px auto' }}>We close the full cycle: from initial brand positioning to scaling through performance advertising.</p>
        </FadeIn>
        
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: '100px' }} ref={containerRef}>
          {[
            { 
              title: 'Marketing', 
              icon: <BarChart size={48} />, 
              desc: 'Comprehensive digital marketing strategies designed to scale your reach, drive high-intent traffic, and maximize your return on investment.', 
              features: ['Digital Marketing', 'SEO', 'Meta Ads', 'Google Ads', 'SMM', 'Personal Branding'],
              color: 'rgba(225, 48, 108, 0.1)' 
            },
            { 
              title: 'Shoots', 
              icon: <Camera size={48} />, 
              desc: 'Professional photography and videography to capture your brand\'s essence with stunning clarity and cinematic quality.', 
              features: ['DSLR', 'Product', 'Mobile', 'Drone', 'Podcast', 'Wedding'],
              color: 'rgba(250, 126, 30, 0.1)' 
            },
            { 
              title: 'Editing', 
              icon: <Film size={48} />, 
              desc: 'High-end post-production that turns raw footage into captivating stories, cinematic sequences, and thumb-stopping social media content.', 
              features: ['Video Editing', 'Reels', 'Vlog Editing', 'Wedding Editing', 'Photo Editing'],
              color: 'rgba(225, 48, 108, 0.1)' 
            },
            { 
              title: 'Design', 
              icon: <Palette size={48} />, 
              desc: 'Creative and impactful visual designs that establish a strong, memorable brand identity and communicate your message instantly.', 
              features: ['Logo Design', 'Poster Design', 'Flex Design', 'Graphic Design', 'Animation', 'Script Writing'],
              color: 'rgba(250, 126, 30, 0.1)' 
            }
          ].map((service, idx) => (
            <ServiceCard 
              key={idx} 
              service={service} 
              idx={idx} 
              cardsRef={cardsRef} 
            />
          ))}
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section style={{ padding: '120px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <FadeIn direction="left">
            <h2 className="heading-lg" style={{ marginBottom: '64px' }}>Industries We <span className="text-gradient">Dominate</span></h2>
          </FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['SaaS & Technology', 'E-Commerce', 'Real Estate', 'Healthcare', 'Fintech', 'Luxury Brands', 'Education', 'Hospitality'].map((industry, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="right">
                <div style={{ padding: '16px 32px', borderRadius: '100px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', color: 'white', fontSize: '1.1rem' }}>
                  {industry}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="container" style={{ padding: '120px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <FadeIn direction="left">
            <img src="/assets/why_different_marketing.png" alt="Marketing Strategy" style={{ width: '100%', borderRadius: '32px', filter: 'drop-shadow(0 0 40px rgba(225,48,108,0.2))' }} />
          </FadeIn>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <FadeIn direction="right">
              <h2 className="heading-lg">Why We Are <br/><span className="text-accent">Different</span></h2>
            </FadeIn>
            
            {[
              { title: 'Data-Driven Decisions', desc: 'We do not guess. Every strategy is backed by deep analytics and market research.' },
              { title: 'Transparent Reporting', desc: 'Full access to your dashboards 24/7. You always know where your money goes.' },
              { title: 'Award-Winning Team', desc: 'Our experts have scaled startups to unicorns and modernized enterprise brands.' }
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="right">
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '4px' }}><CheckCircle size={24} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '8px' }}>{point.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{point.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section style={{ padding: '120px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <FadeIn>
            <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '80px' }}>Our <span className="text-gradient">Process</span></h2>
          </FadeIn>
          
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* The vertical glowing line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '11px', width: '2px', background: 'linear-gradient(to bottom, var(--accent), rgba(250, 126, 30, 0.1))', zIndex: 0 }}></div>

            {[
              { step: '01', title: 'Discovery & Research', desc: 'We start by diving deep into your brand, your audience, and the competitive landscape to uncover hidden opportunities.', icon: '🔍' },
              { step: '02', title: 'Strategic Planning', desc: 'Crafting a customized, data-backed roadmap tailored to your specific goals and market positioning.', icon: '🎯' },
              { step: '03', title: 'Creative Execution', desc: 'Our team brings the strategy to life with stunning visuals, precise code, and high-converting copy.', icon: '✨' },
              { step: '04', title: 'Optimization & Growth', desc: 'We do not just launch and leave. We continuously test, iterate, and optimize to scale your results exponentially.', icon: '📈' }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="left">
                <div style={{ position: 'relative', marginBottom: i === 3 ? 0 : '60px' }}>
                  {/* The dot */}
                  <div style={{ position: 'absolute', top: '30px', left: '-40px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--bg-color)', border: '4px solid var(--accent)', zIndex: 1, boxShadow: '0 0 20px var(--accent)' }}></div>
                  
                  <div className="glass" style={{ padding: '40px', borderRadius: '24px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s, border 0.3s', cursor: 'pointer' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.border = '1px solid var(--accent)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '2rem' }}>{step.icon}</span>
                      <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 600 }}>{step.title}</h3>
                      <span style={{ marginLeft: 'auto', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.05)' }}>{step.step}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT REVIEWS - BENTO GRID MODEL */}
      <section className="container" style={{ padding: '120px 0' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px' }}>
            <h2 className="heading-lg" style={{ margin: 0 }}>What They <span className="text-accent">Say</span></h2>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(225,48,108,0.5), transparent)' }}></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Review 1: Large Wide Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 glass rounded-[32px] p-10 md:p-14 relative overflow-hidden bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.05] transition-colors group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
            
            <p className="text-white/90 text-2xl md:text-3xl font-light leading-relaxed mb-12 relative z-10">
              "Fly Digital completely transformed our online presence. Our conversion rates doubled in just 3 months. Absolutely incredible team."
            </p>
            
            <div className="flex items-center gap-4 relative z-10 mt-auto pt-8 border-t border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#1a1a24]"></div>
              <div>
                <h4 className="text-white font-bold text-lg tracking-wide">Sarah Jenkins</h4>
                <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mt-1">CEO, TechFlow</p>
              </div>
            </div>
          </motion.div>

          {/* Review 2: Tall/Square Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 glass rounded-[32px] p-10 relative overflow-hidden bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 border border-[var(--accent)]/20 transition-colors flex flex-col justify-between"
          >
            <div style={{ fontSize: '120px', lineHeight: 0.5, fontFamily: 'serif', color: 'var(--accent)', opacity: 0.2, marginBottom: '20px' }}>"</div>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-12 italic relative z-10 flex-1">
              "The most professional agency I've ever worked with. Their attention to design detail and data analytics is unmatched."
            </p>
            
            <div className="relative z-10 mt-auto">
              <h4 className="text-white font-bold text-lg tracking-wide">Mark D'Souza</h4>
              <p className="text-white/50 text-sm font-medium tracking-widest uppercase mt-1">Founder, Zenith</p>
            </div>
          </motion.div>

          {/* Review 3: Full Width Bottom Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-12 glass rounded-[32px] p-10 md:p-12 relative overflow-hidden bg-gradient-to-r from-[#0a0510] to-[#120a1a] border border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="flex-1">
              <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed italic">
                "They don't just execute, they partner with you. The brand strategy they provided changed the entire trajectory of our startup."
              </p>
            </div>
            
            <div className="md:border-l border-white/10 md:pl-10 shrink-0 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--grad-1)] to-[var(--grad-2)] mx-auto md:mx-0 mb-4 shadow-[0_0_20px_rgba(180,41,249,0.3)]"></div>
              <h4 className="text-white font-bold text-xl tracking-wide">Elena Rostova</h4>
              <p className="text-[var(--grad-2)] text-sm font-semibold tracking-widest uppercase mt-1">Marketing VP, Aura</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section style={{ padding: '120px 0 160px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(180,41,249,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
        
        <motion.img 
          src="/assets/marketing_megaphone_1784276963059.png" 
          alt="Megaphone"
          style={{ position: 'absolute', top: '10%', left: '10%', width: '250px', opacity: 0.6, zIndex: 0 }}
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn direction="up">
            <h2 style={{ fontSize: '4rem', fontWeight: 700, color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
              Ready to <span className="text-gradient">scale</span> <br/>your business?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px auto' }}>
              Let's discuss your project and see how we can help you achieve your goals faster.
            </p>
            <a href="https://wa.me/917695883647" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ background: 'var(--accent)', color: 'white', padding: '16px 40px', fontSize: '1.1rem', borderRadius: '100px', border: 'none', cursor: 'pointer', transition: 'transform 0.3s', display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              Let's Talk <ArrowRight size={20} />
            </a>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Home;
