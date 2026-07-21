import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="container" style={{ padding: '150px 0', minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading-lg" style={{ marginBottom: '24px' }}>Terms & Conditions</h1>
        <div className="glass" style={{ padding: '40px', borderRadius: '24px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <h3 style={{ color: 'white', marginBottom: '16px' }}>1. Introduction</h3>
          <p style={{ marginBottom: '24px' }}>Welcome to FlyDigital Marketing. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h3 style={{ color: 'white', marginBottom: '16px' }}>2. Services</h3>
          <p style={{ marginBottom: '24px' }}>We provide digital marketing, web development, and design services. The specific terms of any project will be outlined in a separate statement of work or agreement.</p>
          
          <h3 style={{ color: 'white', marginBottom: '16px' }}>3. Intellectual Property</h3>
          <p>All content, designs, and code produced by FlyDigital Marketing remain our intellectual property until full payment is received, at which point ownership is transferred as outlined in our service agreements.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
