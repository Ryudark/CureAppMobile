import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Nav from "./nav/Nav";

const HomeLogin = () => {
  const isLogged = useSelector((state) => state.islogged);
  if (isLogged) return <Nav />;

  return <Login />;
};

export default HomeLogin;
