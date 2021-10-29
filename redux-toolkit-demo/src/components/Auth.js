import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = () => dispatch(authActions.login());

  const handleLogout = () => dispatch(authActions.logout());

  return (
    <div>
      <div>Authentication state: {isAuthenticated.toString()}</div>
      <div>
        {!isAuthenticated && <button onClick={handleLogin}>Login</button>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Auth;
