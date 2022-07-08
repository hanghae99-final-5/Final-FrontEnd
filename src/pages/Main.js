import React from "react";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import TodoList from "../components/TodoList";
import MainFooter from "../components/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "../../src/redux/modules/user";
import mainLogo from "../assets/images/icons/main_logo.png";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <>
      <MainHeader headerImg={mainLogo} />
      <Character />
      <TodoList />
      <MainFooter />
    </>
  );
};

export default Main;
