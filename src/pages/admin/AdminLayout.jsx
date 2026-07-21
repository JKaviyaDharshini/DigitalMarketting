import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Bell, Search, Layout } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Blog Posts', path: '/admin/blog', icon: <FileText size={20} /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <Users size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#06030a] flex text-white font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0510] flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 group">
            <Layout className="text-[var(--accent)] group-hover:rotate-12 transition-transform" />
            <span className="font-heading font-black text-xl tracking-tight uppercase">Admin<span className="text-[var(--accent)]">Panel</span></span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                  ? 'bg-gradient-to-r from-[var(--grad-1)]/20 to-transparent text-white border-l-2 border-[var(--accent)]' 
                  : 'text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-white/5">
          <Link 
            to="/" 
            onClick={() => localStorage.removeItem('adminAuth')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-colors font-medium"
          >
            <LogOut size={20} />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#0a0510]/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
          
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-pulse"></span>
            </button>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--grad-1)] to-[var(--grad-2)] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0a0510] flex items-center justify-center text-xs font-bold">
                  AD
                </div>
              </div>
              <div>
                <p className="text-sm font-bold group-hover:text-[var(--accent-light)] transition-colors">Admin User</p>
                <p className="text-xs text-white/50">admin@frameforge.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-8 overflow-x-hidden relative">
          {/* Subtle background glow for the main area */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--grad-1)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.15] pointer-events-none"></div>
          
          <div className="relative z-10">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
