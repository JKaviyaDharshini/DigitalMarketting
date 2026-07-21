import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="container" style={{ padding: '150px 0', minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading-lg" style={{ marginBottom: '24px' }}>Privacy Policy</h1>
        <div className="glass" style={{ padding: '40px', borderRadius: '24px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <h3 style={{ color: 'white', marginBottom: '16px' }}>1. Information We Collect</h3>
          <p style={{ marginBottom: '24px' }}>We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email.</p>
          
          <h3 style={{ color: 'white', marginBottom: '16px' }}>2. How We Use Your Information</h3>
          <p style={{ marginBottom: '24px' }}>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about projects and offers.</p>
          
          <h3 style={{ color: 'white', marginBottom: '16px' }}>3. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect the personal information we collect and process about you.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
