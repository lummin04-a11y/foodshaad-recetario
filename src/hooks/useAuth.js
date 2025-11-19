import { useState, useCallback } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [userRole, setUserRole] = useState(""); // 'cliente' o 'admin'

  const handleLogin = useCallback((user, role) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    setUserRole(role);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentUser("");
    setUserRole("");
  }, []);

  return {
    isAuthenticated,
    currentUser,
    userRole,
    handleLogin,
    handleLogout
  };
};