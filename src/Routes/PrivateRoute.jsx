import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // Redirect to login if currentUser is falsy
    if (!currentUser || currentUser.user === null) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Render children only if currentUser is truthy
  return currentUser ? <>{children}</> : null;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;