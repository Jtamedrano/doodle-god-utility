import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavView from "./Componenets/Views/NavView";
import Home from "./Componenets/Views/Home";
import Login from "./Componenets/auth/Login";
import Register from "./Componenets/auth/Register";
import UserContext from "./context/userContext";
import Axios from "axios";

import "./style.css";
import { Container } from "react-bootstrap";

export default function Main() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      // Creates token field in local storage
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
      console.log(tokenRes.data);
    };

    checkLoggedIn();
  }, []);
  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavView />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Container>
        </UserContext.Provider>
      </Router>
    </>
  );
}
