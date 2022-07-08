import React from "react";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import ShopContent from "../components/ShopContent";

const Inventory = () => {
  return (
    <>
      <MainHeader headerName={"Inventory"} />
      <Character />
      <ShopContent />
      <MainFooter />
    </>
  );
};

export default Inventory;
