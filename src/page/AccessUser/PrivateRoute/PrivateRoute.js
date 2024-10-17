import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
import {getIsLoggedIn} from "../../../redux/auth"

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn); // Проверяем статус аутентификации
  return isLoggedIn ? <Component /> : <Navigate to="/authorization" />; // Если не залогинен, редирект на авторизацию
};