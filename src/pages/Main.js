import React from "react";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import TodoList from "../components/TodoList";
import MainFooter from "../components/MainFooter";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
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
