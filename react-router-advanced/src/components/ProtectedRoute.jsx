import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Assume we have an AuthContext

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
