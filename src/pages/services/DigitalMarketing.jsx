import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Search, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
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
      
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--grad-1)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-[var(--accent-light)] group-hover:scale-110 group-hover:bg-[var(--accent)]/10 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase font-heading tracking-tight">
          {title}
        </h3>
        
        <p className="text-white/60 text-lg leading-relaxed mb-8 flex-1 font-light">
          {desc}
        </p>
        
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

const DigitalMarketing = () => {
  return (
    <div className="pb-24 pt-32 relative min-h-screen bg-[#06030a]">
      
      {/* Cinematic Background Image */}
      <div className="absolute top-0 inset-x-0 h-[700px] md:h-[800px] z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" 
          style={{ backgroundImage: 'url(/assets/digital_marketing_bg.png)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06030a]/40 via-[#06030a]/20 to-[#06030a]"></div>
      </div>

      <div className="container relative z-10">
        
        {/* Minimalist Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-32 pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[var(--grad-2)] shadow-[0_0_8px_var(--grad-2)]"></div>
              <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">Growth Pipeline</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter leading-[0.9] font-heading mb-8">
              DIGITAL <br/> MARKETING
            </h1>
            
            <p className="text-white/60 text-xl md:text-2xl font-light max-w-2xl mx-auto tracking-wide leading-relaxed">
              Data-driven acquisition engines designed to scale your reach and maximize ROI. No noise, just performance.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
          
          <BentoCard 
            delay={0.1}
            title="Search Engine Optimization"
            desc="We don't just chase keywords; we dominate search intent. By optimizing your site architecture and producing high-authority content, we ensure your brand captures high-intent traffic passively."
            icon={<Search size={20} strokeWidth={2} />}
            features={["Technical SEO Audits", "On-Page & Local SEO", "Authority Link Building"]}
            linkTo="/services/digital-marketing/seo"
          />

          <BentoCard 
            delay={0.2}
            title="Meta Ads"
            desc="Leverage the immense behavioral data of Facebook and Instagram. We craft thumb-stopping creatives paired with ruthless split-testing to find the exact audience permutations."
            icon={<Target size={20} strokeWidth={2} />}
            features={["Custom Audience Creation", "A/B Creative Testing", "Dynamic Retargeting Funnels"]}
            linkTo="/services/digital-marketing/meta-ads"
          />

          <BentoCard 
            delay={0.3}
            title="Google Ads"
            desc="Capture people exactly when they are searching for a solution. We build highly segmented search campaigns, ensuring you don't waste budget on irrelevant clicks."
            icon={<BarChart3 size={20} strokeWidth={2} />}
            features={["Search & Display Campaigns", "Negative Keyword Sculpting", "Conversion Rate Tracking"]}
            linkTo="/services/digital-marketing/google-ads"
          />

          <BentoCard 
            delay={0.4}
            title="Online Promotion"
            desc="Beyond traditional ads, we engineer holistic online promotions. From influencer partnerships to viral organic growth strategies, we ensure your brand maintains a massive footprint."
            icon={<Megaphone size={20} strokeWidth={2} />}
            features={["Influencer Marketing", "Viral Growth Loops", "Community Building"]}
            linkTo="/services/digital-marketing/online-promotion"
          />

        </div>

        {/* Footer CTA */}
        <FadeIn>
          <div className="glass rounded-[40px] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden bg-white/[0.01]">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase font-heading tracking-tight">
              Ready to scale?
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto text-xl font-light">
              Let's build a custom acquisition pipeline for your brand.
            </p>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg font-bold tracking-widest uppercase">
                Start Your Campaign <ArrowRight className="ml-2 inline-block" size={20}/>
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default DigitalMarketing;
