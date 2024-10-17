import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
import {getIsLoggedIn} from "../../../redux/auth"

export const PublicRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/user" /> : <Component />;
};