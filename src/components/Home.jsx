import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../Redux/Actions/actions";
import Loader from "./Loader";
import Login from "../components/Login";
import Nav from "./nav/Nav";
import { View } from "react-native";

const HomeLogin = () => {
  const dispatch = useDispatch();
  const { islogged, isLoggin, userDetail, id, dataLog } = useSelector(
    (state) => state
  );
  const info = userDetail[0];
  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [info]);

  if (islogged) {
    return (
      <>
        <Nav />
        {isLoggin && <Loader />}
      </>
    );
  }

  return (
    <View>
      <Login />
      {isLoggin && <Loader />}
    </View>
  );
};

export default HomeLogin;
