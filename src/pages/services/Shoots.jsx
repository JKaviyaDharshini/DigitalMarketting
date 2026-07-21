import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Video, Smartphone, ArrowRight, Mic, Plane } from 'lucide-react';
import MagneticButton from '../../components/MagneticButton';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const BentoCard = ({ title, desc, icon, features, delay, linkTo }) => (
  <FadeIn delay={delay}>
    <Link to={linkTo} className="glass p-10 md:p-12 rounded-[32px] h-full border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex flex-col group relative overflow-hidden block">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--grad-1)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-[var(--accent-light)] group-hover:scale-110 group-hover:bg-[var(--accent)]/10 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase font-heading tracking-tight">{title}</h3>
        <p className="text-white/60 text-lg leading-relaxed mb-8 flex-1 font-light">{desc}</p>
        <ul className="flex flex-col gap-3 mt-auto pt-8 border-t border-white/5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-white/80 text-[0.95rem] font-medium">
              <div className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-50"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  </FadeIn>
);

const Shoots = () => {
  return (
    <div className="pb-24 pt-32 relative min-h-screen bg-[#06030a]">
      <div className="absolute top-0 inset-x-0 h-[700px] md:h-[800px] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{ backgroundImage: 'url(/images/img_041.webp)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06030a]/40 via-[#06030a]/20 to-[#06030a]"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 pt-16">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[var(--grad-2)] shadow-[0_0_8px_var(--grad-2)]"></div>
              <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">Visual Production</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter leading-[0.9] font-heading mb-8">PROFESSIONAL<br/>SHOOTS</h1>
            <p className="text-white/60 text-xl md:text-2xl font-light max-w-2xl mx-auto tracking-wide leading-relaxed">High-end cinematography and photography designed to capture your brand's essence with uncompromising clarity.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
          <BentoCard 
            delay={0.1}
            title="Commercial Photography"
            desc="Stunning product and lifestyle photography that elevates your brand perception and drives conversions."
            icon={<Camera size={20} strokeWidth={2} />}
            features={["Product Shoots", "Lifestyle Photography", "Corporate Headshots"]}
            linkTo="/services/shoots/commercial-photography"
          />
          <BentoCard 
            delay={0.2} 
            title="Cinematic Video" 
            desc="High-end video production utilizing cinema cameras to tell your brand story with breathtaking visual fidelity." 
            icon={<Video size={20} strokeWidth={2} />} 
            features={["Brand Documentaries", "Commercials", "Event Coverage"]} 
            linkTo="/services/shoots/cinematic-video"
          />
          <BentoCard 
            delay={0.3}
            title="Vertical Content"
            desc="Optimized mobile-first shooting specifically framed and paced for Instagram Reels, TikTok, and YouTube Shorts."
            icon={<Smartphone size={20} strokeWidth={2} />}
            features={["Reels & TikToks", "UGC Style Content", "Short-form Campaigns"]}
            linkTo="/services/shoots/vertical-content"
          />
          <BentoCard 
            delay={0.4} 
            title="Specialized Production" 
            desc="From high-altitude drone footage to studio podcast setups, we have the gear and expertise for complex shoots." 
            icon={<Plane size={20} strokeWidth={2} />} 
            features={["4K Drone Videography", "Multi-Cam Podcast Sets", "Live Streaming"]} 
            linkTo="/services/shoots/specialized-production"
          />
        </div>
        <FadeIn>
          <div className="glass rounded-[40px] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden bg-white/[0.01]">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase font-heading tracking-tight">Ready to roll?</h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto text-xl font-light">Book a shoot and let's bring your vision into focus.</p>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg font-bold tracking-widest uppercase">Book A Shoot <ArrowRight className="ml-2 inline-block" size={20}/></Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Shoots;
