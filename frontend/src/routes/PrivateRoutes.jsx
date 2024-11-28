import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;