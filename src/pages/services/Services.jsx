import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industriesData } from '../../data/industriesData';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

const servicesList = [
  {
    category: "GROWTH",
    title: "DIGITAL MARKETING",
    items: ["SEO", "Meta Ads", "Google Ads", "Online Promotion"],
    link: "/services/digital-marketing",
    image: "/images/img_040.webp"
  },
  {
    category: "PRODUCTION",
    title: "SHOOTS",
    items: ["DSLR Shoot", "Product Shoot", "Drone Shoot", "Podcast", "Wedding"],
    link: "/services/shoots",
    image: "/images/img_041.webp"
  },
  {
    category: "DISTRIBUTION",
    title: "SOCIAL MEDIA",
    items: ["Email Marketing", "WhatsApp", "LinkedIn", "Content Creation"],
    link: "/services/social-media",
    image: "/images/img_042.webp"
  },
  {
    category: "POST-PRODUCTION",
    title: "EDITING",
    items: ["Reels Editing", "Vlog Editing", "Wedding Editing", "Photo Editing"],
    link: "/services/editing",
    image: "/images/img_039.webp"
  },
  {
    category: "IDENTITY",
    title: "DESIGN",
    items: ["Logo Design", "Poster Design", "Flex Design", "Graphics Design"],
    link: "/services/design",
    image: "/images/img_031.webp"
  },
  {
    category: "VOICE",
    title: "BRANDING",
    items: ["Personal Branding", "Script Writing", "Animation"],
    link: "/services/branding",
    image: "/images/img_038.webp"
  }
];

const industries = Object.keys(industriesData).map(key => ({
  id: key,
  ...industriesData[key],
  link: `/industries/${key}`
}));

const ServiceCard = React.memo(({ svc, idx }) => {
  const isEven = idx % 2 === 0;
  
  return (
    <FadeIn delay={0.1} direction={isEven ? 'left' : 'right'}>
      <div 
        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 w-full py-10 px-6 md:px-10 rounded-[32px] bg-[#0a0510] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] mb-12 max-w-6xl mx-auto`}
      >
        {/* Image Side */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[350px] rounded-[24px] overflow-hidden relative shadow-[0_15px_30px_rgba(0,0,0,0.4)] group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: `url(${svc.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510]/80 via-transparent to-transparent"></div>
        </div>
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[var(--accent-light)] text-xs font-bold tracking-[0.2em] uppercase mb-4 w-max">
            {svc.category}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight leading-[1.1] mb-6">
            {svc.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {svc.items.map((item, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors">
                {item}
              </span>
            ))}
          </div>
          
          {svc.link && (
            <Link to={svc.link} className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-[var(--accent-light)] transition-colors group w-max">
              Explore Service <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          )}
        </div>
      </div>
    </FadeIn>
  );
});

const Services = () => {
  return (
    <div className="pb-24 pt-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(225, 48, 108, 0.1) 0%, transparent 60%)' }}></div>
      
      <div className="container relative z-10">
        
        {/* Header Section */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse"></div>
            <span className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight font-heading leading-none">
            Everything from <br/>
            <span className="text-gradient">Lens to Launch</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
            Pick a single service or the full pipeline — every list below can stand alone or plug into the others.
          </p>
        </FadeIn>

        {/* The Full Package Banner */}
        <FadeIn delay={0.1}>
          <div className="glass w-full rounded-[32px] p-8 md:p-14 mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 bg-black/50 border border-white/10 hover:border-white/20 transition-colors shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(225,48,108,0.05)] to-transparent pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase font-heading tracking-tight">The Full Package</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Shoot, edit, and marketing handled together — one brief, one crew, one campaign that actually looks like what you sell.
              </p>
            </div>
            
            <div className="relative z-10">
              <Link to="/contact" className="flex items-center gap-3 text-[var(--accent-light)] font-bold tracking-[0.2em] text-sm md:text-base uppercase hover:text-white transition-colors">
                Shoot <ArrowRight size={16}/> Edit <ArrowRight size={16}/> Market
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Alternate Layout Box Cards (No Layer/Stack) */}
        <div className="relative flex flex-col mb-32">
          {servicesList.map((svc, idx) => (
            <ServiceCard 
              key={idx} 
              svc={svc} 
              idx={idx} 
            />
          ))}
        </div>

        {/* Industries We Serve Section */}
        <FadeIn>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[var(--grad-2)] shadow-[0_0_10px_var(--grad-2)] animate-pulse"></div>
              <span className="text-[var(--grad-2)] font-bold text-sm tracking-widest uppercase">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-heading leading-tight">
              Built for <span className="text-gradient">your business</span>,<br/>not just any business
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32">
          {industries.map((svc, idx) => {
            const CardWrapper = svc.link ? Link : 'div';
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="h-[400px]">
                <CardWrapper 
                  to={svc.link}
                  className={`relative block w-full h-full rounded-[32px] overflow-hidden group transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${svc.link ? 'cursor-pointer hover:shadow-[0_20px_40px_rgba(225,48,108,0.3)] hover:-translate-y-2' : ''}`}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${svc.image})` }}
                  ></div>
                  
                  {/* Dark Overlays for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-[#0a0510]/80 to-[#0a0510]/30 transition-opacity duration-500 group-hover:opacity-90"></div>
                  
                  {/* Hover Accent Glow */}
                  <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-500"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    
                    <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[var(--accent-light)] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                        {svc.category || "INDUSTRY"}
                      </span>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-heading tracking-tight leading-[1.1] mb-4 drop-shadow-lg">
                        {svc.title}
                      </h3>
                      
                      {/* Sub-services list (fades in on hover) */}
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {(svc.items || (svc.process ? svc.process.map(p => p.title) : [])).slice(0, 3).map((item, i) => (
                          <span key={i} className="px-2 py-1 rounded-md bg-black/50 border border-white/10 text-white/90 text-xs font-medium tracking-wide">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="glass rounded-[40px] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden bg-gradient-to-br from-[rgba(225,48,108,0.1)] to-[rgba(10,5,20,0.8)] shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase font-heading tracking-tight">Ready to start?</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-xl font-light">
              Let's craft your custom pipeline and dominate your industry.
            </p>
            <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg shadow-[0_10px_30px_rgba(225,48,108,0.3)] inline-block">
              Get a Quote <ArrowRight className="ml-2 inline-block" size={24}/>
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default Services;
