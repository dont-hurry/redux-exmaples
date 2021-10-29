import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = () => dispatch({ type: "AUTH/LOGIN" });

  const handleLogout = () => dispatch({ type: "AUTH/LOGOUT" });

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
/*

import { authActions } from "../store/auth";

const Auth = () => {
  
};
*/
