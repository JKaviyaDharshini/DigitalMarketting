import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Mail, TrendingUp, MoreVertical, ArrowUpRight } from 'lucide-react';

const StatCard = ({ title, value, increase, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass p-6 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
      {icon}
    </div>
    <h3 className="text-white/50 text-sm font-bold tracking-widest uppercase mb-2">{title}</h3>
    <p className="text-4xl font-black text-white font-heading mb-4">{value}</p>
    <div className="flex items-center gap-2 text-sm">
      <span className="flex items-center text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-bold">
        <ArrowUpRight size={14} className="mr-1" /> {increase}
      </span>
      <span className="text-white/40">vs last month</span>
    </div>
  </motion.div>
);

const AdminDashboard = () => {
  const recentMessages = [
    { id: 1, name: 'Sarah Jenkins', email: 'sarah@realestate.com', subject: 'Property Shoot Inquiry', date: '2 mins ago', status: 'New' },
    { id: 2, name: 'Michael Chen', email: 'm.chen@showroom.co', subject: 'Ad Campaign Pricing', date: '1 hour ago', status: 'Read' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena@boutique.net', subject: 'Reels Editing Package', date: '3 hours ago', status: 'Read' },
    { id: 4, name: 'David Smith', email: 'david@clinic.org', subject: 'Social Media Management', date: '1 day ago', status: 'Replied' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <div className="flex items-end justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight font-heading mb-2">Dashboard Overview</h1>
          <p className="text-white/50">Welcome back! Here's what's happening with your platform today.</p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Views" value="24.5K" increase="12%" icon={<Eye size={48} />} delay={0} />
        <StatCard title="Total Leads" value="1,284" increase="8.5%" icon={<Users size={48} />} delay={0.1} />
        <StatCard title="New Messages" value="42" increase="24%" icon={<Mail size={48} />} delay={0.2} />
        <StatCard title="Conversion" value="3.2%" increase="1.2%" icon={<TrendingUp size={48} />} delay={0.3} />
      </div>

      {/* Recent Activity Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-[32px] border border-white/5 bg-white/[0.01] overflow-hidden"
      >
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">Recent Inquiries</h2>
          <button className="text-sm text-[var(--accent)] hover:text-white font-bold tracking-widest uppercase transition-colors">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-8 py-4 text-xs font-bold text-white/40 uppercase tracking-widest w-1/4">Sender</th>
                <th className="px-8 py-4 text-xs font-bold text-white/40 uppercase tracking-widest w-1/3">Subject</th>
                <th className="px-8 py-4 text-xs font-bold text-white/40 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-white/40 uppercase tracking-widest text-right">Time</th>
                <th className="px-8 py-4 w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentMessages.map((msg) => (
                <tr key={msg.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <p className="text-white font-medium">{msg.name}</p>
                    <p className="text-white/40 text-sm">{msg.email}</p>
                  </td>
                  <td className="px-8 py-5 text-white/80">{msg.subject}</td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                      msg.status === 'New' ? 'bg-[var(--accent)]/20 text-[var(--accent-light)]' : 
                      msg.status === 'Replied' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/60'
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-white/40 text-sm text-right">{msg.date}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
};

export default AdminDashboard;
