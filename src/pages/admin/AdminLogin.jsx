import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Key, CheckSquare, Eye, EyeOff, ArrowLeft, BarChart3, TrendingUp, Target } from 'lucide-react';

const AdminLogin = ({ setIsAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // Forgot Password State
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!rememberMe) {
      setError('You must check "Remember me" to proceed.');
      return;
    }

    if (email === 'admin@frameforge.com' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid email or password. Try admin@frameforge.com / admin123');
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setError('');
    setResetSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 font-sans bg-[#030106] relative overflow-hidden">
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #17121d inset !important;
            -webkit-text-fill-color: white !important;
            transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      
      {/* Full Screen Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" 
        style={{ backgroundImage: 'url(/assets/digital_marketing_admin_bg.png)' }}
      ></div>
      
      {/* Vignette / Radial Gradient to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#030106_80%)] pointer-events-none"></div>
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Centered Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        
        {/* Left Side: Branding & Info */}
        <div className="md:w-5/12 p-10 md:p-14 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
          
          {/* Top Logo/Badge */}
          <div>
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse"></div>
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.25em] uppercase">Digital Command Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white leading-tight mb-6">
              Marketing <br />
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Intelligence</span>
            </h1>
            
            <p className="text-white/50 text-sm leading-relaxed font-light tracking-wide">
              Access your real-time analytics, scale your ad campaigns, and drive exponential growth from a single, unified dashboard.
            </p>
          </div>

          {/* Bottom Stats Grid */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <BarChart3 size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-white font-medium tracking-wide">Real-time Analytics</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Live Data Streams</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <TrendingUp size={18} className="text-purple-400" />
              </div>
              <div>
                <div className="text-white font-medium tracking-wide">Campaign Scaling</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Automated Optimization</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Target size={18} className="text-pink-400" />
              </div>
              <div>
                <div className="text-white font-medium tracking-wide">Audience Targeting</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Precision Reach</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-[#06030a]/50">
          
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-3xl font-light text-white mb-2 tracking-widest uppercase">
              {isForgotPassword ? 'Reset' : 'Sign In'}
            </h2>
            <p className="text-white/40 text-sm font-light tracking-wide mb-10">
              {isForgotPassword 
                ? 'Enter your email to receive recovery instructions.' 
                : 'Authenticate to access your workspace.'}
            </p>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide"
              >
                {error}
              </motion.div>
            )}
            
            {resetSent && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide"
              >
                ✅ Recovery link sent to {email}
              </motion.div>
            )}

            {!isForgotPassword ? (
              /* LOGIN FORM */
              <form onSubmit={handleLogin} className="space-y-6">
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold pl-1">Email Address</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      placeholder="admin@frameforge.com"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 font-light placeholder:text-white/20 transition-all text-sm tracking-wide"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold pl-1">Password</label>
                  <div className="relative group">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(''); }}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 font-light placeholder:text-white/20 transition-all text-sm tracking-widest"
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between pt-2">
                  <label 
                    className="flex items-center gap-3 cursor-pointer text-white/50 text-xs font-light tracking-wide group hover:text-white transition-colors select-none"
                    onClick={() => { setRememberMe(!rememberMe); setError(''); }}
                  >
                    <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${rememberMe ? 'border-blue-500 bg-blue-500/20' : 'border-white/20 bg-transparent group-hover:border-blue-500/50'}`}>
                      <CheckSquare size={12} className={`text-blue-400 transition-opacity ${rememberMe ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    Remember me
                  </label>
                  <button 
                    type="button"
                    onClick={() => { setIsForgotPassword(true); setError(''); setResetSent(false); }}
                    className="text-white/50 text-xs font-light tracking-wide hover:text-blue-400 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-white text-black rounded-2xl text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Authenticate
                  </button>
                </div>
              </form>
            ) : (
              /* FORGOT PASSWORD FORM */
              <form onSubmit={handleResetPassword} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold pl-1">Email Address</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      placeholder="admin@frameforge.com"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 font-light placeholder:text-white/20 transition-all text-sm tracking-wide"
                    />
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-white text-black rounded-2xl text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Recovery Link
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setIsForgotPassword(false)}
                    className="w-full py-4 bg-transparent border border-white/10 text-white/70 rounded-2xl text-xs font-medium tracking-[0.1em] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={14} /> Return to Sign In
                  </button>
                </div>
              </form>
            )}
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
