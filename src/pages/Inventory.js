import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import ShopContent from "../components/ShopContent";

const Inventory = () => {
  return (
    <>
      <MainHeader headerName={"Inventory"} />
      <ShopContent />
      <MainFooter />
    </>
  );
};

export default Inventory;
