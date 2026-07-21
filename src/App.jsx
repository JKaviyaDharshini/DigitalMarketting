import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const Services = React.lazy(() => import('./pages/services/Services'));
const DigitalMarketing = React.lazy(() => import('./pages/services/DigitalMarketing'));
const Shoots = React.lazy(() => import('./pages/services/Shoots'));
const SocialMedia = React.lazy(() => import('./pages/services/SocialMedia'));
const Editing = React.lazy(() => import('./pages/services/Editing'));
const Design = React.lazy(() => import('./pages/services/Design'));
const Branding = React.lazy(() => import('./pages/services/Branding'));
const SubServiceLanding = React.lazy(() => import('./pages/services/SubServiceLanding'));
const IndustryLanding = React.lazy(() => import('./pages/industries/IndustryLanding'));
const Blog = React.lazy(() => import('./pages/blog/Blog'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const Terms = React.lazy(() => import('./pages/terms/Terms'));
const Privacy = React.lazy(() => import('./pages/privacy/Privacy'));
const AdminLayout = React.lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const AdminGuard = React.lazy(() => import('./pages/admin/AdminGuard'));
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog'));

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = React.useState(false);

  // Global Blog State (Mock Database)
  const [blogs, setBlogs] = React.useState([
    {
      id: 1,
      badge: 'SHOOT',
      date: 'Jul 02, 2026',
      title: '5 lighting mistakes that make product photos look cheap',
      content: 'Small fixes — from window placement to reflector angles — that separate a showroom-ready photo from a phone snap.',
      badgeColor: '#F7B045',
      image: ''
    },
    {
      id: 2,
      badge: 'ADS',
      date: 'Jun 24, 2026',
      title: 'Meta Ads vs Google Ads: which one fits your business',
      content: 'A plain comparison for real estate, showrooms, and clinics — where each platform pulls its weight.',
      badgeColor: '#F7B045',
      image: ''
    },
    {
      id: 3,
      badge: 'EDIT',
      date: 'Jun 11, 2026',
      title: 'Why your reels stop getting watched after 3 seconds',
      content: 'The first-frame rule, caption timing, and pacing choices that keep viewers from scrolling past.',
      badgeColor: '#F7B045',
      image: ''
    }
  ]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="services/shoots" element={<Shoots />} />
            <Route path="services/social-media" element={<SocialMedia />} />
            <Route path="services/editing" element={<Editing />} />
            <Route path="services/design" element={<Design />} />
            <Route path="services/branding" element={<Branding />} />
            <Route path="services/:category/:subServiceId" element={<SubServiceLanding />} />
            <Route path="industries/:industryId" element={<IndustryLanding />} />
            <Route path="blog" element={<Blog blogs={blogs} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          
          {/* Admin Protected Routes */}
          <Route path="/admin" element={<AdminGuard isAuthenticated={isAdminAuthenticated} setIsAuthenticated={setIsAdminAuthenticated} />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="blog" element={<AdminBlog blogs={blogs} setBlogs={setBlogs} />} />
              <Route path="testimonials" element={<div className="text-white p-8">Testimonials Management (Coming Soon)</div>} />
              <Route path="settings" element={<div className="text-white p-8">Settings (Coming Soon)</div>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
