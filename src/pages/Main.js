import React from "react";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import TodoList from "../components/TodoList";
import MainFooter from "../components/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "../../src/redux/modules/user";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <>
      <MainHeader headerName={user.nickname} />
      <Character />
      <TodoList />
      <MainFooter />
    </>
  );
};

export default Main;
