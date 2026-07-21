import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, X, Image as ImageIcon, Bold, Link as LinkIcon, Save } from 'lucide-react';

const AdminBlog = ({ blogs = [], setBlogs }) => {
  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  
  // Ref for the contentEditable div
  const editorRef = useRef(null);

  const openModal = (blog = null) => {
    if (blog) {
      setEditingId(blog.id);
      setTitle(blog.title);
      setImage(blog.image);
      // We will set the editor innerHTML after it mounts in a useEffect, or directly if it's already mounted.
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.innerHTML = blog.content;
        }
      }, 0);
    } else {
      setEditingId(null);
      setTitle('');
      setImage('');
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.innerHTML = '';
        }
      }, 0);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  // Handle Photo Upload Simulation (Creates a local blob URL)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Custom Rich Text Editor Commands
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handleAddLink = () => {
    const url = prompt('Enter the link URL:');
    if (url) {
      formatText('createLink', url);
    }
  };

  // Save Post (Create or Update)
  const handleSave = (e) => {
    e.preventDefault();
    const content = editorRef.current.innerHTML;
    
    if (!title.trim() || !content.trim()) {
      alert('Title and content are required!');
      return;
    }

    if (editingId) {
      // Update existing
      setBlogs(blogs.map(b => b.id === editingId ? { ...b, title, image, content } : b));
    } else {
      // Create new
      const newBlog = {
        id: Date.now(),
        title,
        image,
        content,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        badge: 'NEW',
        badgeColor: '#E1306C' // Default to accent color
      };
      setBlogs([newBlog, ...blogs]);
    }
    closeModal();
  };

  // Open Delete Confirmation Modal
  const confirmDelete = (id) => {
    setDeleteConfirmId(id);
  };

  // Execute Delete Post
  const executeDelete = () => {
    if (deleteConfirmId !== null) {
      setBlogs(blogs.filter(b => b.id !== deleteConfirmId));
      setDeleteConfirmId(null);
    }
  };

  return (
    <div className="p-8 text-white min-h-full">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-light tracking-wide mb-2">Blog Management</h1>
          <p className="text-white/50 font-light">Create, edit, and publish content to your platform.</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
        >
          <Plus size={20} />
          Create Post
        </button>
      </div>

      {/* Blogs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <motion.div 
            key={blog.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors group"
          >
            {/* Blog Image */}
            <div className="h-48 bg-white/5 relative overflow-hidden">
              {blog.image ? (
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>
              )}
            </div>
            
            {/* Blog Content Preview */}
            <div className="p-6">
              <p className="text-xs text-purple-400 font-semibold tracking-wider mb-2">{blog.date}</p>
              <h3 className="text-xl font-medium mb-4 line-clamp-2">{blog.title}</h3>
              
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button 
                  onClick={() => openModal(blog)}
                  className="p-2 text-white/50 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors tooltip"
                  title="Edit Post"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => confirmDelete(blog.id)}
                  className="p-2 text-white/50 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  title="Delete Post"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-20 text-white/40">
          No blog posts found. Click "Create Post" to get started.
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            ></motion.div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0a0510] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                <h2 className="text-2xl font-light tracking-wide">{editingId ? 'Re-edit Post' : 'Create New Post'}</h2>
                <button onClick={closeModal} className="p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10">
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Title Input */}
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-white/50 uppercase mb-2">Blog Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter an engaging title..."
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-colors font-medium text-lg"
                  />
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-white/50 uppercase mb-2">Cover Photo</label>
                  <div className="flex items-center gap-4">
                    {image && (
                      <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/20">
                        <img src={image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <label className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl cursor-pointer transition-colors text-sm font-medium">
                      <ImageIcon size={18} />
                      {image ? 'Change Photo' : 'Upload Photo'}
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                  </div>
                </div>

                {/* Custom Rich Text Editor (Content Write) */}
                <div className="flex flex-col h-[400px]">
                  <label className="block text-xs font-semibold tracking-widest text-white/50 uppercase mb-2">Post Content</label>
                  
                  <div className="flex-1 flex flex-col border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                    {/* Formatting Toolbar */}
                    <div className="flex items-center gap-2 p-3 border-b border-white/10 bg-white/5">
                      <button 
                        type="button"
                        onClick={() => formatText('bold')}
                        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                        title="Bold Text"
                      >
                        <Bold size={16} /> Bold
                      </button>
                      <div className="w-px h-6 bg-white/10 mx-2"></div>
                      <button 
                        type="button"
                        onClick={handleAddLink}
                        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                        title="Add Link"
                      >
                        <LinkIcon size={16} /> Link
                      </button>
                    </div>

                    {/* ContentEditable Area */}
                    <div 
                      ref={editorRef}
                      className="flex-1 p-6 overflow-y-auto focus:outline-none text-white/90 prose prose-invert max-w-none"
                      contentEditable={true}
                      suppressContentEditableWarning={true}
                      placeholder="Start writing your blog content here..."
                    >
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end gap-4">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 rounded-xl font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  <Save size={18} />
                  Save Post
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setDeleteConfirmId(null)}
            ></motion.div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0510] border border-white/10 rounded-2xl shadow-2xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6">
                <Trash2 size={32} />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-2 tracking-wide">Delete Post?</h3>
              <p className="text-white/50 font-light mb-8">
                Are you sure you want to permanently delete this blog post? This action cannot be undone.
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium tracking-wide transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={executeDelete}
                  className="flex-1 py-3 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-xl font-medium tracking-wide transition-colors border border-red-500/20"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Editor CSS for empty state placeholder and links */}
      <style>{`
        [contenteditable]:empty:before {
          content: attr(placeholder);
          color: rgba(255, 255, 255, 0.3);
          pointer-events: none;
          display: block; 
        }
        [contenteditable] a {
          color: #60a5fa;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AdminBlog;
