import React, { useContext } from "react";
import { Button, NavItem } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
      {userData.user ? (
        <div className="navElements">
          <NavItem>Welcome {userData.user.displayName}</NavItem>
          <NavItem className="navElement-2">
            <Button onClick={logout}>Log Out</Button>
          </NavItem>
        </div>
      ) : (
        <div className="navElements">
          <NavItem>
            <Button className={"mr-2"} onClick={register}>
              Register
            </Button>
          </NavItem>
          <NavItem>
            <Button onClick={login}>Login</Button>
          </NavItem>
        </div>
      )}
    </div>
  );
}
