import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#06030a]">
      <div className="w-12 h-12 border-4 border-white/10 border-t-[var(--accent)] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
