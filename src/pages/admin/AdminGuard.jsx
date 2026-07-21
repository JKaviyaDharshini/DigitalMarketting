import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLogin from './AdminLogin';

const AdminGuard = ({ isAuthenticated, setIsAuthenticated }) => {
  // If not authenticated, render the login component directly on this route
  if (!isAuthenticated) {
    return <AdminLogin setIsAuthenticated={setIsAuthenticated} />;
  }

  // If authenticated, render the child routes (AdminLayout)
  return <Outlet />;
};

export default AdminGuard;
