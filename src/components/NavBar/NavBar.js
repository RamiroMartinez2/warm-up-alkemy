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
      <nav className="mt-4">
        <ul  className="d-flex justify-content-around list-unstyled " >
          <Link className="text-decoration-none" to="/">
            <li className="text-capitalize text-dark ">home</li>
          </Link>
          <Link className="text-decoration-none">
            <li className="text-capitalize text-dark">edit form</li>
          </Link>
          <Link className="text-decoration-none"  to="/login">
            {isLogin ? (
              <li className="text-capitalize text-dark" onClick={() => logOut()}>log out</li>
            ) : (
              <li className="text-capitalize text-dark" onClick={() => logIn()}>login</li>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;