import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container py-[150px] min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading-lg mb-6">
          Let's <span className="text-gradient">build</span> something extraordinary
        </h1>
        <p className="text-[var(--text-secondary)] text-xl mb-12">
          Leave a request right now and get a free 30-minute consultation with our lead strategist.
        </p>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <p className="text-[var(--text-secondary)]">hello@flydigital.agency</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Phone</h4>
            <p className="text-[var(--text-secondary)]">+91 7695883647</p>
          </div>
          <div className="mt-5">
            <h4 className="text-white font-semibold mb-2">Address</h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">vadaku Ratha veethi sankarankovil,<br/>Tenkasi, Tamil Nadu 627756</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass p-8 md:p-12 rounded-[32px]"
      >
        <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
          <div>
            <label className="block mb-2 text-[var(--text-secondary)] text-sm">Name</label>
            <input type="text" className="w-full bg-white/[0.03] border border-[var(--glass-border)] px-6 py-4 rounded-2xl text-white text-base outline-none transition-colors focus:border-[var(--accent)]" />
          </div>
          <div>
            <label className="block mb-2 text-[var(--text-secondary)] text-sm">Email</label>
            <input type="email" className="w-full bg-white/[0.03] border border-[var(--glass-border)] px-6 py-4 rounded-2xl text-white text-base outline-none transition-colors focus:border-[var(--accent)]" />
          </div>
          <div>
            <label className="block mb-2 text-[var(--text-secondary)] text-sm">Message</label>
            <textarea rows={4} className="w-full bg-white/[0.03] border border-[var(--glass-border)] px-6 py-4 rounded-2xl text-white text-base outline-none transition-colors focus:border-[var(--accent)] resize-none" />
          </div>
          
          <button type="submit" className="btn btn-primary w-full p-4 text-[1.1rem] gap-2 mt-2">
            <Send size={20} />
            Send Request
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
