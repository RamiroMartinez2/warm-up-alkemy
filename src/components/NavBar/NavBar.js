import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const NavBar = () => {
  const history = useHistory();
  const isToken = localStorage.getItem("token");

  const [isLogin, setLogin] = useState(isToken);

  const logOut = () => {
    setLogin(localStorage.removeItem("token"));
  };
  const logIn = () => {
    if (isLogin) {
      history.push("/");
    }
  };

  return (
    <header>
      <nav >
        <ul >
          <Link to="/">
            <li>home</li>
          </Link>
          <Link>
            <li>edit form</li>
          </Link>
          <Link  to="/login">
            {isLogin ? (
              <li onClick={() => logOut()}>log out</li>
            ) : (
              <li onClick={() => logIn()}>login</li>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;