import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Brand Positioning', desc: 'Finding your unique voice and place in the market.' },
    { title: 'UI/UX Design', desc: 'Crafting intuitive, premium user experiences.' },
    { title: 'Web Development', desc: 'Building fast, scalable, and secure applications.' },
    { title: 'Performance Marketing', desc: 'Data-driven campaigns that maximize ROI.' },
    { title: 'Content Strategy', desc: 'Engaging narratives that resonate with your audience.' },
    { title: 'SEO Optimization', desc: 'Climbing the ranks and dominating search results.' },
  ];

  return (
    <div className="container" style={{ padding: '150px 0', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading-lg" style={{ marginBottom: '24px' }}>
          Our <span className="text-accent">Services</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '64px' }}>
          We offer a full spectrum of digital marketing services, working as an extension of your team.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, background: 'rgba(255,255,255,0.06)' }}
              style={{ padding: '32px', borderRadius: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
            >
              <CheckCircle2 color="var(--accent)" size={24} style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
