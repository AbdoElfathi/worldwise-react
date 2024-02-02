import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/FakeAuthContext";
import Login from "./Login";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
}

export default ProtectedRoute;
